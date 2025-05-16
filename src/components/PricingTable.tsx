
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PricingTier = ({
  title,
  price,
  popular = false,
  features,
  popularLabel,
  ctaText,
  monthlyText,
  className = "",
}: {
  title: string;
  price: string;
  popular?: boolean;
  features: string[];
  popularLabel: string;
  ctaText: string;
  monthlyText: string;
  className?: string;
}) => {
  return (
    <Card className={`border ${popular ? "border-brand-purple shadow-lg shadow-brand-purple/10" : ""} relative ${className}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
          {popularLabel}
        </div>
      )}
      <CardHeader className="text-center pb-0">
        <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
          {title === "Professional Plan" ? (
            <span className="text-brand-purple">💎</span>
          ) : (
            <span className="text-pink-500">🚀</span>
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
                <Check className={`h-4 w-4 ${popular ? 'text-brand-purple' : 'text-pink-500'}`} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular ? "bg-brand-purple hover:bg-brand-purple/90" : "bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white"}`}
          asChild
        >
          <Link to="/pricing">
            {ctaText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingTable = () => {
  const { t } = useTranslation("pricing");
  
  const plans = {
    essentials: {
      title: "Essentials Plan",
      price: "0.44 ETH",
      features: [
        "200+ interactions per post (comments, likes, requotes)",
        "300+ new followers per month",
        "Comment boosting to increase reach",
        "Highest-quality accounts",
        "Dedicated support channel (Telegram)"
      ]
    },
    professional: {
      title: "Professional Plan",
      price: "0.89 ETH",
      popular: "Most Popular!",
      features: [
        "500+ interactions per post (comments, likes, requotes)",
        "750+ new followers per month",
        "125+ external post interactions daily",
        "Comment boosting to increase reach",
        "Highest-quality accounts",
        "Dedicated support channel (Telegram)"
      ]
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("title") || "Pricing Plans"}
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t("description") || "Choose a plan to boost your social media presence"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingTier
            title="Essentials Plan"
            price="0.44 ETH"
            features={plans.essentials.features}
            popularLabel=""
            ctaText={t("checkButton") || "Sprawdź"}
            monthlyText={t("perMonth") || "per month"}
            className="bg-gradient-to-b from-white to-pink-50 border-pink-200"
          />
          
          <PricingTier
            title="Professional Plan"
            price="0.89 ETH"
            popular={true}
            features={plans.professional.features}
            popularLabel={plans.professional.popular}
            ctaText={t("checkButton") || "Sprawdź"}
            monthlyText={t("perMonth") || "per month"}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
