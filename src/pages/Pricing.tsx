
import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Pricing = () => {
  const { t } = useTranslation("pricing");

  const services = [
    {
      title: "Boost Every Single of Your Posts!",
      description: "Automatically detect all of your new posts and immediately boost them to maximize their visibility and reach, ensuring they gain traction quickly and effectively."
    },
    {
      title: "Search For and Interact with Relevant Posts",
      description: "Every day, we proactively search for and interact with relevant POSTS users and projects, strategically promoting your project through targeted comments. This approach helps us reach new audiences who may not yet be familiar with your brand."
    },
    {
      title: "Full Support",
      description: "We provide comprehensive support by setting up a dedicated Telegram (or other) group where we can collaborate, exchange insights, and stay up-to-date on the progress of your profile's promotion in real-time."
    }
  ];

  const plans = [
    {
      name: "Essentials Plan",
      price: "0.44 ETH",
      features: [
        "Interactions with every post (comments, likes, requotes) - 200+/post",
        "New followers - 300+/month",
        "Search for and comment on external posts - 50+/day",
        "Boost our comments (replies, likes, etc.) to increase reach",
        "Highest-quality accounts",
        "Access to a dedicated support channel (Telegram)"
      ],
      recommended: false
    },
    {
      name: "Professional Plan",
      price: "0.89 ETH",
      features: [
        "Interactions with every post (comments, likes, requotes) - 500+/post",
        "New followers - 750+/month",
        "Search for and comment on external posts - 125+/day",
        "Boost our comments (replies, likes, etc.) to increase reach",
        "Highest-quality accounts",
        "Access to a dedicated support channel (Telegram)"
      ],
      recommended: true
    }
  ];

  const benefitsData = [
    {
      title: "Your Project's Profile",
      description: "We automatically detect all of your new posts and immediately boost them to maximize their visibility and reach, ensuring they gain traction quickly and effectively.",
      icon: "🔵"
    },
    {
      title: "Full support for every post",
      description: "Each post is carefully supported by automatic likes, reposts, comments, and bookmarks, amplifying engagement and driving continuous interaction across the platform.",
      icon: "🔴"
    },
    {
      title: "We know where your audience is",
      description: "Our services go beyond just your posts; we proactively search for relevant content within your project's niche and engage with those posts to broaden your influence and connect with a wider audience.",
      icon: "🟡"
    },
    {
      title: "Organic growth, full security",
      description: "Through our consistent efforts, your project will experience steady, organic growth, allowing it to expand naturally and reach new heights each day.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Choose the right plan to boost your social media presence and engagement
            </p>
          </div>
        </div>
      </section>
      
      {/* Summary Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">SUMMARY</h2>
              
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
            
            <div>
              <h2 className="text-3xl font-bold mb-8">PRICING</h2>
              
              <div className="space-y-6">
                {plans.map((plan, index) => (
                  <Card key={index} className={`overflow-hidden ${plan.recommended ? 'border-brand-purple' : ''}`}>
                    {plan.recommended && (
                      <div className="bg-brand-purple text-white text-center py-1 font-medium">
                        MOST POPULAR!
                      </div>
                    )}
                    <CardHeader>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold">{plan.price}</p>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-brand-purple flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.recommended ? 'bg-brand-purple hover:bg-brand-purple/90' : ''}`}>
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Boost Your Social Media Presence</h2>
          
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
                <h3 className="text-2xl font-bold mb-4">THE MOST EFFECTIVE PROMOTION FOR YOUR CRYPTO PROJECT ON</h3>
                <div className="w-48 h-48 mx-auto md:mx-0">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  We provide advanced, fully automated solutions for boosting your Twitter posts, designed to significantly enhance engagement and visibility. We use <strong>advanced AI</strong>, and all activities are <strong>highly natural and safe</strong>.
                </p>
                
                <p className="text-lg mb-4">
                  All of our accounts on X (<strong>over 2,000</strong>) have been established for many years, with some dating back to 2009. Unlike many other services that rely on new or low-quality accounts, we utilize <strong>seasoned profiles</strong>, making our actions <strong>highly effective</strong> while minimizing the risk of bans or detection, ensuring the <strong>safety of your brand</strong>.
                </p>
                
                <div className="flex justify-center md:justify-end">
                  <Button className="bg-black text-white hover:bg-black/90">
                    Learn More About X Promotion
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
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Social Media Presence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started today with our proven strategies to increase engagement and reach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-blue hover:bg-white/90">
              Choose Your Plan
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
