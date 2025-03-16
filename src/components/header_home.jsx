import React, { useEffect } from 'react';
import logo from '../images/logo_site.png'
import {Menu }  from 'lucide-react';
const HeaderHome = () => {
    // Gestion du menu mobile
    useEffect(() => {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        const toggleMobileMenu = () => {
            // Basculer la visibilité du menu mobile avec une transition fluide
            if (mobileMenu.classList.contains("max-h-0")) {
                mobileMenu.classList.remove("max-h-0");
                mobileMenu.classList.add("max-h-96"); // Ajustez cette valeur en fonction de la hauteur de votre contenu
            } else {
                mobileMenu.classList.remove("max-h-96");
                mobileMenu.classList.add("max-h-0");
            }
        };

        // Ajouter un écouteur d'événement au bouton du menu mobile
        mobileMenuButton.addEventListener("click", toggleMobileMenu);

        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => {
            mobileMenuButton.removeEventListener("click", toggleMobileMenu);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-[4.5rem]" />
                    </Link>
                </div>

                {/* Navigation pour les écrans larges */}
                <nav className="hidden md:flex gap-6">
                    <a href="#about"
                        className="text-sm font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg">
                        Qui Sommes-Nous
                    </a>
                    <a href="#why-us"
                        className="text-sm font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg">
                        Pourquoi Nous
                    </a>
                    <a href="#expertise"
                        className="text-sm font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg">
                        Notre Expertise
                    </a>
                    <a href="#qualities"
                        className="text-sm font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg">
                        Nos Qualités
                    </a>
                    <a href="#pricing"
                        className="text-sm font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg">
                        Tarifs
                    </a>
                    <a href="#contact_section"
                        className="text-sm font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg">
                        Contact
                    </a>
                </nav>

                {/* Bouton du menu mobile */}
                <button id="mobile-menu-button" className="md:hidden px-4 py-2 rounded border border-gray-300 text-sm">
                    <Menu />
                </button>
            </div>

            {/* Navigation pour les écrans mobiles */}
            <nav id="mobile-menu"
                className="md:hidden bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t overflow-hidden transition-all duration-300 max-h-0">
                <div className="container mx-auto px-4 py-4">
                    <a href="#about"
                        className="block py-2 text-sm font-medium transition-colors hover:bg-gray-100 px-4 rounded-lg">
                        Qui Sommes-Nous
                    </a>
                    <a href="#why-us"
                        className="block py-2 text-sm font-medium transition-colors hover:bg-gray-100 px-4 rounded-lg">
                        Pourquoi Nous
                    </a>
                    <a href="#expertise"
                        className="block py-2 text-sm font-medium transition-colors hover:bg-gray-100 px-4 rounded-lg">
                        Notre Expertise
                    </a>
                    <a href="#qualities"
                        className="block py-2 text-sm font-medium transition-colors hover:bg-gray-100 px-4 rounded-lg">
                        Nos Qualités
                    </a>
                    <a href="#pricing"
                        className="block py-2 text-sm font-medium transition-colors hover:bg-gray-100 px-4 rounded-lg">
                        Tarifs
                    </a>
                    <a href="#contact"
                        className="block py-2 text-sm font-medium transition-colors hover:bg-gray-100 px-4 rounded-lg">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default HeaderHome;
