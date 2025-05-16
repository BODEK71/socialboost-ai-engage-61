
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Telegram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl px-4 md:px-8 py-12">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                {t("pageTitle")}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t("pageDescription")}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <ContactForm />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-blue-light rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("emailTitle")}</h3>
                <p className="text-gray-600">hi@xboostmarketing.com</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-blue-light rounded-full flex items-center justify-center">
                  <Telegram className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("telegramTitle")}</h3>
                <p className="text-gray-600">{t("telegramUsername")}</p>
                <Button 
                  variant="outline" 
                  className="mt-3"
                  onClick={() => window.open("https://t.me/xboostmarketing", "_blank")}
                >
                  <Telegram className="mr-2 h-4 w-4" />
                  {t("telegramAction")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
