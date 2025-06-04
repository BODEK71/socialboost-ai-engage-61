import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Twitter, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const XTwitter = () => {
  const { t } = useTranslation("xtwitter");
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-brand-blue to-brand-blue-light/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t("heroTitle")}
              </h1>
              <p className="text-xl mb-6">
                {t("heroSubtitle")}
              </p>
              <Button className="bg-white text-brand-blue hover:bg-white/90 text-base h-12 px-8">
                {t("heroButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <Twitter className="h-10 w-10 text-brand-blue" />
                  <h3 className="text-2xl font-bold text-gray-800">{t("heroCard.title")}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t("heroCard.description")}
                </p>
                <div className="bg-brand-blue/5 p-4 rounded-lg">
                  <p className="text-brand-blue font-medium">
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
                <div className="h-10 w-10 rounded-md bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
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
      
      {/* How it Works */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            {t("howItWorks.description")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-brand-blue border-l-4">
              <h3 className="text-2xl font-semibold mb-4">{t("howItWorks.resultsTitle")}</h3>
              <ul className="space-y-4">
                {t("howItWorks.results", { returnObjects: true }).map((result, index) => (
                  <li className="flex items-start gap-3" key={index}>
                    <div className="mt-1 h-5 w-5 text-brand-blue">
                      <Check className="h-5 w-5" />
                    </div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-brand-blue/5 rounded-lg">
                <Link to="/x-twitter/details" className="flex items-center gap-2 text-brand-blue hover:underline">
                  <span>{t("howItWorks.detailsLinkText")}</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </Card>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-light p-1 rounded-xl w-full max-w-md aspect-square">
                <div className="w-full h-full bg-white rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 bg-brand-blue/5 rounded-full inline-block mb-4">
                      <Twitter className="h-12 w-12 text-brand-blue" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t("howItWorks.monitoringTitle")}</h3>
                    <p className="text-muted-foreground">
                      {t("howItWorks.monitoringDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8">
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
                  <span className="text-brand-blue">🚀</span>
                  Essentials Plan
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">0.44 ETH</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Access to X (Twitter) Platform only</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>200+ interactions per post (comments, likes, requotes)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>300+ new followers per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Comment boosting to increase reach</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Highest-quality accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Dedicated support channel (Telegram)</span>
                </li>
              </ul>
              
              <Button className="w-full bg-secondary hover:bg-secondary/80" asChild>
                <Link to="/pricing">
                  Choose plan
                </Link>
              </Button>
            </Card>
            
            <Card className="border border-brand-blue shadow-lg shadow-brand-blue/10 p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular!
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-brand-blue">💎</span>
                  Professional Plan
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">0.89 ETH</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Access to X (Twitter), YouTube and WEB3 Platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>500+ interactions per post (comments, likes, requotes)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>750+ new followers per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>125+ external post interactions daily</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Comment boosting to increase reach</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Highest-quality accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-blue" />
                  </span>
                  <span>Dedicated support channel (Telegram)</span>
                </li>
              </ul>
              
              <Button className="w-full bg-brand-blue hover:bg-brand-blue-light text-white" asChild>
                <Link to="/pricing">
                  Choose plan
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-brand-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-blue hover:bg-white/90 text-base h-12 px-8">
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

export default XTwitter;
