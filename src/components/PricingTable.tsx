
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const PricingTier = ({
  title,
  price,
  popular = false,
  features,
  popularLabel,
  ctaText,
  monthlyText,
}: {
  title: string;
  price: string;
  popular?: boolean;
  features: string[];
  popularLabel: string;
  ctaText: string;
  monthlyText: string;
}) => {
  return (
    <Card className={`border ${popular ? "border-brand-purple shadow-lg shadow-brand-purple/10" : ""}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
          {popularLabel}
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
          <p className="text-muted-foreground">{monthlyText}</p>
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
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingTable = () => {
  const { t } = useTranslation("index");
  
  // Explicitly type the plans as an array of objects with the correct structure
  const plans = {
    starter: t("pricing.plans.starter", { returnObjects: true }) as {
      title: string;
      price: string;
      features: string[];
    },
    growthPro: t("pricing.plans.growthPro", { returnObjects: true }) as {
      title: string;
      price: string;
      popular: string;
      features: string[];
    },
    enterprise: t("pricing.plans.enterprise", { returnObjects: true }) as {
      title: string;
      price: string;
      features: string[];
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("pricing.title")}
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t("pricing.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            title={plans.starter.title}
            price={plans.starter.price}
            features={plans.starter.features}
            popularLabel=""
            ctaText={t("pricing.choosePlan")}
            monthlyText={t("pricing.perMonth")}
          />
          
          <PricingTier
            title={plans.growthPro.title}
            price={plans.growthPro.price}
            popular={true}
            features={plans.growthPro.features}
            popularLabel={plans.growthPro.popular}
            ctaText={t("pricing.choosePlan")}
            monthlyText={t("pricing.perMonth")}
          />
          
          <PricingTier
            title={plans.enterprise.title}
            price={plans.enterprise.price}
            features={plans.enterprise.features}
            popularLabel=""
            ctaText={t("pricing.choosePlan")}
            monthlyText={t("pricing.perMonth")}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
