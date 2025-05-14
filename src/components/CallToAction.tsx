
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation("index");

  return (
    <section className="py-16 px-4 md:px-8 bg-brand-purple-light text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-brand-purple-light hover:bg-white/90 text-base h-12 px-8">
            {t("cta.primary")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-transparent border border-white hover:bg-white/10 text-base h-12 px-8">
            {t("cta.secondary")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
