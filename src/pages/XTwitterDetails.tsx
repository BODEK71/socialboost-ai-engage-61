import React from "react";
import { ArrowLeft, Table2 } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";

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
              
              <div className="my-8 border rounded-lg overflow-hidden shadow-md">
                <Tabs defaultValue="process" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/20">
                    <TabsTrigger value="process" className="data-[state=active]:bg-brand-blue data-[state=active]:text-white">
                      <div className="flex items-center gap-2">
                        <Table2 className="h-4 w-4" />
                        {t("details.boostTable.processTab")}
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="results" className="data-[state=active]:bg-brand-blue data-[state=active]:text-white">
                      {t("details.boostTable.resultsTab")}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="process" className="p-4 bg-white">
                    <Table className="border-collapse">
                      <TableHeader className="bg-slate-50">
                        <TableRow className="border-b border-slate-200">
                          <TableHead className="w-1/4 font-semibold text-brand-blue">{t("details.boostTable.step")}</TableHead>
                          <TableHead className="font-semibold text-brand-blue">{t("details.boostTable.description")}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="hover:bg-slate-50 transition-colors">
                          <TableCell className="font-medium border-b border-slate-100">1. {t("details.boostTable.steps.detection")}</TableCell>
                          <TableCell className="border-b border-slate-100">
                            <div className="space-y-3">
                              <p>{t("details.boostTable.steps.detectionDesc")}</p>
                              <Card className="overflow-hidden border border-slate-200">
                                <CardContent className="p-0">
                                  <img 
                                    src="/lovable-uploads/78abeaac-86b2-431d-b288-c2e80b8ffc1b.png" 
                                    alt="Initial tweet with low engagement" 
                                    className="w-full h-auto rounded-sm"
                                  />
                                </CardContent>
                              </Card>
                              <p className="text-xs text-center text-muted-foreground italic">
                                {t("details.boostTable.initialPost")}
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 transition-colors">
                          <TableCell className="font-medium border-b border-slate-100">2. {t("details.boostTable.steps.processing")}</TableCell>
                          <TableCell className="border-b border-slate-100">
                            <div className="space-y-3">
                              <p>{t("details.boostTable.steps.processingDesc")}</p>
                              <div className="flex justify-center">
                                <div className="space-y-2 flex flex-col items-center">
                                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full animate-ping bg-brand-blue/30"></div>
                                  </div>
                                  <p className="text-sm text-brand-blue font-medium">
                                    {t("details.boostTable.processingPost")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-slate-50 transition-colors">
                          <TableCell className="font-medium">3. {t("details.boostTable.steps.result")}</TableCell>
                          <TableCell>
                            <div className="space-y-3">
                              <p>{t("details.boostTable.steps.resultDesc")}</p>
                              <Card className="overflow-hidden border border-slate-200">
                                <CardContent className="p-0">
                                  <img 
                                    src="/lovable-uploads/614ea32b-045e-4411-ad52-62a718d389dc.png" 
                                    alt="Post with increased engagement after boosting" 
                                    className="w-full h-auto rounded-sm"
                                  />
                                </CardContent>
                              </Card>
                              <p className="text-xs text-center text-muted-foreground italic">
                                {t("details.boostTable.boostedPost")}
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                  
                  <TabsContent value="results" className="p-4 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-4 bg-slate-50">
                        <h3 className="text-lg font-medium mb-2 text-gray-700">{t("details.boostTable.beforeBoost")}</h3>
                        <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                          <li>{t("details.boostTable.beforeMetrics.views")}</li>
                          <li>{t("details.boostTable.beforeMetrics.engagement")}</li>
                          <li>{t("details.boostTable.beforeMetrics.reach")}</li>
                        </ul>
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          <div className="flex gap-2 items-center justify-center">
                            <span className="font-semibold">18</span> Views
                          </div>
                        </div>
                      </div>
                      <div className="border rounded-md p-4 bg-brand-blue/5 border-brand-blue/20">
                        <h3 className="text-lg font-medium mb-2 text-brand-blue">{t("details.boostTable.afterBoost")}</h3>
                        <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                          <li className="font-medium">{t("details.boostTable.afterMetrics.views")}</li>
                          <li className="font-medium">{t("details.boostTable.afterMetrics.engagement")}</li>
                          <li className="font-medium">{t("details.boostTable.afterMetrics.reach")}</li>
                        </ul>
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                          <div className="flex gap-2 items-center justify-center">
                            <span className="font-semibold text-brand-blue">5,409</span> Views 
                            <span className="text-green-500 text-xs">(+30,050%)</span>
                          </div>
                        </div>
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
