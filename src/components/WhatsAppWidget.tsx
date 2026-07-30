"use client";

import React from "react";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/84963333844"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        backgroundColor: '#25D366',
        color: '#ffffff',
        padding: '16px',
        borderRadius: '50%',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
      }}
      className="hover:scale-110 active:scale-95 group"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg style={{ width: '24px', height: '24px', fill: 'currentColor' }} viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.843.002-2.633-1.02-5.107-2.88-6.97C16.59 1.921 14.121.897 11.487.897c-5.438 0-9.861 4.41-9.864 9.844-.001 1.73.457 3.419 1.32 4.91L1.93 21.03l5.594-1.467c-.287.168-.58.324-.877.421z" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-out whitespace-nowrap text-xs font-bold font-sans">
        Chat on WhatsApp
      </span>
    </a>
  );
}
