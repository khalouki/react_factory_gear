import { Link } from 'react-router-dom';
export default function ContactHome() {
    return (
        <>
            <section id="contact_section" className="py-16 bg-[rgb(217,222,233)] text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-black font-bold text-center mb-12">CONTACTEZ-NOUS</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-7xl">

                        {/* Section des informations de contact */}
                        <div className="p-6 bg-slate-800 rounded-lg shadow-md h-full min-h-[400px] flex flex-col justify-between">
                            {/* Nom du site */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <i data-lucide="phone" className="h-5 w-5 text-primary"></i>
                                    <p className="text-lg font-semibold">FACTORY GEAR</p>
                                </div>

                                {/* Détails de contact et heures d'ouverture */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <i data-lucide="mail" className="h-5 w-5 text-primary"></i>
                                        <p className="text-lg font-semibold">factorygear@gmail.com</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <i data-lucide="map-pin" className="h-5 w-5 text-primary"></i>
                                        <p>2 rue Yacoub El Mansour, Tanger 90000</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <i data-lucide="mail" className="h-5 w-5 text-primary"></i>
                                        <a href="mailto:contact@factorygear.ma" className="hover:text-primary transition-colors">
                                            contact@factorygear.ma
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <i data-lucide="phone" className="h-5 w-5 text-primary"></i>
                                        <a href="tel:+2125XXXXXXX" className="hover:text-primary transition-colors">
                                            +212 5XX XX XX XX
                                        </a>
                                    </div>

                                    {/* Heures d'ouverture */}
                                    <div className="pt-4">
                                        <h3 className="text-lg font-semibold mb-3">Heures d'ouverture</h3>
                                        <p>Lundi - Vendredi: 8h00 - 18h00</p>
                                        <p>Samedi: 9h00 - 13h00</p>
                                        <p>Dimanche: Fermé</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bouton de contact */}
                            <div className="pt-4 text-center">
                                <button className="px-4 py-2 rounded-md bg-[#9292c7] hover:bg-primary/90 text-white">
                                    <Link to="/Contact">Contact-nous</Link>
                                </button>
                            </div>
                        </div>

                        {/* Carte Google Maps */}
                        <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6761372911647!2d-5.8134899!3d35.7651356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e747!2sTanger%2C%20Morocco!5e0!3m2!1sen!2sus!4v1647887291102!5m2!1sen!2sus"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                aria-label="Carte de localisation de Factory Gear à Tanger">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
