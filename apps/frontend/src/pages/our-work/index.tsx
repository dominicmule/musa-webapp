import { Link } from 'react-router-dom';

const categories = {
  education: {
    title: 'Education',
    description: 'Empowering students through knowledge and learning initiatives.',
  },
  'climate-action': {
    title: 'Climate Action',
    description: 'Leading environmental sustainability projects on campus.',
  },
  health: {
    title: 'Health',
    description: 'Promoting student health and wellness programs.',
  },
  'youth-empowerment': {
    title: 'Youth Empowerment',
    description: 'Building leadership skills and opportunities for students.',
  },
  innovation: {
    title: 'Innovation',
    description: 'Fostering creativity and technological advancement.',
  },
};

function OurWork() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Work</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categories).map(([key, { title, description }]) => (
          <Link
            key={key}
            to={`/our-work/${key}`}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-musa-blue">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OurWork;