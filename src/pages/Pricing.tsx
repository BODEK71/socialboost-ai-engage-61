
import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCard = ({
  title,
  price,
  perMonth,
  features,
  ctaText,
  isPopular = false,
  popularText = "" // Keep the optional popularText with default empty string
}) => {
  return (
    <div className={`border rounded-lg p-8 ${isPopular ? 'border-brand-purple' : 'border-gray-200'} relative bg-white shadow-md`}>
      {isPopular && (
        <div className="absolute top-0 right-5 transform -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
          {popularText}
        </div>
      )}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="flex items-center mb-4">
          <span className={`text-2xl mr-2 ${isPopular ? 'text-brand-purple' : 'text-pink-500'}`}>
            {isPopular ? '💎' : '🚀'}
          </span>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="mb-2">
          <p className="text-4xl font-bold">{price}</p>
          <p className="text-gray-500">{perMonth}</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${isPopular ? 'text-brand-purple' : 'text-pink-500'}`} />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full ${
          isPopular 
            ? "bg-brand-purple hover:bg-brand-purple/90" 
            : "bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500"
        }`}
        asChild
      >
        <Link to="/kontakt">
          {ctaText}
        </Link>
      </Button>
    </div>
  );
};

const Pricing = () => {
  const { t } = useTranslation("pricing");

  const essentialsFeatures = t("plans.essentials.features", { returnObjects: true });
  const professionalFeatures = t("plans.professional.features", { returnObjects: true });

  const services = [
    {
      title: t("services.boostPosts.title"),
      description: t("services.boostPosts.description")
    },
    {
      title: t("services.searchInteract.title"),
      description: t("services.searchInteract.description")
    },
    {
      title: t("services.fullSupport.title"),
      description: t("services.fullSupport.description")
    }
  ];

  const benefitsData = [
    {
      title: t("benefits.items.0.title"),
      description: t("benefits.items.0.description"),
      icon: "🔵"
    },
    {
      title: t("benefits.items.1.title"),
      description: t("benefits.items.1.description"),
      icon: "🔴"
    },
    {
      title: t("benefits.items.2.title"),
      description: t("benefits.items.2.description"),
      icon: "🟡"
    },
    {
      title: t("benefits.items.3.title"),
      description: t("benefits.items.3.description"),
      icon: "🔵"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-brand-blue to-brand-blue-light/60 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards Section - Horizontal Layout */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t("title")}</h2>
            <p className="text-xl text-gray-600 mt-4">{t("description")}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title={t("plans.essentials.name")}
              price={t("plans.essentials.price")}
              perMonth={t("perMonth")}
              features={essentialsFeatures}
              ctaText={t("checkButton")}
              isPopular={false}
              popularText="" // Add the popularText prop with an empty string
            />
            
            <PricingCard 
              title={t("plans.professional.name")}
              price={t("plans.professional.price")}
              perMonth={t("perMonth")}
              features={professionalFeatures}
              ctaText={t("checkButton")}
              isPopular={true}
              popularText={t("mostPopular")}
            />
          </div>
        </div>
      </section>
      
      {/* Summary Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">{t("summaryTitle")}</h2>
              
              {services.map((service, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-purple/10 rounded-full p-1">
                      <Check className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("benefits.title")}</h2>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-center mb-4 md:mb-10">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-2xl z-10 relative">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-brand-blue">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* X Twitter Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="p-6 md:p-12 border rounded-xl bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{t("twitterSection.title")}</h3>
                <div className="w-48 h-48 mx-auto md:mx-0">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  {t("twitterSection.description1")}
                </p>
                
                <p className="text-lg mb-4">
                  {t("twitterSection.description2")}
                </p>
                
                <div className="flex justify-center md:justify-end">
                  <Button className="bg-black text-white hover:bg-black/90">
                    {t("twitterSection.learnMoreButton")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-brand-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t("readyToStart")}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t("getStarted")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-blue hover:bg-white/90">
              {t("choosePlan")}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              {t("contactUs")}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
