'use client';

import { useEffect, useState } from 'react';
import PdfModal from './NewsPdfModal';

export default function ClientHomeModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    const handleClickOutside = () => setShowModal(false);
    if (showModal) document.addEventListener('click', handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <PdfModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      pdfPath="https://aliensgroupmedia.s3.ap-south-1.amazonaws.com/newsletter.pdf"
      title="Aliens Newsletter"
    />
  );
}
