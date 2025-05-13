
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Najczęściej Zadawane Pytania (FAQ) - SocialBoost</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dowiedz się, jak platforma SocialBoost wykorzystująca premium konta z autentyczną historią od 2009 roku zwiększa zasięgi i widoczność Twoich treści w mediach społecznościowych, takich jak X (Twitter), YouTube i Web3. Poznaj unikalne podejście, które odróżnia SocialBoost od standardowej automatyzacji i botów, zapewniając naturalne interakcje i bezpieczeństwo konta.
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">O SocialBoost</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Czym dokładnie jest SocialBoost i jak działa?</h3>
              <p className="text-muted-foreground">
                SocialBoost to zaawansowana platforma automatyzacji mediów społecznościowych oparta na sieci premium kont z autentyczną historią od 2009 roku. System strategicznie angażuje te konta, wchodząc w interakcje z Twoimi treściami, co znacząco zwiększa zasięgi, widoczność i pozycję w algorytmach platform X (Twitter), YouTube i Web3. Wkrótce, w Q3 2025, dołączy Instagram. Kluczową różnicą jest wykorzystanie kont z unikalnymi śladami cyfrowymi i wzorcami aktywności, co sprawia, że interakcje są nieodróżnialne od organicznych działań prawdziwych użytkowników, w przeciwieństwie do łatwo wykrywalnych botów.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jakie platformy wspiera SocialBoost?</h3>
              <p className="text-muted-foreground">
                Obecnie wspieramy kompleksowo: X (Twitter) z ponad 3000 aktywnych kont (12 lat historii, 0% banów), YouTube z ponad 1500 kont (autentyczne historie oglądania, 90-100% ukończenia filmów) oraz Platformy Web3 z ponad 3000 portfeli i 150+ kont web3ID. Rozwiązanie dla Instagrama będzie dostępne w Q3 2025. Każde wsparcie jest dostosowane do specyfiki platformy dla maksymalnej skuteczności i bezpieczeństwa.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Dlaczego SocialBoost działa skuteczniej niż inne metody zwiększania zasięgów?</h3>
              <p className="text-muted-foreground">
                Nasza przewaga wynika z premium kont z autentyczną historią (od 2009-2022, naturalne sieci), naturalnych wzorców zaangażowania (unikalny styl, indywidualna aktywność), strategicznego wzmacniania sygnałów algorytmicznych (działanie w kluczowych momentach oceny treści) oraz zaawansowanej analityki. Badania wewnętrzne potwierdzają wzrost zasięgów o 200-500% skuteczniej niż standardowe metody promocji w mediach społecznościowych.
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">Bezpieczeństwo i wyniki</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy korzystanie z SocialBoost jest bezpieczne dla moich kont i marki?</h3>
              <p className="text-muted-foreground">
                Tak, absolutnie bezpieczne. Stosujemy zaawansowane maskowanie aktywności: każde konto ma dedykowany adres IP i unikalny ślad cyfrowy. Nasza skuteczność bezpieczeństwa wynosi 100% – żadne konto klienta nigdy nie doświadczyło banów czy ograniczeń. Interakcje są idealnie dopasowane do naturalnych wzorców (czas, częstotliwość, kontekst), co czyni je nieodróżnialnymi od organicznego zaangażowania.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jak szybko zobaczę wyniki korzystając z SocialBoost?</h3>
              <p className="text-muted-foreground">
                Pierwsze efekty pojawiają się w ciągu 24-48 godzin. Wstępne zwiększenie zasięgów i zaangażowania jest widoczne w ciągu 3-5 dni. Znaczące wyniki (wzrost organicznego zasięgu, obserwujących, poprawa pozycjonowania) zazwyczaj widać po 14-21 dniach. Pełna optymalizacja i maksymalne rezultaty po 30-45 dniach konsekwentnego użycia.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jakich konkretnych wyników mogę się spodziewać?</h3>
              <p className="text-muted-foreground">
                Na podstawie danych klientów typowe 30-dniowe wyniki to:
              </p>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="py-2 px-4 text-left border">Metryka</th>
                      <th className="py-2 px-4 text-left border">Typowe wyniki w 30 dni</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border">Wzrost zasięgów</td>
                      <td className="py-2 px-4 border">200-500%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Zwiększenie zaangażowania</td>
                      <td className="py-2 px-4 border">150-300%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Wzrost liczby organicznych obserwujących</td>
                      <td className="py-2 px-4 border">30-100%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Poprawa pozycjonowania w algorytmach</td>
                      <td className="py-2 px-4 border">2-3x lepsze wyniki</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Wzrost konwersji z mediów społecznościowych</td>
                      <td className="py-2 px-4 border">40-120%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-muted-foreground">
                Dokładne wyniki zależą od niszy, jakości treści i początkowego poziomu. 97.8% klientów osiąga min. 200% wzrost zasięgów w pierwszym miesiącu.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy zaangażowanie wygenerowane przez SocialBoost wygląda naturalnie?</h3>
              <p className="text-muted-foreground">
                Tak, jest absolutnie naturalne. Konta generują autentyczne, kontekstowe interakcje, niemożliwe do odróżnienia od prawdziwych użytkowników. Każde konto ma unikalny styl komunikacji, spójne wzorce aktywności, kontekstowo adekwatne komentarze i zróżnicowane typy interakcji. To zaangażowanie faktycznie przyciąga dodatkowe organiczne reakcje.
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">Wdrożenie i korzystanie</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Jak wygląda proces rozpoczęcia współpracy z SocialBoost?</h3>
              <p className="text-muted-foreground">
                Proces jest prosty i zajmuje poniżej 15 minut:
              </p>
              <ol className="list-decimal pl-6 mt-2 space-y-1 text-muted-foreground">
                <li>Wybór planu.</li>
                <li>Podstawowa konfiguracja (publiczne URL/nazwy kont – bez haseł).</li>
                <li>Określenie celów.</li>
                <li>Konfiguracja kampanii przez nasz zespół (do 24h).</li>
                <li>Automatyczne działanie systemu z monitoringiem w panelu analitycznym.</li>
              </ol>
              <p className="mt-2 text-muted-foreground">
                Pierwsze efekty widoczne są zazwyczaj po 1-2 dniach roboczych od rejestracji.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy muszę podać dane logowania do moich kont w mediach społecznościowych?</h3>
              <p className="text-muted-foreground">
                Nie, SocialBoost nie wymaga danych logowania ani dostępu do Twoich kont. System działa jako sieć zewnętrznych użytkowników, wchodzących w naturalne interakcje z publicznie dostępnymi treściami (komentowanie, udostępnianie, interakcje). Wystarczy podać publiczne nazwy użytkowników lub adresy URL.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy mogę kierować aktywność SocialBoost na konkretne treści?</h3>
              <p className="text-muted-foreground">
                Tak, masz pełną elastyczność. Dostępne modele: Automatyczne wsparcie wszystkich nowych treści, Priorytetyzacja kluczowych treści (wskazujesz posty/filmy), Kampanie tematyczne (skupienie na hashtagach/tematach). Strategię i priorytety można dostosować w panelu zarządzania.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Ile czasu muszę poświęcać na zarządzanie SocialBoost?</h3>
              <p className="text-muted-foreground">
                SocialBoost to rozwiązanie "ustaw i zapomnij". Po początkowej konfiguracji system działa automatycznie. Większość klientów poświęca mniej niż 10 minut tygodniowo na przegląd raportów i ewentualne drobne korekty. Plany Growth Pro i Enterprise obejmują automatyczne sesje strategiczne z ekspertami dla dalszej optymalizacji.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Continuing with more sections */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">Plany i płatności</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Jakie plany cenowe oferuje SocialBoost?</h3>
              <p className="text-muted-foreground">
                Oferujemy trzy plany miesięcznej subskrypcji bez długoterminowych zobowiązań:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                <li><strong>Starter (999/miesiąc):</strong> 500 kont, 2 platformy, 50 interakcji/dzień, podstawowa analityka, email wsparcie.</li>
                <li><strong>Growth Pro (2499/miesiąc) - Najpopularniejszy:</strong> 1500 kont, wszystkie platformy, 200 interakcji/dzień, zaawansowana analityka/raporty, priorytetowe wsparcie/sesje strategiczne.</li>
                <li><strong>Enterprise (4999/miesiąc):</strong> 3000+ kont, nieograniczone platformy, 500+ interakcji/dzień, pełna analiza KOL, dedykowane wsparcie 24/7.</li>
              </ul>
              <p className="mt-2 text-muted-foreground">
                Anulowanie możliwe w dowolnym momencie.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy obowiązuje umowa długoterminowa lub okres zobowiązania?</h3>
              <p className="text-muted-foreground">
                Nie, działamy na zasadzie miesięcznej subskrypcji. Możesz anulować, zmienić lub zawiesić usługę w dowolnym momencie przed kolejnym cyklem rozliczeniowym bez opłat. Filozofią jest utrzymywanie klientów poprzez wyniki (92% wskaźnik utrzymania), nie umowy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy oferujecie okres próbny lub gwarancję zadowolenia?</h3>
              <p className="text-muted-foreground">
                Zamiast okresu próbnego oferujemy demo na żywo. Dodatkowo, wszystkie plany mają 14-dniową gwarancję zadowolenia: jeśli w ciągu 2 tygodni nie zauważysz min. 50% wzrostu zasięgów ponad normę, zwrócimy 100% kwoty. Testujesz bez ryzyka.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jakie metody płatności akceptujecie?</h3>
              <p className="text-muted-foreground">
                Akceptujemy karty (Visa, Mastercard, AmEx), przelewy bankowe (krajowe/międzynarodowe), kryptowaluty (BTC, ETH, USDT, USDC), PayPal, Apple Pay, Google Pay. Wszystkie transakcje są bezpieczne (PCI DSS). Dla Enterprise możliwe elastyczne warunki (kwartalne/roczne fakturowanie z rabatem).
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">Platformy i funkcje</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Jak dokładnie działa SocialBoost dla platformy X (Twitter)?</h3>
              <p className="text-muted-foreground">
                Wykorzystujemy 3000+ premium kont z historią od 2009. System monitoruje nowe posty, angażuje się w kluczowych pierwszych 15 minutach (decyzja algorytmu X), generuje mix interakcji (komentarze, retweety, polubienia, zapisy), wzmacnia hashtagi i stymuluje dalsze organiczne reakcje. Proces prowadzi do średnio 300% wzrostu zasięgów i 150-200% wzrostu obserwujących miesięcznie.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jak SocialBoost poprawia wyniki na YouTube?</h3>
              <p className="text-muted-foreground">
                Koncentrujemy się na czasie oglądania i zaangażowaniu. Konta zapewniają 90-100% ukończenia filmów (kluczowy sygnał jakości), generują wartościowe komentarze, wzmacniają zaangażowanie w pierwszych 48h (kluczowe decyzje o promocji), optymalizują rekomendacje i zapewniają naturalną dynamikę wzrostu. Klienci notują średnio 200-400% wzrost wyświetleń, lepsze pozycje i przyspieszony wzrost subskrybentów.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jak działa wsparcie SocialBoost dla platform Web3?</h3>
              <p className="text-muted-foreground">
                Wykorzystujemy 3000+ autentycznych portfeli i 150+ kont web3ID. Wsparcie obejmuje: Strategiczne dyskusje w społecznościach (Discord, Telegram, mirrorxyz), autentyczną aktywność on-chain (transakcje z Twoim tokenem/NFT), wzmacnianie sygnałów społecznościowych, organiczne rozprzestrzenianie informacji i budowanie aktywnego środowiska przyciągającego realnych uczestników. Projekty notują 250-500% wzrostu widoczności, 300% autentycznych interakcji i wzrost zainteresowania inwestorów w 1. miesiącu.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Kiedy będzie dostępna usługa SocialBoost dla Instagrama?</h3>
              <p className="text-muted-foreground">
                Rozwiązanie dla Instagrama będzie oficjalnie dostępne w Q3 2025, obejmując posty, Stories, Reels, IGTV z naciskiem na naturalne zaangażowanie i bezpieczeństwo. Możesz dołączyć do listy oczekujących po wczesny dostęp beta, 30% rabatu na 1. miesiąc, konsultacje z ekspertami Instagrama i raporty o trendach.
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-brand-purple">Dodatkowe pytania</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy SocialBoost zastąpi moją dotychczasową strategię mediów społecznościowych?</h3>
              <p className="text-muted-foreground">
                Nie, SocialBoost to potężne narzędzie wspierające, które mnoży efekty Twoich działań. Najlepsze wyniki osiąga się łącząc SocialBoost z tworzeniem wartościowych treści. Działamy jako katalizator, przełamując barierę zimnego startu, wzmacniając sygnały algorytmiczne, zwiększając organiczne zasięgi, przyciągając autentyczne zaangażowanie i przyspieszając wzrost społeczności. Skup się na treści, my zapewnimy zasięg.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Czy korzystanie z SocialBoost jest zgodne z warunkami użytkowania platform społecznościowych?</h3>
              <p className="text-muted-foreground">
                Tak, SocialBoost działa fundamentalnie inaczej niż standardowe narzędzia automatyzacji czy boty. Nasze premium konta angażują się jako niezależni użytkownicy, podejmujący własne decyzje, respektując wytyczne platform dotyczące naturalnych interakcji. Działamy bliżej PR/grup wsparcia, nie jako masowe boty. Potwierdza to nasz 100% rekord zero banów/ograniczeń dla klientów.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Dla jakich branż i typów kont SocialBoost jest najbardziej skuteczny?</h3>
              <p className="text-muted-foreground">
                Dostarczamy wyjątkowe rezultaty dla wielu branż i kont. Najlepsze wyniki branżowe: Fintech/Krypto (390% wzrost zasięgów), Lifestyle/Podróże (350% wzrost zaangażowania), E-commerce (270% wzrost konwersji), Edukacja (320% wzrost obserwujących), Gaming (410% wzrost wyświetleń). Skuteczny dla: Nowych projektów, Ustabilizowanych marek, Kont ze spadającymi zasięgami, Twórców treści, Biznesów wprowadzających nowe produkty. System adaptuje strategię do niszy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Jak mogę monitorować wyniki działań SocialBoost?</h3>
              <p className="text-muted-foreground">
                Każdy plan obejmuje panel analityczny z detailed wglądem w rezultaty: Metryki wzrostu zasięgów (procentowy/liczbowy), Analiza zaangażowania (typy, ilość, jakość), Śledzenie konwersji, Inteligentne porównania (branża/konkurencja), Prognozy/trendy. Plany Growth Pro/Enterprise oferują zaawansowane raporty, eksport (PDF, CSV, API) i integrację z GA/Tableau.
              </p>
            </div>
          </div>
          
          <p className="mt-8 text-center text-muted-foreground">
            Nadal masz pytania? Skontaktuj się z naszym zespołem wsparcia po szczegółowe informacje.
          </p>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
