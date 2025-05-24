import { Cormorant_Garamond } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import { Corinthia } from "next/font/google";



export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const corinthia = Corinthia({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-corinthia',
  display: 'swap',
});

export const lato = Lato({
    subsets: ['latin'],
    weight: ['100','300','400','700'],
    variable: '--font-lato',
    display: 'swap'
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Export all fonts as one object if needed
export const allFontVariables = [
  cormorant.variable,
  lato.variable,
  inter.variable,
  playfair.variable,
  geistSans.variable,
  geistMono.variable,
  corinthia.variable
  // add more here
];