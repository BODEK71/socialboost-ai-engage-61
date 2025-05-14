
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Sample blog article component
const BlogArticlePreview = ({ 
  title, 
  date, 
  author, 
  excerpt, 
  id 
}: { 
  title: string; 
  date: string; 
  author: string; 
  excerpt: string; 
  id: string;
}) => {
  return (
    <Card className="mb-8 overflow-hidden">
      <div className="p-0">
        <div className="aspect-w-3 aspect-h-1 bg-secondary/30">
          <AspectRatio ratio={3/1}>
            <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
              [Article image]
            </div>
          </AspectRatio>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            <Link to={`/blog/${id}`} className="hover:text-brand-blue transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{date} | {author}</p>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
          <Link to={`/blog/${id}`}>
            <Button variant="link" className="p-0 h-auto font-medium text-brand-blue hover:text-brand-blue/80">
              {/* Using t function for "Read more" text */}
              <span className="flex items-center">
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

const Blog = () => {
  const { t } = useTranslation("blog");
  const articles = t("articles", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">{t("latestArticles")}</h2>
        
        {/* Render all articles */}
        {articles.map((article: any, index: number) => (
          <BlogArticlePreview
            key={article.id}
            id={article.id}
            title={article.title}
            date={article.date}
            author={article.author}
            excerpt={article.excerpt}
          />
        ))}
        
        <div className="bg-secondary/20 p-8 rounded-xl text-center mt-12">
          <h3 className="text-2xl font-bold mb-3">{t("newsletter.title")}</h3>
          <p className="text-muted-foreground mb-6">
            {t("newsletter.description")}
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input placeholder="Your email address" className="bg-white" />
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              Subscribe
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("popularCategories.title")}</h3>
            <ul className="space-y-2">
              {t("popularCategories.categories", { returnObjects: true }).map((category: string, index: number) => (
                <li key={index}>
                  <Link to={`/blog/category/${index}`} className="text-brand-blue hover:underline">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Popular articles</h3>
            <ul className="space-y-2">
              {articles.slice(0, 3).map((article: any) => (
                <li key={article.id}>
                  <Link to={`/blog/${article.id}`} className="text-brand-blue hover:underline">{article.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
