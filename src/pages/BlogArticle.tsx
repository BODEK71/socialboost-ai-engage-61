
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BlogArticle = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { t } = useTranslation("blog");
  
  // Get all articles
  const articles = t("articles", { returnObjects: true }) as any[];
  
  // Find the article matching the ID
  const article = articles.find(article => article.id === articleId);
  
  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog">
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              Return to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-3xl py-12 px-4 md:px-8">
        <Link to="/blog" className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> 
          {t("backToArticles")}
        </Link>
        
        <Card className="overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">
              {article.date} | {article.author}
            </p>
            
            <div className="aspect-w-16 aspect-h-9 bg-secondary/30 mb-8">
              <AspectRatio ratio={16/9}>
                <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
                  [Article featured image]
                </div>
              </AspectRatio>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {/* Render article content sections */}
              {article.content.map((section: any, index: number) => (
                <React.Fragment key={index}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">{section.subtitle}</h2>
                  <div style={{ whiteSpace: 'pre-line' }} className="text-muted-foreground">
                    {section.content}
                  </div>
                  {index < article.content.length - 1 && <Separator className="my-6" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Card>
        
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Read more articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles
              .filter(a => a.id !== articleId)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Card key={relatedArticle.id} className="overflow-hidden">
                  <div className="p-4">
                    <h4 className="font-bold mb-2">
                      <Link
                        to={`/blog/${relatedArticle.id}`}
                        className="hover:text-brand-blue transition-colors"
                      >
                        {relatedArticle.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {relatedArticle.date} | {relatedArticle.author}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <Link to={`/blog/${relatedArticle.id}`}>
                      <Button variant="link" className="p-0 h-auto text-sm font-medium text-brand-blue hover:text-brand-blue/80">
                        {t("readMore")} →
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;
