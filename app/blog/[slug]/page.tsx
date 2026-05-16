import { Metadata } from 'next';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  category: string;
}

const posts: Record<string, BlogPost> = {
  'seo-basics': {
    slug: 'seo-basics',
    title: '10 SEO Basics Every Website Owner Should Know',
    date: '2024-05-10',
    category: 'SEO',
    content: `
# 10 SEO Basics Every Website Owner Should Know

Search Engine Optimization (SEO) is crucial for any website that wants to be discovered online. Here are 10 fundamental principles you should know.

## 1. Keyword Research
Understanding what your audience is searching for is the foundation of SEO. Use tools like Google Keyword Planner to identify relevant keywords.

## 2. Quality Content
Create valuable, relevant content that answers your audience's questions. Google rewards comprehensive, well-written content.

## 3. Mobile Optimization
With most searches happening on mobile devices, ensuring your website is mobile-friendly is essential.

## 4. Page Speed
Fast-loading pages improve user experience and are favored by search engines.

## 5. Meta Tags
Optimize your title tags and meta descriptions to improve click-through rates from search results.

## 6. Internal Linking
Link to other relevant pages on your website to improve navigation and distribute authority.

## 7. Backlinks
Quality backlinks from authoritative websites signal credibility to search engines.

## 8. Technical SEO
Ensure your website has proper structure, XML sitemaps, and robots.txt file.

## 9. User Experience
Google considers user experience signals like bounce rate and time on page.

## 10. Consistency
SEO is not a one-time effort. Regularly update and optimize your content.

Remember, SEO is a long-term strategy. Be patient and consistent with your efforts!
    `,
  },
  'content-strategy': {
    slug: 'content-strategy',
    title: 'How to Create a Winning Content Strategy',
    date: '2024-04-28',
    category: 'Content',
    content: `
# How to Create a Winning Content Strategy

A solid content strategy is the backbone of successful digital marketing. Here's how to create one.

## Define Your Goals
Start by setting clear, measurable goals. What do you want your content to achieve? More traffic? More conversions?

## Know Your Audience
Create detailed personas of your ideal customers. What are their pain points? What questions do they have?

## Choose Your Channels
Decide where you'll publish content: blog, social media, email, video, etc.

## Create a Content Calendar
Plan your content in advance. Consistency is key to building an audience.

## Measure and Optimize
Track your results and adjust your strategy based on what works.

With a solid strategy, your content marketing efforts will yield better results!
    `,
  },
  'technical-seo': {
    slug: 'technical-seo',
    title: 'Technical SEO: The Hidden Gem',
    date: '2024-04-15',
    category: 'Technical',
    content: `
# Technical SEO: The Hidden Gem

While many focus on content and links, technical SEO is often overlooked. Here's why it matters.

## Site Structure
A clear, hierarchical site structure helps search engines understand your website.

## XML Sitemaps
Provide search engines with a map of all your pages.

## Robots.txt
Control which pages search engines can and cannot crawl.

## Schema Markup
Help search engines understand your content better with structured data.

## Core Web Vitals
Google's metrics for page speed, interactivity, and visual stability are important ranking factors.

## HTTPS Security
Secure websites are favored by search engines and users alike.

Don't neglect technical SEO - it's the foundation your content sits on!
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  return {
    title: `${post?.title || 'Article'} - SEO Portfolio`,
    description: post?.content.substring(0, 160) || 'Read this article',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <article className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-gray-600 mb-8 border-b pb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {post.category}
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((line, idx) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">
                    {line.replace('# ', '')}
                  </h1>
                );
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">
                    {line.replace('## ', '')}
                  </h2>
                );
              }
              if (line.trim()) {
                return (
                  <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
