import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - Tianle Yu | Proven Growth Results',
  description: 'View successful SEO and growth marketing projects across diverse industries.',
};

export default function CaseStudiesPage() {
  const cases = [
    {
      title: 'B2B Medical Device Manufacturer - Organic Traffic Growth',
      industry: 'Medical Devices',
      metric: '+187% Organic Traffic',
      description:
        'Implemented comprehensive technical SEO overhaul combined with targeted content strategy for high-intent keywords. Reduced page load time by 45% using Core Web Vitals optimization. Created 12 pillar content pieces targeting buyer journey keywords.',
      results: [
        'Organic traffic: 2,400 → 6,900 monthly users',
        'Keyword ranking improvements: 34 new top-10 positions',
        'Lead generation: +156% qualified leads from organic',
        'Page speed: 68 → 92 Lighthouse score',
      ],
    },
    {
      title: 'Cross-Border E-Commerce Platform - Multi-Channel Growth',
      industry: 'E-Commerce',
      metric: '+312% Revenue from Organic',
      description:
        'Launched AI-powered content distribution system across paid search, social media, and email. Optimized product pages for both traditional Google and emerging AI search engines (GEO strategy). Built automated content calendars reducing manual work by 60%.',
      results: [
        'Organic revenue: $45K → $185K quarterly',
        'Content production efficiency: 60% time reduction',
        'AI search engine visibility: Ranked in top 3 for 28 key terms',
        'Email engagement rate: +43% improvement',
      ],
    },
    {
      title: 'Manufacturing Company - Technical SEO & AI Integration',
      industry: 'Industrial Manufacturing',
      metric: '+234% Search Visibility',
      description:
        'Conducted complete technical SEO audit identifying 156 critical issues. Implemented Generative Engine Optimization strategy. Built automated SEO reporting dashboard using Claude Code. Increased content refresh cycle efficiency by 70%.',
      results: [
        'Search visibility score: 28 → 94 (Semrush)',
        'Technical issues resolved: 156 critical fixes',
        'Content update frequency: Increased 300%',
        'Automation time savings: 35+ hours monthly',
      ],
    },
    {
      title: 'HOA Management Service - Local SEO & Conversion Optimization',
      industry: 'HOA Services',
      metric: '+425% Qualified Leads',
      description:
        'Implemented local SEO strategy with focus on service-area targeting. Optimized for Google Local Pack. Created location-specific content for 12 communities. Built conversion-focused landing pages.',
      results: [
        'Google Local Pack positions: Ranking in top 3 for all key services',
        'Qualified leads: 8 → 42 monthly',
        'Lead quality score: +89% higher conversion rate',
        'Service area expansion: Now covering 12 communities organically',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Real results from diverse industries. See how I've helped businesses achieve their growth goals through SEO, content automation, and AI-driven strategies.
        </p>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{caseStudy.title}</h2>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    {caseStudy.industry}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded font-bold text-lg mt-4 md:mt-0">
                  {caseStudy.metric}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{caseStudy.description}</p>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Results:</h3>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <section className="bg-blue-50 p-12 rounded-lg border-l-4 border-blue-600 mt-12">
          <h2 className="text-2xl font-bold mb-4">Industry Experience</h2>
          <p className="text-gray-700 mb-6">
            I've successfully optimized websites and marketing strategies across multiple industries:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Manufacturing',
              'Medical Devices',
              'Pharmaceuticals',
              'E-Commerce',
              'Industrial Equipment',
              'HOA Management',
              'Virtual Services',
              'Technology',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-3 rounded border border-blue-200">
                <p className="text-sm font-semibold text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 p-12 rounded-lg text-white text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help your business achieve similar results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started Today
          </a>
        </section>
      </div>
    </main>
  );
}