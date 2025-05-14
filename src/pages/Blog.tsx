
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

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
            <Link to={`/blog/${id}`} className="hover:text-brand-purple transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{date} | {author}</p>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
          <Link to={`/blog/${id}`}>
            <Button variant="link" className="p-0 h-auto font-medium text-brand-purple hover:text-brand-purple/80">
              Read more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

const BlogArticle = ({ 
  title, 
  date, 
  author, 
  content,
  id
}: { 
  title: string; 
  date: string; 
  author: string; 
  content: React.ReactNode;
  id: string;
}) => {
  return (
    <Card className="mb-8 overflow-hidden" id={id}>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-6">{date} | {author}</p>
        <div className="aspect-w-3 aspect-h-1 bg-secondary/30 mb-6">
          <AspectRatio ratio={16/9}>
            <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
              Show Image
            </div>
          </AspectRatio>
        </div>
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </div>
    </Card>
  );
};

const Blog = () => {
  const { t } = useTranslation("blog");

  // Content for the first blog article
  const firstArticleContent = (
    <>
      {t("firstArticle.sections", { returnObjects: true }).map((section, index) => (
        <React.Fragment key={index}>
          <h3>{section.subtitle}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
        </React.Fragment>
      ))}
    </>
  );

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
        
        <BlogArticle
          id="article-1"
          title={t("firstArticle.title")}
          date={t("firstArticle.date")}
          author={t("firstArticle.author")}
          content={firstArticleContent}
        />
        
        {t("articles", { returnObjects: true }).slice(1, 3).map((article, index) => (
          <BlogArticlePreview
            key={index}
            id={article.id}
            title={article.title}
            date={article.date}
            author={article.author}
            excerpt={article.excerpt}
          />
        ))}
        
        <div className="text-center mt-12 mb-16">
          <Button className="bg-brand-purple hover:bg-brand-purple/90">
            {t("viewAllArticles")}
          </Button>
        </div>
        
        <div className="bg-secondary/20 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">{t("newsletter.title")}</h3>
          <p className="text-muted-foreground mb-6">
            {t("newsletter.description")}
          </p>
          <div className="max-w-md mx-auto">
            [Subscription form]
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("popularCategories.title")}</h3>
            <ul className="space-y-2">
              {t("popularCategories.categories", { returnObjects: true }).map((category, index) => (
                <li key={index}>
                  <Link to={`/blog/category/${index}`} className="text-brand-purple hover:underline">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Popular articles</h3>
            <ul className="space-y-2">
              {t("articles", { returnObjects: true }).slice(0, 3).map((article, index) => (
                <li key={index}>
                  <Link to={`/blog/${article.id}`} className="text-brand-purple hover:underline">{article.title}</Link>
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
