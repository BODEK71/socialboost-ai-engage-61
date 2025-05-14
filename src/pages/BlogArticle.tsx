
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

// Article images mapping
const articleImages = {
  "increasing-reach": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  "algorithm-changes": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  "content-strategy": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
};

// Section images mapping (for each article section)
const sectionImages = {
  "increasing-reach": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
  ],
  "algorithm-changes": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
  ],
  "content-strategy": [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
  ]
};

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

  // Get the section images for this article
  const articleSectionImages = sectionImages[articleId as keyof typeof sectionImages] || [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-3xl py-12 px-4 md:px-8">
        <Link to="/blog" className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> 
          {t("backToArticles")}
        </Link>
        
        <Card className="overflow-hidden">
          <div className="p-0">
            <div className="aspect-w-16 aspect-h-9">
              <AspectRatio ratio={16/9}>
                <img 
                  src={articleImages[articleId as keyof typeof articleImages]} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
              <p className="text-sm text-muted-foreground mb-6">
                {article.date} | {article.author}
              </p>
              
              <div className="prose prose-lg max-w-none">
                {/* Render article content sections with images */}
                {article.content.map((section: any, index: number) => (
                  <React.Fragment key={index}>
                    <h2 className="text-2xl font-bold mt-8 mb-4">{section.subtitle}</h2>
                    
                    {/* Show section image for every section except the first one (which has the main image) */}
                    {index > 0 && articleSectionImages[index - 1] && (
                      <div className="mb-6">
                        <AspectRatio ratio={16/9}>
                          <img 
                            src={articleSectionImages[index - 1]} 
                            alt={section.subtitle}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </AspectRatio>
                      </div>
                    )}
                    
                    <div style={{ whiteSpace: 'pre-line' }} className="text-muted-foreground">
                      {section.content}
                    </div>
                    {index < article.content.length - 1 && <Separator className="my-6" />}
                  </React.Fragment>
                ))}
              </div>
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
                    <div className="mb-3">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={articleImages[relatedArticle.id as keyof typeof articleImages]} 
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </AspectRatio>
                    </div>
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
