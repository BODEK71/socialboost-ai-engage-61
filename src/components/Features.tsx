
import React from "react";
import { Twitter, Youtube, Globe, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FeatureCard = ({ 
  icon, 
  title, 
  comingSoon = false,
  points,
  link
}: { 
  icon: React.ReactNode; 
  title: string; 
  comingSoon?: boolean;
  points: string[];
  link?: string;
}) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link && !comingSoon) {
      return (
        <Link to={link} className="block h-full transition-transform hover:scale-105">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <Card className={`card-gradient p-6 flex flex-col h-full ${comingSoon ? "opacity-80" : ""} ${link && !comingSoon ? "cursor-pointer" : ""}`}>
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-md bg-brand-blue/10 text-brand-blue flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-3">{title}</h3>
          {comingSoon && (
            <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-brand-blue/10 text-brand-blue">
              Q3 2025
            </span>
          )}
        </div>
        <div className="text-muted-foreground space-y-2">
          <ul className="list-disc list-inside">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </Card>
    </CardWrapper>
  );
};

const Features = () => {
  const { t } = useTranslation('index');
  
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('features.title')}</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t('features.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Twitter className="h-6 w-6" />} 
            title={t('features.platforms.xTwitter.title')}
            points={t('features.platforms.xTwitter.points', { returnObjects: true }) as string[]}
            link="/x-twitter"
          />

          <FeatureCard 
            icon={<Youtube className="h-6 w-6" />} 
            title={t('features.platforms.youtube.title')}
            points={t('features.platforms.youtube.points', { returnObjects: true }) as string[]}
            link="/youtube"
          />

          <FeatureCard 
            icon={<Globe className="h-6 w-6" />} 
            title={t('features.platforms.web3.title')}
            points={t('features.platforms.web3.points', { returnObjects: true }) as string[]}
            link="/web3"
          />

          <FeatureCard 
            icon={<Instagram className="h-6 w-6" />} 
            title={t('features.platforms.instagram.title')} 
            comingSoon={true}
            points={t('features.platforms.instagram.points', { returnObjects: true }) as string[]}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
