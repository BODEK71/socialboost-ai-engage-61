
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingTable from "@/components/PricingTable";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const { i18n } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* AI SEO Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI SEO: The Future of Search Optimization
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform your SEO strategy with artificial intelligence and achieve unprecedented organic growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">+427% Organic Growth</h3>
              <p className="text-gray-600">Average traffic increase achieved by our AI SEO clients in 6 months</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">90% Time Savings</h3>
              <p className="text-gray-600">Automated content creation and optimization processes</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">AI-powered insights for proactive SEO strategy decisions</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to revolutionize your search engine optimization with AI?
            </p>
            <Button asChild size="lg" className="mr-4">
              <Link to="/ai-seo">Discover AI SEO</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kontakt">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <PricingTable />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
