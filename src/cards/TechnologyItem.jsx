// src/components/TechnologyItem.js
import React from 'react';

const TechnologyItem = ({ image, alt }) => {
    return (
        <div className="flex-shrink-0 w-32 h-32 bg-slate-50 rounded-lg shadow-sm flex items-center justify-center">
            <img src={image} alt={alt} width="100" height="100" />
        </div>
    );
};

export default TechnologyItem;