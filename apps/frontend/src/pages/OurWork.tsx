import { useParams } from 'react-router-dom';

const categories = {
  'education': {
    title: 'Education Initiatives',
    description: 'Empowering students through knowledge and learning opportunities.'
  },
  'climate-action': {
    title: 'Climate Action',
    description: 'Leading environmental initiatives for a sustainable future.'
  },
  'health': {
    title: 'Health Programs',
    description: 'Promoting wellness and health awareness in our community.'
  },
  'youth-empowerment': {
    title: 'Youth Empowerment',
    description: 'Building leadership skills and empowering young voices.'
  },
  'innovation': {
    title: 'Innovation Projects',
    description: 'Fostering creativity and technological advancement.'
  }
};

function OurWork() {
  const { category } = useParams();
  
  if (category && categories[category as keyof typeof categories]) {
    const categoryInfo = categories[category as keyof typeof categories];
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{categoryInfo.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{categoryInfo.description}</p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Content coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categories).map(([key, { title, description }]) => (
          <div key={key} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-musa-blue mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;