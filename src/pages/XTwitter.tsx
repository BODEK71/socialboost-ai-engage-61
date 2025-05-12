
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const XTwitter = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-brand-purple to-brand-purple-light/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                X (Twitter) - Dominuj algorytmy i zwiększ swój zasięg
              </h1>
              <p className="text-xl mb-6">
                Błyskawicznie zwiększ zasięgi i zaangażowanie na platformie X
              </p>
              <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
                Rozpocznij teraz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <Twitter className="h-10 w-10 text-brand-purple" />
                  <h3 className="text-2xl font-bold text-gray-800">X (Twitter)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Nasza zaawansowana usługa automatyzacji na platformie X (dawniej Twitter) została stworzona, 
                  aby zapewnić Twojej marce lub projektowi spektakularny wzrost widoczności i zaangażowania.
                </p>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="text-brand-purple font-medium">
                    Z dumą prezentujemy naszą społeczność ponad 3000 aktywnych, premium kont, 
                    które strategicznie wzmacniają Twoje treści.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dlaczego nasze rozwiązanie dla X jest wyjątkowe?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natychmiastowy wzrost zasięgów</h3>
              <p className="text-muted-foreground">
                Twoje posty docierają do znacznie szerszej publiczności już od pierwszego dnia korzystania z naszych usług.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Naturalnie wyglądające interakcje</h3>
              <p className="text-muted-foreground">
                Każde konto ma własny styl pisania, preferencje słownictwa i indywidualne wzorce aktywności, 
                tworząc autentyczne i wiarygodne zaangażowanie.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ponad 12 lat autentycznej historii</h3>
              <p className="text-muted-foreground">
                Nasze konta mają bogate historie sięgające 2009 roku, co buduje ich wiarygodność w oczach algorytmów.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unikalne IP i ślad cyfrowy</h3>
              <p className="text-muted-foreground">
                Każde konto działa z dedykowanym adresem IP i unikalnym śladem cyfrowym, zapewniając pełne bezpieczeństwo.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How it Works */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Jak to działa?
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Nasz system dla X automatycznie wykrywa Twoje posty i strategicznie angażuje się w nie, wykorzystując nasze premium konta. 
            Każda interakcja jest starannie zaprojektowana, aby naśladować naturalne ludzkie zachowanie - 
            od prędkości pisania po czas zaangażowania.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-brand-purple border-l-4">
              <h3 className="text-2xl font-semibold mb-4">Przykładowe rezultaty dla naszych klientów:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Zwiększenie zasięgu organicznego o 300% w ciągu pierwszych 30 dni</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Wzrost liczby obserwujących o 150-200% miesięcznie</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Znaczące zwiększenie współczynnika zaangażowania dzięki naturalnym interakcjom</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Poprawa widoczności w wyszukiwarkach i wyższe pozycjonowanie w trendach</p>
                </li>
              </ul>
            </Card>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-brand-purple to-brand-purple-light p-1 rounded-xl w-full max-w-md aspect-square">
                <div className="w-full h-full bg-white rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 bg-brand-purple/5 rounded-full inline-block mb-4">
                      <Twitter className="h-12 w-12 text-brand-purple" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Monitorowanie i analiza</h3>
                    <p className="text-muted-foreground">
                      Otrzymuj szczegółowe analizy wzrostu i zaangażowania oraz raporty wydajności dostosowane do Twoich celów.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Wybierz plan odpowiedni dla Twoich potrzeb:
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Wszystkie plany zawierają pełny dostęp do naszej platformy X (Twitter) z różnymi poziomami wsparcia i zaangażowania.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-brand-purple">🚀</span>
                  Starter
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">999 zł</p>
                  <p className="text-muted-foreground">za miesiąc</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Dostęp do 500 premium kont</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>50 dziennych interakcji</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Podstawowa analityka</span>
                </li>
              </ul>
              
              <Button className="w-full bg-secondary hover:bg-secondary/80">
                Wybierz plan
              </Button>
            </Card>
            
            <Card className="border border-brand-purple shadow-lg shadow-brand-purple/10 p-6">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                Najpopularniejszy
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-brand-purple">💎</span>
                  Growth Pro
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">2499 zł</p>
                  <p className="text-muted-foreground">za miesiąc</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Dostęp do 1500 premium kont</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>200 dziennych interakcji</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Zaawansowana analityka</span>
                </li>
              </ul>
              
              <Button className="w-full btn-primary">
                Wybierz plan
              </Button>
            </Card>
            
            <Card className="border p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-brand-purple">👑</span>
                  Enterprise
                </h3>
                <div className="mt-4 mb-6">
                  <p className="text-3xl font-bold">4999 zł</p>
                  <p className="text-muted-foreground">za miesiąc</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Pełny dostęp do 3000+ kont</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>500+ dziennych interakcji</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Dedykowane wsparcie 24/7</span>
                </li>
              </ul>
              
              <Button className="w-full bg-secondary hover:bg-secondary/80">
                Wybierz plan
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-brand-purple text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy, by zdominować X i wyprzedzić konkurencję?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i zobacz, jak możemy pomóc Ci zwiększyć Twoją cyfrową widoczność!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
              Rozpocznij teraz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-transparent border border-white hover:bg-white/10 text-base h-12 px-8">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default XTwitter;
