// src/components/Why.js
import React from 'react';
import Card from '../cards/card_why_us';
import image6 from '../images/image6.jpg'
import image1 from '../images/image1.jpeg'
import image5 from '../images/image5.png'
import image4 from '../images/is-guvenliginin-onemi-03.webp'
const Why_us = () => {
    const cardsData = [
        {
            image: image6,
            title: "Maintenance Professionnelle",
            description: "Nous offrons des services de maintenance incluant l'inspection, la réparation et l'entretien des équipements industriels. Notre équipe intervient rapidement pour minimiser les temps d'arrêt coûteux."
        },
        {
            image: image5,
            title: "Solutions Clé en Main",
            description: "Dans le domaine de l'automatisation et de la robotique, nous proposons des solutions clé en main, de la conception à l'installation de systèmes automatisés adaptés à vos besoins."
        },
        {
            image: image1,
            title: "Expertise Technique",
            description: "Notre expertise couvre la programmation de PLC, la configuration de systèmes de contrôle et l'intégration de composants électromécaniques avec les dernières technologies."
        },
        {
            image: image4,
            title: "Sécurité et Environnement",
            description: "La sécurité et le respect des normes sont notre priorité, tout comme notre engagement envers l'environnement, en favorisant l'efficacité énergétique et la réduction des déchets."
        }
    ];

    return (
        <section id="why-us" className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">POURQUOI NOUS ?</h2>
                <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                    Notre expertise et notre engagement font de nous le partenaire idéal pour vos besoins industriels
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why_us;