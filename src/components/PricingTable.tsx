
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingTier = ({
  title,
  price,
  popular = false,
  features,
}: {
  title: string;
  price: string;
  popular?: boolean;
  features: string[];
}) => {
  return (
    <Card className={`border ${popular ? "border-brand-purple shadow-lg shadow-brand-purple/10" : ""}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
          Najpopularniejszy
        </div>
      )}
      <CardHeader className="text-center pb-0">
        <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
          {title === "Growth Pro" ? (
            <span className="text-brand-purple">💎</span>
          ) : title === "Enterprise" ? (
            <span className="text-brand-purple">👑</span>
          ) : (
            <span className="text-brand-purple">🚀</span>
          )}
          {title}
        </h3>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-center mb-6">
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-muted-foreground">za miesiąc</p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1">
                <Check className="h-4 w-4 text-brand-purple" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular ? "btn-primary" : "bg-secondary hover:bg-secondary/80"}`}
        >
          Wybierz plan
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingTable = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Przejrzyste Cenniki - Wybierz Plan Dla Swoich Potrzeb
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Dopasuj odpowiedni pakiet do swoich potrzeb i zacznij zwiększać zasięgi swoich treści.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            title="Starter"
            price="999 zł"
            features={[
              "Dostęp do 500 premium kont",
              "2 platformy do wyboru",
              "50 dziennych interakcji",
              "Podstawowy panel analityczny",
              "Wsparcie przez email"
            ]}
          />
          
          <PricingTier
            title="Growth Pro"
            price="2499 zł"
            popular={true}
            features={[
              "Dostęp do 1500 premium kont",
              "Wszystkie platformy w zestawie",
              "200 dziennych interakcji",
              "Zaawansowana analityka i raporty",
              "Priorytetowe wsparcie i sesje strategiczne"
            ]}
          />
          
          <PricingTier
            title="Enterprise"
            price="4999 zł"
            features={[
              "Pełny dostęp do wszystkich 3000+ kont",
              "Nieograniczona integracja platform",
              "500+ dziennych interakcji",
              "Pełny dostęp do analizy rynkowej KOL",
              "Dedykowany zespół wsparcia 24/7"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
