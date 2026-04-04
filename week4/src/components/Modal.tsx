import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // ❌ If not open → render nothing
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose} //click outside closes modal
    >
      <div
        className="bg-white p-8 rounded-2xl shadow-xl w-96 relative"
        onClick={(e) => e.stopPropagation()} //prevents closing when clicking inside
      >
        {/* Injected content */}
        {children}

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}