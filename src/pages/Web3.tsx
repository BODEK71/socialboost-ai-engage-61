import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Web3 = () => {
  const { t } = useTranslation("web3");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-brand-purple to-brand-purple-light/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t("heroTitle")}
              </h1>
              <p className="text-xl mb-6">
                {t("heroSubtitle")}
              </p>
              <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
                {t("heroButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                    W3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t("heroCard.title")}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t("heroCard.description")}
                </p>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="text-brand-purple font-medium">
                    {t("heroCard.highlight")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("featuresSection.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("featuresSection.features", { returnObjects: true }).map((feature, index) => (
              <Card className="p-6 h-full" key={index}>
                <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t("advancedFeatures.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="p-8 border-brand-purple border-l-4">
              <ul className="space-y-4">
                {t("advancedFeatures.features", { returnObjects: true }).map((feature, index) => (
                  <li className="flex items-start gap-3" key={index}>
                    <div className="mt-1 h-5 w-5 text-brand-purple">
                      <Check className="h-5 w-5" />
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </Card>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-brand-purple to-brand-purple-light p-1 rounded-xl w-full max-w-md aspect-square">
                <div className="w-full h-full bg-white rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{t("advancedFeatures.howItWorksTitle")}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t("advancedFeatures.howItWorksDescription")}
                    </p>
                    <ul className="text-left space-y-2">
                      {t("advancedFeatures.howItWorksList", { returnObjects: true }).map((item, index) => (
                        <li className="flex items-start gap-2" key={index}>
                          <div className="min-w-4 h-4 rounded-full bg-brand-purple mt-1"></div>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("results.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("results.metrics", { returnObjects: true }).map((metric, index) => (
              <Card className="p-6 text-center" key={index}>
                <p className="text-4xl font-bold text-brand-purple mb-2">{metric.value}</p>
                <p>{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-brand-purple">🚀</span>
                  {t("pricing.plans.essentials.name")}
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">{t("pricing.plans.essentials.price")}</p>
                  <p className="text-muted-foreground">{t("pricing.perMonth")}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {t("pricing.plans.essentials.features", { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white" asChild>
                <Link to="/contact">
                  {t("pricing.plans.essentials.button")}
                </Link>
              </Button>
            </Card>
            
            <Card className="border border-brand-purple shadow-lg shadow-brand-purple/10 p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                {t("pricing.mostPopular")}
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-brand-purple">💎</span>
                  {t("pricing.plans.professional.name")}
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">{t("pricing.plans.professional.price")}</p>
                  <p className="text-muted-foreground">{t("pricing.perMonth")}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {t("pricing.plans.professional.features", { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white" asChild>
                <Link to="/contact">
                  {t("pricing.plans.professional.button")}
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-brand-purple text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
              {t("cta.primaryButton")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-transparent border border-white hover:bg-white/10 text-base h-12 px-8">
              {t("cta.secondaryButton")}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Web3;
