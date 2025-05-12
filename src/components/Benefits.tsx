
import React from "react";
import { Shield, Brain, BarChart3, Cog } from "lucide-react";

const BenefitCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-lg bg-brand-purple p-3 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-brand-purple-soft/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Co Naprawdę Wyróżnia SocialBoost?
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Nasza zaawansowana technologia i unikalne podejście zapewniają rezultaty, 
          których nie osiągniesz nigdzie indziej.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <BenefitCard
            icon={<Shield className="h-6 w-6" />}
            title="Premium Konta Nie Do Wykrycia"
            description="Nasze konta są w 100% autentyczne, założone między 2009-2022, z prawdziwymi historiami przeglądania i wiarygodnością."
          />
          
          <BenefitCard
            icon={<Brain className="h-6 w-6" />}
            title="AI Tworząca Ludzkie Zaangażowanie"
            description="Nasza AI tworzy organicznie nieodróżnialne interakcje, które rozwijają się naturalnie w czasie z unikalnymi stylami dla każdego konta."
          />
          
          <BenefitCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Ekskluzywna Analiza Rynku"
            description="Uzyskaj wgląd w trendy monitorując ponad 600 kluczowych liderów opinii z wczesnymi wskaźnikami nowych możliwości."
          />
          
          <BenefitCard
            icon={<Cog className="h-6 w-6" />}
            title="Pełna Automatyzacja"
            description="Ustaw i zapomnij dzięki naszemu w pełni zautomatyzowanemu systemowi zarządzania zaangażowaniem i planowaniem strategicznym."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
