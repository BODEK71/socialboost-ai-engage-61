
import React from "react";
import { useTranslation } from "react-i18next";
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
      <PricingTable />
      <Benefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
