
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Web3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-brand-purple to-brand-purple-light/60">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Platformy Web3 - Wzmocnij swoją cyfrową obecność w przestrzeni blockchain
              </h1>
              <p className="text-xl mb-6">
                Strategiczne zwiększanie zasięgu i wiarygodności w ekosystemie Web3
              </p>
              <Button className="bg-white text-brand-purple hover:bg-white/90 text-base h-12 px-8">
                Rozpocznij teraz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                    W3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Web3</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Nasza zaawansowana usługa automatyzacji dla platform Web3 została zaprojektowana, 
                  aby dynamicznie zwiększyć rozpoznawalność i autorytet Twojego projektu w przestrzeni blockchain.
                </p>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="text-brand-purple font-medium">
                    Z dumą oferujemy dostęp do sieci 3000+ aktywnych portfeli i kont, które strategicznie 
                    wzmacniają widoczność Twojego projektu w całym ekosystemie Web3.
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
            Dlaczego nasze rozwiązanie Web3 przynosi wyjątkowe rezultaty?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natychmiastowy wzrost rozpoznawalności</h3>
              <p className="text-muted-foreground">
                Twoje inicjatywy blockchain zyskują znacznie szerszą widoczność w kluczowych społecznościach Web3.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zwiększone zaufanie inwestorów</h3>
              <p className="text-muted-foreground">
                Autentyczna aktywność wokół Twojego projektu buduje wiarygodność i przyciąga realnych inwestorów.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategiczne zaangażowanie</h3>
              <p className="text-muted-foreground">
                Nasze konta generują wartościowe dyskusje i interakcje, które przyciągają nowych uczestników ekosystemu.
              </p>
            </Card>
            
            <Card className="p-6 h-full">
              <div className="h-10 w-10 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organiczne rozprzestrzenianie</h3>
              <p className="text-muted-foreground">
                Skoordynowane działania naszej sieci zwiększają zasięg Twoich komunikatów bez wzbudzania podejrzeń.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Zaawansowane funkcje naszego systemu Web3
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="p-8 border-brand-purple border-l-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>3000+ autentycznych portfeli z realnymi historiami transakcji i aktywnością na platformach blockchain</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>150+ kont z web3ID na deBank budujących wiarygodność i zaufanie w ekosystemie</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Profesjonalne blogowanie i tworzenie treści na mirror.xyz i innych platformach Web3</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 text-brand-purple">
                    <Check className="h-5 w-5" />
                  </div>
                  <p>Strategiczne interakcje na forach, Discord, Telegram i innych kluczowych kanałach komunikacji Web3</p>
                </li>
              </ul>
            </Card>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-brand-purple to-brand-purple-light p-1 rounded-xl w-full max-w-md aspect-square">
                <div className="w-full h-full bg-white rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Jak to działa?</h3>
                    <p className="text-muted-foreground mb-6">
                      Nasz system automatycznie monitoruje aktywność Twojego projektu Web3 i strategicznie angażuje się poprzez:
                    </p>
                    <ul className="text-left space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-brand-purple mt-1"></div>
                        <p>Tworzenie wartościowych wątków dyskusyjnych</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-brand-purple mt-1"></div>
                        <p>Generowanie autentycznej aktywności portfeli</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-brand-purple mt-1"></div>
                        <p>Wspieranie Twoich ogłoszeń</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 rounded-full bg-brand-purple mt-1"></div>
                        <p>Budowanie społeczności wokół projektu</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Realne wyniki dla projektów Web3
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-brand-purple mb-2">250-500%</p>
              <p>Wzrost widoczności projektu w pierwszym miesiącu</p>
            </Card>
            
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-brand-purple mb-2">300%</p>
              <p>Zwiększenie liczby autentycznych interakcji z projektem</p>
            </Card>
            
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-brand-purple mb-2">200%</p>
              <p>Wzrost aktywności społeczności na wszystkich platformach</p>
            </Card>
            
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-brand-purple mb-2">↑</p>
              <p>Znaczące zwiększenie zainteresowania inwestorów</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Wybierz plan idealny dla rozwoju Twojego projektu Web3
          </h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Wszystkie plany zawierają pełny dostęp do naszej platformy z różnymi poziomami wsparcia i zaangażowania.
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
                  <span>Dostęp do 500 premium portfeli i kont</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Podstawowe wsparcie Twojego projektu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">
                    <Check className="h-4 w-4 text-brand-purple" />
                  </span>
                  <span>Miesięczne raporty efektywności</span>
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
                  <span>Dostęp do 1500 premium portfeli i kont</span>
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
                  <span>Priorytetowe wsparcie techniczne</span>
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
                  <span>Pełna moc naszej sieci portfeli i kont</span>
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
                  <span>Indywidualnie dostosowana strategia</span>
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
            Gotowy na transformację swojej obecności w ekosystemie Web3?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i zobacz, jak możemy pomóc Twojemu projektowi wyróżnić się w zatłoczonej przestrzeni blockchain i przyciągnąć wartościowych uczestników!
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

export default Web3;
