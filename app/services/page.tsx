import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - SEO Portfolio',
  description: 'Explore the SEO and digital marketing services I offer to help your business grow.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'On-Page SEO',
      description: 'Optimize your website content, meta tags, and structure for better search rankings.',
    },
    {
      title: 'Technical SEO',
      description: 'Improve site speed, mobile optimization, and crawlability for search engines.',
    },
    {
      title: 'Content Strategy',
      description: 'Develop a comprehensive content plan that drives traffic and engagement.',
    },
    {
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve domain authority and rankings.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">My Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          I offer a range of SEO and digital marketing services to help your business succeed online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
