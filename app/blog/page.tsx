import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - SEO Portfolio',
  description: 'Read the latest articles on SEO, digital marketing, and web optimization.',
};

const posts = [
  {
    slug: 'seo-basics',
    title: '10 SEO Basics Every Website Owner Should Know',
    date: '2024-05-10',
    excerpt: 'Learn the fundamental principles of SEO that can help improve your website visibility.',
    category: 'SEO',
  },
  {
    slug: 'content-strategy',
    title: 'How to Create a Winning Content Strategy',
    date: '2024-04-28',
    excerpt: 'Discover how to plan and execute a content strategy that drives engagement and conversions.',
    category: 'Content',
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO: The Hidden Gem',
    date: '2024-04-15',
    excerpt: 'Explore the technical aspects of SEO that often go overlooked but are crucial for success.',
    category: 'Technical',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Read articles about SEO, digital marketing, and web optimization.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
