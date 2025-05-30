
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation("faq");
  
  // Handle both array and object structures from translation files
  const getSections = () => {
    const sections = t("sections", { returnObjects: true });
    // Check if sections is an array (English format)
    if (Array.isArray(sections)) {
      return sections;
    }
    // If it's an object (German/Polish format), convert to array
    else if (sections && typeof sections === 'object') {
      return Object.values(sections);
    }
    // Fallback to empty array if nothing is found
    return [];
  };
  
  const sections = getSections();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {sections.map((section, sectionIndex) => (
          <Card className="p-6 mb-8" key={sectionIndex}>
            <h2 className="text-2xl font-bold mb-6 text-brand-blue">{section.title}</h2>
            
            <div className="space-y-6">
              {section.questions.map((item, questionIndex) => (
                <div key={questionIndex}>
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ))}
        
        <Card className="p-6">
          <p className="mt-8 text-center text-muted-foreground">
            {t("stillHaveQuestions") || t("contactPrompt")}
          </p>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
