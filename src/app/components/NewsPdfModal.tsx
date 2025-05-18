'use client';

import React from 'react';
import { X } from 'lucide-react';
import { CustomButton } from './Button';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  title?: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfPath, title = 'PDF Viewer' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black z-10"
          aria-label="Close Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-3xl font-cormorant p-4 border-b">{title}</div>

        {/* PDF Viewer */}
        <iframe
          src={pdfPath}
          className="w-full h-full"
          title="PDF Viewer"
        />

        {/* Download Button */}
        {/* <div className="absolute top-2 left-[40rem]">
            <a href={pdfPath} download>
                <CustomButton
                text="Download Pdf"
                className="border border-black text-black"
                />
            </a>
        </div> */}

      </div>
    </div>
  );
};

export default PdfModal;
