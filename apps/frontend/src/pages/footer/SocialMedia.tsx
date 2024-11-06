import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { type ReactElement } from 'react';

function SocialMedia(): ReactElement {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-8 w-8" />,
      handle: '@MUSAofficial',
      url: 'https://facebook.com/MUSAofficial',
      color: 'bg-blue-600',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-8 w-8" />,
      handle: '@MUSA_tweets',
      url: 'https://twitter.com/MUSA_tweets',
      color: 'bg-sky-500',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-8 w-8" />,
      handle: '@musa_official',
      url: 'https://instagram.com/musa_official',
      color: 'bg-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-8 w-8" />,
      handle: 'modern-university-student-association',
      url: 'https://linkedin.com/company/musa',
      color: 'bg-blue-700',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-8 w-8" />,
      handle: 'MUSA Official',
      url: 'https://youtube.com/c/MUSAofficial',
      color: 'bg-red-600',
    },
  ];

  const featuredPosts = [
    {
      platform: 'Instagram',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800',
      caption: 'Leadership Summit 2024 bringing together student leaders from across the country! 🎓 #MUSALeads',
      engagement: '1.2K likes',
    },
    {
      platform: 'Twitter',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800',
      caption: 'Proud to announce our new environmental initiative! Together we can make a difference. 🌱 #MUSAGoesGreen',
      engagement: '856 retweets',
    },
    {
      platform: 'Facebook',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800',
      caption: 'Another successful community outreach program! Thanks to all volunteers who made it possible. ❤️',
      engagement: '2.3K reactions',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Connect With Us</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Stay updated with MUSA across all social media platforms
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${platform.color} p-6 flex items-center justify-center text-white`}>
                {platform.icon}
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-1">{platform.name}</h3>
                <p className="text-gray-600">{platform.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-8">Featured Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={`${post.platform} post`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{post.platform}</div>
                <p className="text-gray-600 mb-3">{post.caption}</p>
                <div className="text-sm text-gray-500">{post.engagement}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;