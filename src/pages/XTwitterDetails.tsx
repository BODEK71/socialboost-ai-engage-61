
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const XTwitterDetails = () => {
  const { t } = useTranslation("xtwitter");
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8">
        <Link to="/x-twitter">
          <Button variant="ghost" className="mb-6 pl-0 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("details.backButton")}
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{t("details.title")}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">{t("details.intro")}</p>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.autoboost.title")}</h2>
              <p>{t("details.sections.autoboost.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.daily.title")}</h2>
              <p>{t("details.sections.daily.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.observation.title")}</h2>
              <p>{t("details.sections.observation.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.commentBoost.title")}</h2>
              <p>{t("details.sections.commentBoost.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.search.title")}</h2>
              <p>{t("details.sections.search.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.preciseBoost.title")}</h2>
              <p>{t("details.sections.preciseBoost.content")}</p>
            </section>
          </div>
          
          <div className="mt-10 p-6 bg-brand-blue/5 rounded-lg">
            <p className="font-medium">{t("details.conclusion")}</p>
          </div>
          
          <div className="mt-10 pt-10 border-t">
            <h3 className="text-xl font-bold mb-4">{t("details.ctaTitle")}</h3>
            <Link to="/x-twitter">
              <Button className="bg-brand-blue hover:bg-brand-blue-light">
                {t("details.ctaButton")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default XTwitterDetails;
