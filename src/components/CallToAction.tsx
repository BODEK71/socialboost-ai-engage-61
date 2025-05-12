
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-brand-purple text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Gotowy na Dominację w Mediach Społecznościowych?
        </h2>
        <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          Skontaktuj się z nami już dziś i zobacz, jak SocialBoost może transformować Twoją cyfrową obecność. 
          Umów demonstrację i przekonaj się, dlaczego jesteśmy liderem w zaawansowanej automatyzacji mediów społecznościowych.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
            Umów demonstrację
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-transparent border border-white hover:bg-white/10 text-base h-12 px-8">
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
