
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const XTwitterDetails = () => {
  const { t } = useTranslation("xtwitter");
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8">
        <Link to="/x-twitter">
          <Button variant="ghost" className="mb-6 pl-0 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("details.backButton")}
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{t("details.title")}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">{t("details.intro")}</p>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.autoboost.title")}</h2>
              <p>{t("details.sections.autoboost.content")}</p>
              
              <div className="my-8 border rounded-lg overflow-hidden">
                <Tabs defaultValue="process" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="process">{t("details.boostTable.processTab")}</TabsTrigger>
                    <TabsTrigger value="results">{t("details.boostTable.resultsTab")}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="process" className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-1/4">{t("details.boostTable.step")}</TableHead>
                          <TableHead>{t("details.boostTable.description")}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">1. {t("details.boostTable.steps.detection")}</TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              <p>{t("details.boostTable.steps.detectionDesc")}</p>
                              <div className="border rounded-md overflow-hidden">
                                <AspectRatio ratio={16/9}>
                                  <div className="flex items-center justify-center h-full bg-slate-100 text-sm text-muted-foreground">
                                    {t("details.boostTable.initialPost")}
                                  </div>
                                </AspectRatio>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2. {t("details.boostTable.steps.processing")}</TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              <p>{t("details.boostTable.steps.processingDesc")}</p>
                              <div className="border rounded-md overflow-hidden">
                                <AspectRatio ratio={16/9}>
                                  <div className="flex items-center justify-center h-full bg-slate-100 text-sm text-muted-foreground">
                                    {t("details.boostTable.processingPost")}
                                  </div>
                                </AspectRatio>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">3. {t("details.boostTable.steps.result")}</TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              <p>{t("details.boostTable.steps.resultDesc")}</p>
                              <div className="border rounded-md overflow-hidden">
                                <AspectRatio ratio={16/9}>
                                  <div className="flex items-center justify-center h-full bg-slate-100 text-sm text-muted-foreground">
                                    {t("details.boostTable.boostedPost")}
                                  </div>
                                </AspectRatio>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                  
                  <TabsContent value="results" className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-4">
                        <h3 className="text-lg font-medium mb-2">{t("details.boostTable.beforeBoost")}</h3>
                        <ul className="list-disc ml-5 space-y-2">
                          <li>{t("details.boostTable.beforeMetrics.views")}</li>
                          <li>{t("details.boostTable.beforeMetrics.engagement")}</li>
                          <li>{t("details.boostTable.beforeMetrics.reach")}</li>
                        </ul>
                      </div>
                      <div className="border rounded-md p-4 bg-brand-blue/5">
                        <h3 className="text-lg font-medium mb-2">{t("details.boostTable.afterBoost")}</h3>
                        <ul className="list-disc ml-5 space-y-2">
                          <li>{t("details.boostTable.afterMetrics.views")}</li>
                          <li>{t("details.boostTable.afterMetrics.engagement")}</li>
                          <li>{t("details.boostTable.afterMetrics.reach")}</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.daily.title")}</h2>
              <p>{t("details.sections.daily.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.observation.title")}</h2>
              <p>{t("details.sections.observation.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.commentBoost.title")}</h2>
              <p>{t("details.sections.commentBoost.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.search.title")}</h2>
              <p>{t("details.sections.search.content")}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("details.sections.preciseBoost.title")}</h2>
              <p>{t("details.sections.preciseBoost.content")}</p>
            </section>
          </div>
          
          <div className="mt-10 p-6 bg-brand-blue/5 rounded-lg">
            <p className="font-medium">{t("details.conclusion")}</p>
          </div>
          
          <div className="mt-10 pt-10 border-t">
            <h3 className="text-xl font-bold mb-4">{t("details.ctaTitle")}</h3>
            <Link to="/x-twitter">
              <Button className="bg-brand-blue hover:bg-brand-blue-light">
                {t("details.ctaButton")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default XTwitterDetails;
