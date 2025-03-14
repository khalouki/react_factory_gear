import React from 'react';
import QualitiesSection from '../components/quality';
import Pricing from '../components/pricing';
import Technologies from '../components/technologie';
import HeaderHome from '../components/header_home';
import HeroSection from '../components/Hero_section'; // Corrigé en PascalCase
import AboutUs from '../components/about_us'; // Corrigé en PascalCase
import WhyUs from '../components/why_us'; // Corrigé en PascalCase
import Expertise from '../components/expertise';
import MovingButton from '../components/movingButton';
import ContactHome from '../components/contact'; // Import manquant ajouté

export default function Home() {
    return (
        <>
            <HeaderHome />
            <HeroSection />
            <AboutUs />
            <WhyUs />
            <Expertise />
            <QualitiesSection />
            <Pricing />
            <Technologies />
            <ContactHome /> {/* Si vous voulez que la page de contact soit sur la page d'accueil */}
            <MovingButton />
        </>
    );
}