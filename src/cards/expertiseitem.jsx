// src/components/ExpertiseItem.js
import React from 'react';

const ExpertiseItem = ({ image, title, description, number }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 relative">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-primary/20">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="text-slate-600 mt-1">{description}</p>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {number}
                </div>
            </div>
        </div>
    );
};

export default ExpertiseItem;