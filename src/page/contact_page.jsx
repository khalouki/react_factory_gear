import React, { useEffect, useState } from 'react'; // Ajout de useState manquant
import { Link } from 'react-router-dom';
import { MapPinned, Phone, Mail, Clock } from 'lucide-react'; // Import des icônes Lucide
import 'animate.css'; // Import de animate.css
import logo from '../images/logo_site.png';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const Contact_Page = () => {
    const backgroundImages = [image1, image2, image3, image4];
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    // Gestion du changement d'image de fond
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 7000);

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, [backgroundImages.length]);

    // Scroll vers le haut de la page au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis'); // Logique à implémenter
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* En-tête */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4 flex h-16 items-center justify-center">
                    <div className="flex justify-center items-center">
                        <a href="/" aria-label="Retour à l'accueil">
                            <img src={logo} alt="Logo" className="h-[4.5rem]" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Section Hero */}
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
                        Contactez-nous
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos projets.
                    </p>
                </div>
            </section>

            {/* Section Contact */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Informations de contact */}
                    <div className="animate__animated animate__fadeIn">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Entrez en contact</h2>
                        <p className="text-gray-600 mb-8">
                            Notre équipe de service client est prête à vous aider pour toute question concernant nos
                            produits industriels, services de maintenance de robots ou réparations de chariots
                            élévateurs.
                        </p>

                        {/* Localisation */}
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full text-white mr-4">
                                    <MapPinned className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Notre localisation</h3>
                                    <p className="text-gray-600 mt-1">
                                        2 rue Yacoub El Mansour,<br /> Tanger 90000
                                    </p>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full text-white mr-4">
                                    <Phone className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                                    <p className="text-gray-600 mt-1">
                                        Principal : +212 67859113<br />
                                        Support : +212 67859113
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full text-white mr-4">
                                    <Mail className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                    <p className="text-gray-600 mt-1">
                                        info@factorygear.com<br />
                                        support@factorygear.com
                                    </p>
                                </div>
                            </div>

                            {/* Heures d'ouverture */}
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full text-white mr-4">
                                    <Clock className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Heures d'ouverture</h3>
                                    <p className="text-gray-600 mt-1">
                                        Lundi - Vendredi : 8h00 - 18h00<br />
                                        Samedi : 9h00 - 14h00<br />
                                        Dimanche : Fermé
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="bg-white rounded-lg shadow-md p-8 animate__animated animate__fadeIn">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>

                        <div id="form-status" className="hidden p-4 rounded-md mb-6"></div>

                        <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                            {/* Champ Nom */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none"
                                    placeholder="Votre nom"
                                    required
                                />
                                <p className="mt-1 text-sm text-red-600 hidden" id="name-error"></p>
                            </div>

                            {/* Champ Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Adresse email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none"
                                    placeholder="votre.email@exemple.com"
                                    required
                                />
                                <p className="mt-1 text-sm text-red-600 hidden" id="email-error"></p>
                            </div>

                            {/* Champ Sujet */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none"
                                    placeholder="De quoi s'agit-il ?"
                                    required
                                />
                                <p className="mt-1 text-sm text-red-600 hidden" id="subject-error"></p>
                            </div>

                            {/* Champ Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none"
                                    placeholder="Votre message ici..."
                                    required
                                ></textarea>
                                <p className="mt-1 text-sm text-red-600 hidden" id="message-error"></p>
                            </div>

                            {/* Bouton Envoyer */}
                            <button
                                type="submit"
                                id="submit-button"
                                className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_Page;
