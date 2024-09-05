import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/9315535846"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 sm:right-4 right-16 bg-green-500 text-white sm:p- p-2 sm:rounded-full rounded-lg shadow-lg hover:bg-green-600 transition-colors z-50"
        >
            <div className="flex flex-row-reverse sm:gap-2 gap-0.5">
                <BsWhatsapp className="sm:text-2xl text-base " />
            </div>
        </a>
    );
};

export default WhatsAppButton;
