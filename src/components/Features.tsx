
import React from "react";
import { Twitter, Youtube, Globe, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeatureCard = ({ 
  icon, 
  title, 
  comingSoon = false,
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  comingSoon?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Card className={`card-gradient p-6 flex flex-col h-full ${comingSoon ? "opacity-80" : ""}`}>
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
        {comingSoon && (
          <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple">
            Q3 2025
          </span>
        )}
      </div>
      <div className="text-muted-foreground space-y-2">
        {children}
      </div>
    </Card>
  );
};

const Features = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nasze Obsługiwane Platformy</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Dlaczego marki i twórcy wybierają SocialBoost? Wykorzystaj naszą sieć ponad 3000 premium kont, 
          z autentyczną historią sięgającą 2009 roku.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<Twitter className="h-6 w-6" />} title="X (Twitter)">
            <ul className="list-disc list-inside">
              <li>3000+ aktywnych kont z 12-letnią historią</li>
              <li>Zaangażowanie nie do odróżnienia od ludzkiego</li>
              <li>Unikalne IP i ślady cyfrowe</li>
              <li>Gwarancja 0% banów</li>
            </ul>
          </FeatureCard>

          <FeatureCard icon={<Youtube className="h-6 w-6" />} title="YouTube">
            <ul className="list-disc list-inside">
              <li>3000+ aktywnych kont z historiami oglądania</li>
              <li>90-100% ukończenia oglądania filmów</li>
              <li>Zaangażowanie przyjazne algorytmom</li>
              <li>Bezbłędna historia działania</li>
            </ul>
          </FeatureCard>

          <FeatureCard icon={<Globe className="h-6 w-6" />} title="Platformy Web3">
            <ul className="list-disc list-inside">
              <li>1000+ portfeli z autentycznymi historiami</li>
              <li>150+ kont z web3ID na deBank</li>
              <li>Blogowanie i tworzenie treści na mirror.xyz</li>
              <li>Najwyższy poziom zabezpieczeń</li>
            </ul>
          </FeatureCard>

          <FeatureCard icon={<Instagram className="h-6 w-6" />} title="Instagram" comingSoon={true}>
            <ul className="list-disc list-inside">
              <li>Długotrwałe, zaufane konta</li>
              <li>Naturalna historia zaangażowania</li>
              <li>Wyświetlenia i interakcje ze stories</li>
              <li>Pełne bezpieczeństwo i wsparcie</li>
            </ul>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
