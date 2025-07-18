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
          <h3 className="text-2xl font-bold mb-6 text-center">Results our clients have achieved</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-lg"><strong>+427% organic traffic growth</strong> in 6 months</p>
              <p className="text-lg"><strong>+285% more conversions</strong> from organic search</p>
            </div>
            <div className="space-y-4">
              <p className="text-lg"><strong>+156% ranking improvements</strong> across target keywords</p>
              <p className="text-lg"><strong>90% time savings</strong> on content creation</p>
            </div>
          </div>
          <p className="text-center mt-6 italic text-gray-600">Those numbers aren't typos.</p>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What our clients say</h3>
          <div className="space-y-8">
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="mb-4">"With AI SEO, we achieved in 3 months what would have taken us a year with traditional methods. The automation of keyword research and content creation completely transformed our optimization process."</p>
              <cite className="font-semibold">Michael Johnson, Head of Marketing at TechFlow</cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="mb-4">"We were skeptical about AI in SEO, but the results speak for themselves. Our organic traffic increased by 340%, while content quality remained at the highest level."</p>
              <cite className="font-semibold">Sarah Chen, CMO at SaaS Solutions</cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-6 italic">
              <p className="mb-4">"AI SEO is the future of optimization. In 6 months, we generated over $2 million in revenue from organic traffic using their solutions."</p>
              <cite className="font-semibold">David Rodriguez, Founder at GrowthTech</cite>
            </blockquote>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">We'll build a cutting-edge AI SEO system for you</h3>
          <p className="text-lg mb-8 text-center text-gray-600">Every engagement starts with an analysis of your industry, competitors, and business goals to create a personalized AI SEO strategy.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">1. AI Analysis & Strategy</h4>
                <div className="space-y-2">
                  <p><strong>AI-Powered Audit:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Current search position analysis using advanced algorithms</li>
                    <li>Content gap identification through machine learning</li>
                    <li>Keyword trend forecasting with AI insights</li>
                    <li>Competitive intelligence with automated reporting</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">2. AI SEO Implementation</h4>
                <div className="space-y-2">
                  <p><strong>Content Automation:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>AI-powered content generation tailored to your brand voice</li>
                    <li>Automatic content optimization for rankings</li>
                    <li>Personalized content for different user segments</li>
                    <li>Auto-generated schema markup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">3. AI Monitoring & Analytics</h4>
                <div className="space-y-2">
                  <p><strong>Advanced Reporting:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Real-time dashboards with AI insights</li>
                    <li>Predictive organic traffic analysis</li>
                    <li>Automated ranking change alerts</li>
                    <li>ROI tracking with machine learning</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">4. Optimization & Scaling</h4>
                <div className="space-y-2">
                  <p><strong>Continuous System Learning:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Automatic A/B testing of content</li>
                    <li>Real-time optimization recommendations</li>
                    <li>Adaptive content strategies</li>
                    <li>Predictive keyword opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI SEO */}
        <section className="mb-16 p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Why AI SEO is the future?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">Implementation Speed</h4>
              <p className="text-sm text-gray-600">AI enables content creation and optimization at a pace impossible to achieve with traditional methods.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">Targeting Precision</h4>
              <p className="text-sm text-gray-600">Machine learning identifies exactly those keywords that bring the highest conversions.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">Result Predictability</h4>
              <p className="text-sm text-gray-600">AI algorithms predict SEO trends and enable proactive actions.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-semibold mb-2">Cost Optimization</h4>
              <p className="text-sm text-gray-600">Process automation significantly reduces costs while increasing efficiency.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-semibold mb-2">Adaptability</h4>
              <p className="text-sm text-gray-600">AI automatically adjusts SEO strategy to changes in Google algorithms.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our AI SEO Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">🤖 AI Content Creation</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Automated blog post generation</li>
                  <li>AI-powered meta descriptions and title tags</li>
                  <li>Schema markup automation</li>
                  <li>Voice search optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔍 AI Keyword Research</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Predictive keyword analysis</li>
                  <li>Long-tail keyword discovery with AI</li>
                  <li>Competitor keyword gap analysis</li>
                  <li>Seasonal trend forecasting</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">⚡ Technical AI SEO</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Automated site speed optimization</li>
                  <li>AI-powered internal linking</li>
                  <li>Automatic image optimization</li>
                  <li>Mobile-first indexing preparation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 AI Analytics & Reporting</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Predictive traffic forecasting</li>
                  <li>Conversion rate optimization with AI</li>
                  <li>Automated performance reports</li>
                  <li>ROI tracking and attribution modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center p-8 bg-gray-900 text-white rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Let's start AI SEO collaboration</h3>
          <p className="text-lg mb-6">We've helped B2B companies transform SEO into a powerful growth channel through AI. Let's do the same for you.</p>
          <p className="text-xl font-semibold mb-8">Comprehensive AI SEO packages start at $5,000 per month.</p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">Schedule Free AI SEO Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-gray-900 border-white hover:bg-gray-100">
              <Link to="/kontakt">View Case Studies</Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">AI SEO FAQ</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Q: Can AI replace human SEO specialists?</h4>
              <p className="text-gray-600">A: AI doesn't replace experts but empowers them. Our AI tools allow specialists to focus on strategy while automation handles routine tasks.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: How quickly will we see AI SEO results?</h4>
              <p className="text-gray-600">A: First improvements in technical SEO are visible after 2-3 weeks. Organic traffic growth typically begins after 6-8 weeks of implementation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: Is AI SEO safe for Google?</h4>
              <p className="text-gray-600">A: Absolutely. Our AI tools and strategies are fully compliant with Google Guidelines. We focus on creating high-quality content and user experience.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: What does AI SEO implementation cost?</h4>
              <p className="text-gray-600">A: Costs depend on project size and automation scope. Our packages start at $5,000 monthly for comprehensive AI SEO programs.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to revolutionize your organic growth?</h3>
          <p className="text-lg mb-6 italic">The future of SEO is here. Don't get left behind.</p>
          <Button asChild size="lg">
            <Link to="/kontakt">Get Started Today</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISEO;