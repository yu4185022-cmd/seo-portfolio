import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Portfolio - Digital Marketing Expert',
  description: 'Welcome to my SEO portfolio. Discover how I help businesses grow through digital marketing and SEO.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SEO Portfolio</h1>
          <div className="flex gap-6">
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
            Welcome to My SEO Portfolio
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I help businesses achieve their digital marketing goals through strategic SEO and content optimization.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Services
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              See Case Studies
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">📊 Data-Driven</h3>
            <p className="text-gray-600">
              Every strategy is backed by thorough analysis and metrics to ensure maximum ROI.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🎯 Results-Focused</h3>
            <p className="text-gray-600">
              I focus on delivering measurable results that impact your bottom line.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">💡 Innovative</h3>
            <p className="text-gray-600">
              Stay ahead of the curve with cutting-edge SEO strategies and best practices.
            </p>
          </div>
        </section>

        <section className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Let's work together to improve your online visibility and drive more qualified traffic to your website.
          </p>
          <Link
            href="/about"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Learn More About Me
          </Link>
        </section>
      </div>
    </main>
  );
}
