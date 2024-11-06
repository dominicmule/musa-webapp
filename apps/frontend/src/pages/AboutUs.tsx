import { useParams, Navigate } from 'react-router-dom';

const sections = {
  'our-mission': {
    title: 'Our Mission',
    description: 'Empowering students through leadership and innovation.',
    content: [
      {
        title: 'Vision',
        description: 'To be the leading student organization fostering leadership and innovation.',
      },
      {
        title: 'Mission',
        description: 'To empower students through comprehensive leadership development and innovative initiatives.',
      },
      {
        title: 'Values',
        description: 'Leadership, Innovation, Collaboration, Integrity, and Excellence.',
      },
    ],
  },
  'our-story': {
    title: 'Our Story',
    description: 'The journey of MUSA from its inception to present day.',
    content: [
      {
        title: 'Foundation',
        description: 'Established with a vision to unite and empower students.',
      },
      {
        title: 'Growth',
        description: 'Expanding to serve over 4,000 members across six chapters.',
      },
      {
        title: 'Impact',
        description: 'Creating lasting change through student leadership and innovation.',
      },
    ],
  },
  'our-team': {
    title: 'Our Team',
    description: 'Meet the dedicated leaders who drive our association forward.',
    content: [
      {
        title: 'MUSA Council',
        description: 'Our executive leadership team guiding the organization.',
      },
      {
        title: 'Chapter Leaders',
        description: 'Dedicated representatives from each of our six chapters.',
      },
      {
        title: 'Committee Members',
        description: 'Passionate individuals working in various capacities.',
      },
    ],
  },
  'our-partners': {
    title: 'Our Partners',
    description: 'Organizations that support and collaborate with MUSA.',
    content: [
      {
        title: 'Academic Partners',
        description: 'Educational institutions supporting our mission.',
      },
      {
        title: 'Corporate Partners',
        description: 'Companies investing in student leadership development.',
      },
      {
        title: 'Community Partners',
        description: 'Local organizations collaborating on initiatives.',
      },
    ],
  },
};

function AboutUs() {
  const { section } = useParams();
  
  if (section && !sections[section as keyof typeof sections]) {
    return <Navigate to="/about-us" replace />;
  }

  if (section) {
    const sectionInfo = sections[section as keyof typeof sections];
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{sectionInfo.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{sectionInfo.description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionInfo.content.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-musa-blue mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(sections).map(([key, { title, description }]) => (
          <a
            key={key}
            href={`/about-us/${key}`}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-musa-blue">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;