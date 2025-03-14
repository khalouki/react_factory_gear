// src/components/Expertise.js
import React from 'react';
import ExpertiseItem from '../cards/expertiseitem';
// Importation des images
import robotique from '../images/technologie/robotique.jpg';
import chario from '../images/technologie/chario.jpg';
import porteLogique from '../images/technologie/porte_logique.webp';
import api from '../images/technologie/API.jpg';
import mesure from '../images/technologie/mesure.jpg';
import servoe from '../images/technologie/servoe.png';
import vettesse from '../images/technologie/vettesse.jpg';
import regulation from '../images/regulation.jpeg';
const Expertise = () => {
    const expertiseData = [
        {
            image: robotique, // Utilisation de l'image importée
            title: "Robotique",
            description: "Automatisation et intégration de systèmes robotiques",
            number: 1
        },
        {
            image: chario,
            title: "Chariots élévateurs",
            description: "Maintenance et réparation d'engins de levage",
            number: 2
        },
        {
            image: porteLogique,
            title: "Portes logistiques",
            description: "Installation et maintenance de portes industrielles",
            number: 3
        },
        {
            image: api,
            title: "Automates programmables",
            description: "Programmation et maintenance d'API industriels",
            number: 4
        },
        {
            image: mesure,
            title: "Instruments de mesure",
            description: "Calibration et maintenance d'appareils de mesure",
            number: 5
        },
        {
            image: servoe,
            title: "Servo-drives",
            description: "Installation et maintenance de servo-moteurs",
            number: 6
        },
        {
            image: vettesse,
            title: "Variateurs de vitesse",
            description: "Installation et paramétrage multi-marques",
            number: 7
        },
        {
            image: regulation,
            title: "Régulation et interfaces",
            description: "Configuration de systèmes de contrôle industriels",
            number: 8
        }
    ];

    return (
        <section id="expertise" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">NOTRE EXPERTISE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {expertiseData.map((item, index) => (
                        <ExpertiseItem
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            number={item.number}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;