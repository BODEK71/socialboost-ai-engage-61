
import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingTable from "@/components/PricingTable";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
