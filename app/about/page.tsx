import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Tianle Yu - Growth Marketing Expert',
  description: 'Learn about my background in SEO, AI optimization, and growth marketing across diverse industries.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          I'm Tianle Yu, a growth marketing specialist focused on combining intelligent SEO optimization with AI-powered automation to drive measurable results for businesses across industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">My Background</h2>
            <p className="text-gray-700 mb-4">
              With over 1 year of hands-on experience in SEO optimization, I've worked across diverse industries including manufacturing, industrial products, pharmaceuticals, medical devices, HOA management, and virtual services. This breadth has given me deep insights into different market dynamics and customer journeys.
            </p>
            <p className="text-gray-700">
              My expertise spans the complete digital ecosystem: from traditional SEO (on-page, technical, off-page) to emerging areas like Generative Engine Optimization (GEO), multi-channel content distribution, and AI-powered workflow automation using tools like Claude Code.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Core Expertise</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-blue-600">SEO Optimization</h3>
                <p className="text-gray-600 text-sm">Technical SEO, on-page optimization, off-page strategies, competitive analysis</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600">Website Development</h3>
                <p className="text-gray-600 text-sm">WordPress customization, Framer design, cross-border e-commerce platforms</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600">Growth Analytics</h3>
                <p className="text-gray-600 text-sm">GSC, GA4, Semrush, Ahrefs, Screaming Frog, PageSpeed Insights</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600">AI & Automation</h3>
                <p className="text-gray-600 text-sm">Generative Engine Optimization (GEO), multi-channel content automation, AI integration</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600">Content Marketing</h3>
                <p className="text-gray-600 text-sm">Multi-channel strategies (paid, social, email), content distribution, campaign management</p>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white p-8 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold mb-6">What I Do Now</h2>
          <p className="text-gray-700 mb-4">
            Beyond traditional SEO, I'm actively building the future of growth marketing through:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🤖 <strong>AI-Powered Workflows:</strong> Automating SEO optimization processes using Claude Code and advanced AI tools</li>
            <li>🌍 <strong>Generative Engine Optimization:</strong> Optimizing content for AI-powered search engines (tested with Baidu, Deepseek, Kimi, and other emerging platforms)</li>
            <li>📊 <strong>Content Marketing Automation:</strong> Multi-channel content distribution and management across advertising, social media, and email</li>
            <li>🚀 <strong>Vibe Coding Projects:</strong> Building and optimizing modern web applications for growth</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mt-8">
          <h2 className="text-2xl font-bold mb-4">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✓ Multi-Industry Experience</h3>
              <p className="text-gray-700 text-sm">Proven success across manufacturing, medical, technology, and service sectors</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✓ Modern + Traditional</h3>
              <p className="text-gray-700 text-sm">Combine cutting-edge AI tools with proven SEO fundamentals</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✓ Full-Stack Approach</h3>
              <p className="text-gray-700 text-sm">Technical expertise, creative thinking, and data-driven decision making</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✓ Future-Focused</h3>
              <p className="text-gray-700 text-sm">Early adopter of emerging technologies like GEO and AI content automation</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
