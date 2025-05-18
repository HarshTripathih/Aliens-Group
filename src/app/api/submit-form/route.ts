import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import axios from 'axios';
import type { NextRequest } from 'next/server';

interface UTMParams {
  utm_campaign?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_term?: string;
  utm_content?: string;
  utm_remarketing?: string;
  utm_campaign_id?: string;
  utm_audience_id?: string;
  utm_audience_name?: string;
  utm_ad_id?: string;
  utm_ad_name?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  budget: string;
  plotsize: string;
  designation?: string;
  utmParams?: UTMParams;
  formType?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    const {
      name,
      email,
      phone,
      message,
      budget,
      plotsize,
      designation,
      utmParams = {},
      formType = 'default',
    } = body;

    // Spam check: prevent repeated digits
    if (/(\d)\1{3,}/.test(phone)) {
      return NextResponse.json({ error: 'Spam detected. Please try again.' }, { status: 400 });
    }

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: 'alienshub.co.in',
      port: 465,
      secure: true,
      auth: {
        user: 'smtpmail@alienshub.co.in',
        pass: 'i8Rk72[ZXlDB', // 🔒 Store securely
      },
    });

    // Send Email
    await transporter.sendMail({
      from: '"Aliens Group" <smtpmail@alienshub.co.in>',
      to: 'suman.m@aliensgroup.in',
      subject: 'Aliens Website Enquiry',
      html: `
        <h3>New Enquiry (${formType})</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Designation:</strong> ${designation || '-'}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Plot Size:</strong> ${plotsize}</p>
        <p><strong>Message:</strong> ${message || '-'}</p>
      `,
    });

    // Salesforce Fields
    const salesforceFields = new URLSearchParams({
      first_name: name,
      last_name: '-',
      email,
      mobile: phone,
      '00N2x000003TZ4w': budget,
      '00N2x000008xxWT': plotsize,
      '00N2x000006PgI1': designation || '',
      '00N2x000003TZ67': 'Aliens Hub',
      retURL: 'https://www.alienshub.co.in/luxury-plots-srisailam-highway-kadthal-hyderabad/',
      '00N2x000003TZ73': utmParams.utm_medium || '',
      '00N9C000000No9S': 'Digital',
      '00N2x000003TZ75': utmParams.utm_term || '',
      '00N2x000003TZ6T': 'Google',
      '00N2x000003TZ71': utmParams.utm_campaign || '',
      '00N2x000003TZ74': utmParams.utm_source || '',
      '00N2x000006Owm3': 'Paid',
      lead_source: 'Digital',
      '00NOW000003fDsP': utmParams.utm_remarketing || '',
      '00NOW000004JtuX': utmParams.utm_campaign_id || '',
      '00NOW000004Jtxl': utmParams.utm_audience_id || '',
      '00NOW000004Ju2b': utmParams.utm_audience_name || '',
      '00NOW000004Ju4D': utmParams.utm_ad_id || '',
      '00NOW000004Ju5p': utmParams.utm_ad_name || '',
      oid: '00D2x000001fBeR',
      debug: '1',
      debugEmail: '',
    });

    // Submit to Salesforce
    await axios.post(
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      salesforceFields
    );

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
