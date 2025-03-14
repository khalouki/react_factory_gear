// src/components/Technologies.js
import React from 'react';
import TechnologyItem from '../cards/TechnologyItem';
// Importation des images
import tech1 from '../images/technologie/tech1.jpg';
import tech2 from '../images/technologie/tech2.png';
import tech3 from '../images/technologie/tech3.jpg';
import company1 from '../images/technologie/company1.png';
import tech5 from '..//images/technologie/tech5.jpg';
import tech6 from '../images/technologie/tech6.png';
import tech7 from '../images/technologie/tech7.png';

const Technologies = () => {
    const technologiesData = [
        { image: tech1, alt: "Technology 1" },
        { image: tech2, alt: "Technology 2" },
        { image: tech3, alt: "Technology 3" },
        { image: company1, alt: "Technology 4" },
        { image: tech5, alt: "Technology 5" },
        { image: tech6, alt: "Technology 6" },
        { image: tech7, alt: "Technology 7" },
    ];

    // Duplicate the array for seamless looping
    const duplicatedTechnologies = [...technologiesData, ...technologiesData];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">TECHNOLOGIES</h2>
                <div className="relative">
                    <div className="tech-scroll flex gap-8 items-center">
                        {duplicatedTechnologies.map((tech, index) => (
                            <TechnologyItem key={index} image={tech.image} alt={tech.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;