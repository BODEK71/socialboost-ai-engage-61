
import React from "react";
import { Shield, Brain, BarChart3, Cog } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ 
  icon, 
  title, 
  description 
}: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-lg bg-brand-blue p-3 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const { t } = useTranslation("index");

  const icons = [
    <Shield className="h-6 w-6" key="shield" />,
    <Brain className="h-6 w-6" key="brain" />,
    <BarChart3 className="h-6 w-6" key="chart" />,
    <Cog className="h-6 w-6" key="cog" />
  ];

  // Explicitly type the items as an array of objects
  const benefitItems = t("benefits.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-brand-blue-soft/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("benefits.title")}
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t("benefits.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefitItems.map((item, index) => (
            <BenefitCard
              key={index}
              icon={icons[index % icons.length]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
