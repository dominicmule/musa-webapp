import { useParams, Navigate } from 'react-router-dom';

const categories = {
  education: {
    title: 'Education',
    description: 'Empowering students through knowledge and learning initiatives.',
    content: [
      {
        title: 'Academic Support Programs',
        description: 'Peer tutoring and study groups to help students excel in their studies.',
      },
      {
        title: 'Workshops and Seminars',
        description: 'Regular educational events covering various academic topics.',
      },
      {
        title: 'Research Opportunities',
        description: 'Connecting students with research projects and mentors.',
      },
    ],
  },
  'climate-action': {
    title: 'Climate Action',
    description: 'Leading environmental sustainability projects on campus.',
    content: [
      {
        title: 'Campus Recycling Initiative',
        description: 'Comprehensive recycling program across all university facilities.',
      },
      {
        title: 'Green Energy Projects',
        description: 'Promoting renewable energy usage within the university.',
      },
      {
        title: 'Environmental Awareness',
        description: 'Educational campaigns about climate change and sustainability.',
      },
    ],
  },
  health: {
    title: 'Health',
    description: 'Promoting student health and wellness programs.',
    content: [
      {
        title: 'Mental Health Support',
        description: 'Counseling services and mental health awareness programs.',
      },
      {
        title: 'Physical Wellness',
        description: 'Sports activities and fitness programs for students.',
      },
      {
        title: 'Health Education',
        description: 'Workshops on nutrition, stress management, and healthy living.',
      },
    ],
  },
  'youth-empowerment': {
    title: 'Youth Empowerment',
    description: 'Building leadership skills and opportunities for students.',
    content: [
      {
        title: 'Leadership Training',
        description: 'Comprehensive programs to develop student leaders.',
      },
      {
        title: 'Mentorship Program',
        description: 'Connecting students with experienced mentors.',
      },
      {
        title: 'Student Initiatives',
        description: 'Supporting student-led projects and ideas.',
      },
    ],
  },
  innovation: {
    title: 'Innovation',
    description: 'Fostering creativity and technological advancement.',
    content: [
      {
        title: 'Tech Incubator',
        description: 'Supporting student tech startups and innovations.',
      },
      {
        title: 'Innovation Lab',
        description: 'Access to cutting-edge technology and resources.',
      },
      {
        title: 'Hackathons',
        description: 'Regular coding and innovation competitions.',
      },
    ],
  },
};

function CategoryPage() {
  const { category } = useParams();
  
  if (!category || !(category in categories)) {
    return <Navigate to="/our-work" replace />;
  }

  const categoryInfo = categories[category as keyof typeof categories];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{categoryInfo.title}</h1>
      <p className="text-xl text-gray-600 mb-12">{categoryInfo.description}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryInfo.content.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-musa-blue mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;