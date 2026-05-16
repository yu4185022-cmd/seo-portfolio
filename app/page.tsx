import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tianle Yu - Growth Marketing Expert | SEO & AI Optimization',
  description: 'AI-driven SEO and growth marketing specialist. Helping businesses scale through intelligent optimization, content automation, and data-driven strategies.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Tianle Yu</h1>
          <div className="flex gap-6 text-sm md:text-base">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600">Case Studies</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Growth Through Intelligence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I combine AI-powered SEO optimization, intelligent content automation, and data-driven strategies to help businesses achieve sustainable growth across search, social, and email channels.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Solutions
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              View Results
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🤖 AI-Powered</h3>
            <p className="text-gray-600">
              Leverage cutting-edge AI and automation tools to scale your SEO and content marketing efforts efficiently.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">📊 Data-Driven</h3>
            <p className="text-gray-600">
              Every decision backed by analytics from GSC, GA4, Semrush, Ahrefs, and custom tracking systems.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 Multi-Channel</h3>
            <p className="text-gray-600">
              Integrated growth strategies spanning SEO, content marketing, paid advertising, and email campaigns.
            </p>
          </div>
        </section>

        <section className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Growth?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you need sustainable SEO results or AI-powered growth acceleration, let's build a strategy tailored to your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </main>
  );
}
