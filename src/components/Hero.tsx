
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("index");

  // Ensure features are explicitly typed as an array
  const features = t("hero.features", { returnObjects: true }) as string[];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          <span className="gradient-text">SocialBoost</span> - {t("hero.title")}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-lg font-medium">
          {features.map((feature, index) => (
            <div className="flex items-center" key={index}>
              <div className="w-2 h-2 rounded-full bg-brand-purple mr-2"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl mb-10">
          {t("hero.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="btn-primary text-base h-12 px-8">
            {t("hero.cta.primary")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base">
            {t("hero.cta.secondary")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
