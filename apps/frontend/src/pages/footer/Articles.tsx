import { Clock, ThumbsUp, MessageCircle } from 'lucide-react';
import { type ReactElement } from 'react';

function Articles(): ReactElement {
  const articles = [
    {
      title: "The Future of Student Leadership",
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "5 min read",
      likes: 245,
      comments: 28,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800",
      excerpt: "Exploring how modern student leaders are reshaping campus communities and driving innovation in higher education.",
      tags: ["Leadership", "Innovation", "Education"],
    },
    {
      title: "Sustainable Campus Initiatives",
      author: "Michael Chen",
      date: "March 3, 2024",
      readTime: "4 min read",
      likes: 189,
      comments: 15,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800",
      excerpt: "How student organizations are leading the charge in campus sustainability and environmental awareness.",
      tags: ["Sustainability", "Environment", "Campus Life"],
    },
    {
      title: "Mental Health in Higher Education",
      author: "Emma Rodriguez",
      date: "February 28, 2024",
      readTime: "6 min read",
      likes: 312,
      comments: 42,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800",
      excerpt: "Addressing the growing importance of mental health support and resources for university students.",
      tags: ["Mental Health", "Wellness", "Student Life"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Insights and perspectives from our community
        </p>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                  
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{article.excerpt}</p>

                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-5 w-5" />
                      {article.likes}
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {article.comments}
                    </div>
                    <button className="ml-auto text-musa-blue hover:text-blue-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;