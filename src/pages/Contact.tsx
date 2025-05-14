
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-blue-light rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M15 10v18m-4-14v14m-4-14v14m-4-14v14m16-14v14M3.3 6l17.3-4.3M20.7 6L3.4 1.7" />
                    <path d="M12 12v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("officeTitle")}</h3>
                <p className="text-gray-600">{t("officeAddress")}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-blue-light rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("phoneTitle")}</h3>
                <p className="text-gray-600">+48 111 222 333</p>
              </div>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
