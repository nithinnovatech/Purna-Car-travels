import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919030664487?text=Hello%2C%20I%20would%20like%20to%20book%20a%20vehicle"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-bounce group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={32} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </a>
    );
};

export default WhatsAppButton;
