// src/components/Card.js
import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-xl animate-on-scroll overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-animation="animate__fadeInUp">
            <div className="h-48 relative">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;