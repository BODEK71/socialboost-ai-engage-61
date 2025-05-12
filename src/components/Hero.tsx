
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          <span className="gradient-text">SocialBoost</span> - Rewolucja w Automatyzacji Mediów Społecznościowych
        </h1>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-lg font-medium">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-brand-purple mr-2"></div>
            <span>100% Wzrostu Zasięgów</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-brand-purple mr-2"></div>
            <span>Maksymalna Skuteczność</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-brand-purple mr-2"></div>
            <span>Pełne Bezpieczeństwo</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl mb-10">
          Witaj w przyszłości mediów społecznościowych. SocialBoost to przełomowa platforma, 
          która dostarcza Ci potężną armię premium kont, strategicznie wzmacniających Twoje treści. 
          Zwiększ swoje zasięgi, popraw widoczność i zdominuj algorytmy platform - wszystko to z 
          gwarancją spektakularnych wyników.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="btn-primary text-base h-12 px-8">
            Rozpocznij teraz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base">
            Umów demonstrację
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
