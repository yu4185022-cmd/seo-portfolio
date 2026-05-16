import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - SEO Portfolio',
  description: 'View my successful SEO projects and case studies showcasing real results.',
};

export default function CaseStudiesPage() {
  const cases = [
    {
      title: 'E-Commerce Site Growth',
      description: 'Increased organic traffic by 250% in 6 months through on-page and technical SEO.',
      result: '+250% Traffic',
    },
    {
      title: 'Local Business Ranking',
      description: 'Ranked a local service business in top 3 for competitive keywords.',
      result: 'Top 3 Rankings',
    },
    {
      title: 'Blog Traffic Boost',
      description: 'Grew blog traffic from 100 to 5000 monthly visitors through content strategy.',
      result: '50x Growth',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-lg text-gray-600 mb-12">
          Real results from real projects. Here's how I've helped businesses achieve their SEO goals.
        </p>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-bold">
                  {caseStudy.result}
                </span>
              </div>
              <p className="text-gray-600">{caseStudy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
