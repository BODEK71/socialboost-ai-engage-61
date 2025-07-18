import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AISEO = () => {
  const { t } = useTranslation('aiseo');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            {t('subtitle')}
          </h2>
        </section>

        {/* Results Section */}
        <section className="mb-16 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('results.title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-lg"><strong>{t('results.traffic')}</strong> {t('results.trafficTime')}</p>
              <p className="text-lg"><strong>{t('results.conversions')}</strong> {t('results.conversionsSource')}</p>
            </div>
            <div className="space-y-4">
              <p className="text-lg"><strong>{t('results.rankings')}</strong> {t('results.rankingsContext')}</p>
              <p className="text-lg"><strong>{t('results.timeSavings')}</strong> {t('results.timeSavingsContext')}</p>
            </div>
          </div>
          <p className="text-center mt-6 italic text-gray-600">{t('results.disclaimer')}</p>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('testimonials.title')}</h3>
          <div className="space-y-8">
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="mb-4">"{t('testimonials.testimonial1.quote')}"</p>
              <cite className="font-semibold">{t('testimonials.testimonial1.author')}, {t('testimonials.testimonial1.position')}</cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="mb-4">"{t('testimonials.testimonial2.quote')}"</p>
              <cite className="font-semibold">{t('testimonials.testimonial2.author')}, {t('testimonials.testimonial2.position')}</cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="mb-4">"{t('testimonials.testimonial3.quote')}"</p>
              <cite className="font-semibold">{t('testimonials.testimonial3.author')}, {t('testimonials.testimonial3.position')}</cite>
            </blockquote>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('services.title')}</h3>
          <p className="text-lg mb-8 text-center text-gray-600">{t('services.subtitle')}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">{t('services.analysis.title')}</h4>
                <div className="space-y-2">
                  <p><strong>{t('services.analysis.audit.title')}</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {t('services.analysis.audit.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">{t('services.implementation.title')}</h4>
                <div className="space-y-2">
                  <p><strong>{t('services.implementation.content.title')}</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {t('services.implementation.content.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">{t('services.monitoring.title')}</h4>
                <div className="space-y-2">
                  <p><strong>{t('services.monitoring.reporting.title')}</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {t('services.monitoring.reporting.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">{t('services.optimization.title')}</h4>
                <div className="space-y-2">
                  <p><strong>{t('services.optimization.learning.title')}</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {t('services.optimization.learning.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI SEO */}
        <section className="mb-16 p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('whyAiSeo.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">{t('whyAiSeo.speed.title')}</h4>
              <p className="text-sm text-gray-600">{t('whyAiSeo.speed.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">{t('whyAiSeo.precision.title')}</h4>
              <p className="text-sm text-gray-600">{t('whyAiSeo.precision.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">{t('whyAiSeo.predictability.title')}</h4>
              <p className="text-sm text-gray-600">{t('whyAiSeo.predictability.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold mb-2">{t('whyAiSeo.optimization.title')}</h4>
              <p className="text-sm text-gray-600">{t('whyAiSeo.optimization.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-semibold mb-2">{t('whyAiSeo.adaptability.title')}</h4>
              <p className="text-sm text-gray-600">{t('whyAiSeo.adaptability.description')}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('ourServices.title')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">🤖 {t('ourServices.content.title')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {t('ourServices.content.items', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔍 {t('ourServices.keyword.title')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {t('ourServices.keyword.items', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">⚡ {t('ourServices.technical.title')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {t('ourServices.technical.items', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 {t('ourServices.analytics.title')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {t('ourServices.analytics.items', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center p-8 bg-gray-900 text-white rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{t('cta.title')}</h3>
          <p className="text-lg mb-6">{t('cta.subtitle')}</p>
          <p className="text-xl font-semibold mb-8">{t('cta.pricing')}</p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">{t('getStarted.buttons.consultation')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-gray-900 border-white hover:bg-gray-100">
              <Link to="/kontakt">{t('getStarted.buttons.caseStudies')}</Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('faq.title')}</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Q: {t('faq.q1.question')}</h4>
              <p className="text-gray-600">A: {t('faq.q1.answer')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: {t('faq.q2.question')}</h4>
              <p className="text-gray-600">A: {t('faq.q2.answer')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: {t('faq.q3.question')}</h4>
              <p className="text-gray-600">A: {t('faq.q3.answer')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: {t('faq.q4.question')}</h4>
              <p className="text-gray-600">A: {t('faq.q4.answer')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: {t('faq.q5.question')}</h4>
              <p className="text-gray-600">A: {t('faq.q5.answer')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: {t('faq.q6.question')}</h4>
              <p className="text-gray-600">A: {t('faq.q6.answer')}</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">{t('getStarted.ready')}</h3>
          <p className="text-lg mb-6 italic">{t('footer.tagline')}</p>
          <Button asChild size="lg">
            <Link to="/kontakt">{t('getStarted.title')}</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISEO;