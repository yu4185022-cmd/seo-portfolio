import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - SEO Portfolio',
  description: 'Learn more about my background, skills, and experience in SEO and digital marketing.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-600 mb-4">
          I'm a SEO specialist with a passion for helping businesses grow through digital marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p className="text-gray-700">
              With over 5 years of experience in SEO and digital marketing, I help businesses achieve their online goals.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="text-gray-700 space-y-2">
              <li>✓ SEO Optimization</li>
              <li>✓ Content Strategy</li>
              <li>✓ Technical SEO</li>
              <li>✓ Analytics</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
