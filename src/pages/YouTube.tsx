
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const YouTube = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-brand-purple to-brand-purple-light/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                YouTube - Potężne rozwiązanie dla zwiększenia widoczności Twoich treści
              </h1>
              <p className="text-xl mb-6">
                Zwiększ zasięg i popraw pozycjonowanie swoich filmów w rekordowym tempie
              </p>
              <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
                Rozpocznij teraz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <Youtube className="h-10 w-10 text-brand-purple" />
                  <h3 className="text-2xl font-bold text-gray-800">YouTube</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Nasza zaawansowana usługa automatyzacji dla YouTube została zaprojektowana, aby drastycznie 
                  zwiększyć widoczność Twoich treści i poprawić ich pozycjonowanie w algorytmach platformy.
                </p>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="text-brand-purple font-medium">
                    Posiadamy sieć 3000+ aktywnych kont premium, które współpracują, by zapewnić Twoim 
                    filmom natychmiastowy wzrost wyświetleń, zaangażowania i subskrypcji.
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
            Co wyróżnia nasze rozwiązanie dla YouTube?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">90-100% ukończenia oglądania filmów</h3>
              <p className="text-muted-foreground">
                Nasze konta oglądają Twoje treści w całości, co dramatycznie poprawia wskaźniki retencji 
                widzów i katapultuje Twoje filmy w wynikach wyszukiwania.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zaangażowanie przyjazne algorytmom</h3>
              <p className="text-muted-foreground">
                System generuje komentarze, polubienia i udostępnienia w sposób strategiczny, 
                który jest faworyzowany przez algorytmy YouTube.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Utrwalone historie oglądania</h3>
              <p className="text-muted-foreground">
                Każde konto posiada bogatą, autentyczną historię oglądania, co sprawia, że ich interakcje 
                są wysoce wiarygodne dla algorytmów YouTube.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pełne bezpieczeństwo</h3>
              <p className="text-muted-foreground">
                Nasze konta działają z unikalnymi śladami cyfrowymi, zapewniając naturalny wzorzec zachowań.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How it Works */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Jak nasze rozwiązanie pomaga Twojemu kanałowi?
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Nasz system automatycznie wykrywa Twoje nowe filmy i uruchamia strategiczną kampanię zaangażowania.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-brand-purple border-l-4">
              <h3 className="text-2xl font-semibold mb-4">Realne wyniki, które osiągają nasi klienci:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Wzrost wyświetleń o 200-400% w porównaniu do standardowych wyników</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Poprawa pozycji w wynikach wyszukiwania i rekomendacjach YouTube</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Zwiększenie organicznego zaangażowania od prawdziwych użytkowników</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Szybszy wzrost liczby subskrybentów dzięki zwiększonej widoczności</p>
                </li>
              </ul>
            </Card>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-brand-purple to-brand-purple-light p-1 rounded-xl w-full max-w-md aspect-square">
                <div className="w-full h-full bg-white rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-4 bg-brand-purple/5 rounded-full inline-block mb-4">
                      <Youtube className="h-12 w-12 text-brand-purple" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Kompleksowa kampania</h3>
                    <p className="text-muted-foreground">
                      Organiczne wyświetlenia z wysokim współczynnikiem ukończenia oglądania, naturalne tempo wzrostu, 
                      kontekstowe komentarze i strategiczne polubienia.
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
            Wybierz odpowiedni plan dla rozwoju Twojego kanału:
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Wszystkie plany zawierają pełny dostęp do naszej platformy YouTube z różnymi poziomami wsparcia i zaangażowania.
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
                  <span>Podstawowe wsparcie dla Twoich treści</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Miesięczny raport z wynikami</span>
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
                  <span>Zaawansowana analityka i raporty</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Priorytetowe wsparcie</span>
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
                  <span>Pełna moc naszej sieci</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Dedykowany zespół wsparcia 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Pełna strategia rozwoju kanału</span>
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
            Gotowy na transformację swojego kanału YouTube?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i zobacz, jak możemy pomóc Ci przebić się przez zatłoczoną 
            przestrzeń YouTube i dotrzeć do szerszej publiczności!
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

export default YouTube;
