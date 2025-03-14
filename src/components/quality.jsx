import { CheckCircle2, ShieldCheck, Clock, Zap, Settings2, UserCheck } from "lucide-react";

const qualities = [
    { icon: CheckCircle2, title: "Qualité Garantie", description: "Notre maintenance électronique et instrumentation assure la qualité pour des équipements solides et fiables." },
    { icon: ShieldCheck, title: "Sécurité Avant Tout", description: "En respectant rigoureusement les normes, nous renforçons la sécurité et la confiance." },
    { icon: Clock, title: "Production Ininterrompue", description: "Nous maintenons votre production sans interruption grâce à des réparations efficaces." },
    { icon: Zap, title: "Réactivité Prépondérante", description: "Nos stocks et expertise résolvent rapidement les besoins courants et les défis spécifiques." },
    { icon: Settings2, title: "Solutions Personnalisées", description: "Des interventions adaptées à vos besoins, garantissant une efficacité maximale." },
    { icon: UserCheck, title: "Partenariat Fiable", description: "Notre engagement sincère établit un partenariat de confiance pour une réussite à long terme." },
];

const QualitiesSection = () => {
    return (
        <section id="qualities" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">NOS QUALITÉS</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {qualities.map(({ icon: Icon, title, description }, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="mt-1 bg-blue-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center text-blue-500">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{title}</h3>
                                <p className="text-slate-500">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualitiesSection;