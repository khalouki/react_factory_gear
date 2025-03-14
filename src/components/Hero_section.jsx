import React, { useState, useEffect } from 'react';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

export default function Hero_section() {
    const backgroundImages = [image1, image2, image3, image4];
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hed" className="relative h-[80vh] flex items-center justify-center bg-[#000000c7] text-white overflow-hidden">
            <div id="hero-carousel" className="absolute inset-0">
                {backgroundImages.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Industrial automation background ${index + 1}`} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-20' : 'opacity-0'}`} 
                    />
                ))}
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    AUTOMATISME • ROBOTIQUE • MAINTENANCE
                </h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Solutions industrielles innovantes pour optimiser vos performances
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button className="px-6 py-3 text-lg font-medium rounded-md bg-primary hover:bg-primary/90 text-white">
                        <a href="#expertise">Nos Services</a>
                    </button>
                    <button className="px-6 py-3 text-lg font-medium rounded-md border border-white text-white hover:bg-white/10">
                        <a href="contact.html">Contactez-nous</a>
                    </button>
                </div>
            </div>
        </section>
    );
}
