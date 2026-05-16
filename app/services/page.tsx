import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Tianle Yu | Growth Marketing Solutions',
  description: 'AI-powered SEO optimization, content automation, and traditional SEO services for sustainable growth.',
};

export default function ServicesPage() {
  const modernServices = [
    {
      title: 'AI-Powered Content Automation',
      description: 'Multi-channel content distribution and management across paid advertising, social media, and email campaigns using intelligent automation.',
    },
    {
      title: 'Generative Engine Optimization (GEO)',
      description: 'Optimize content for AI-powered search engines. Proven strategies for emerging platforms like Deepseek, Kimi, and other generative AI search results.',
    },
    {
      title: 'Growth Marketing Automation',
      description: 'Build automated workflows using Claude Code and AI tools to scale your SEO and content marketing efficiently.',
    },
    {
      title: 'Multi-Channel Growth Strategy',
      description: 'Integrated approach combining SEO, paid search, social media, and email marketing for cohesive growth acceleration.',
    },
  ];

  const traditionalServices = [
    {
      title: 'Complete SEO Optimization',
      description: 'Full technical SEO audit, on-page optimization, keyword strategy, and implementation across your website.',
    },
    {
      title: 'Technical SEO & Performance',
      description: 'Core Web Vitals optimization, site speed improvement, mobile responsiveness, and technical architecture review.',
    },
    {
      title: 'Content Strategy & Implementation',
      description: 'Keyword research, content planning, writing, and optimization for search visibility and user engagement.',
    },
    {
      title: 'Competitive Analysis & Tracking',
      description: 'Comprehensive competitor analysis, ranking tracking, and data-driven optimization recommendations.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">My Services</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          I offer both cutting-edge growth marketing solutions and proven traditional SEO services. Choose the approach that fits your business needs.
        </p>

        {/* Modern Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-blue-600">🚀 Growth Acceleration</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            For businesses ready to scale fast with AI and automation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-green-600">🎯 Proven SEO Excellence</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            For businesses seeking sustainable, long-term organic growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Tools & Platforms I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Google Search Console',
              'Google Analytics 4',
              'Semrush',
              'Ahrefs',
              'Screaming Frog',
              'PageSpeed Insights',
              'Claude Code',
              'WordPress & Framer',
            ].map((tool, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded border border-blue-200">
                <p className="font-semibold text-gray-700">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-lg text-white text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Which Approach Is Right for You?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Not sure? I offer free consultations to discuss your goals and recommend the perfect strategy.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Free Consultation
          </a>
        </section>
      </div>
    </main>
  );
}
