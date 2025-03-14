import React from 'react';
import { CheckCircle2, Clock, Truck, UserCheck } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">TARIFS ET ENGAGEMENTS</h2>
                <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                    Des solutions adaptées à vos besoins avec un engagement de qualité
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-blue-900 text-white p-6">
                            <h3 className="text-2xl font-bold mb-2">Nos Tarifs</h3>
                            <p className="opacity-90">Flexibles et adaptés à vos besoins</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <div className="bg-blue-500/10 p-2 rounded-full">
                                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                                </div>
                                <p>Tarifs sur mesure selon vos besoins spécifiques</p>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                                <div className="bg-blue-500/10 p-2 rounded-full">
                                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                                </div>
                                <p>Proposition de contrats annuels pour une gestion budgétaire optimale</p>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                                <div className="bg-blue-500/10 p-2 rounded-full">
                                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                                </div>
                                <p>Engagement à fournir le meilleur service au meilleur prix</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-blue-900  text-white p-6">
                            <h3 className="text-2xl font-bold mb-2">Nos Engagements</h3>
                            <p className="opacity-90">Disponibilité et professionnalisme</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <div className="bg-blue-500/10 p-2 rounded-full">
                                    <Clock className="h-5 w-5 text-blue-500" />
                                </div>
                                <p>Interventions 24h/24h en cas d'urgence</p>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <div className="bg-blue-500/10 p-2 rounded-full">
                                    <Truck className="h-5 w-5 text-blue-500" />
                                </div>
                                <p>Présence sur votre site d'exploitation et chantiers</p>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                            <div className="bg-blue-500/10 p-2 rounded-full">
                                    <UserCheck className="h-5 w-5 text-blue-500" />
                                </div>
                                <p>Suivi personnalisé et relation client privilégiée</p>
                            </div>
                        </div>
                        <div className="p-6 pt-2 text-center">
                            <button className="px-4 py-2 rounded-md bg-blue-900 hover:bg-blue/90 text-white">
                                <a href="/contact_form">Demande un Devis</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}