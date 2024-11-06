import { useParams, Navigate } from 'react-router-dom';

const eventTypes = {
  'past-events': {
    title: 'Past Events',
    description: 'Explore our previous events and their impact on our community.',
    events: [
      {
        title: 'Annual Leadership Summit 2023',
        date: 'November 15, 2023',
        description: 'A gathering of student leaders discussing future initiatives.',
      },
      {
        title: 'Environmental Awareness Week',
        date: 'October 1-7, 2023',
        description: 'Week-long activities promoting environmental consciousness.',
      },
      {
        title: 'Innovation Challenge',
        date: 'September 5, 2023',
        description: 'Student-led hackathon focusing on campus solutions.',
      },
    ],
  },
  'upcoming-events': {
    title: 'Upcoming Events',
    description: 'Stay tuned for our future events and activities.',
    events: [
      {
        title: 'Spring Leadership Workshop',
        date: 'March 20, 2024',
        description: 'Interactive workshop on effective leadership skills.',
      },
      {
        title: 'Health and Wellness Fair',
        date: 'April 5, 2024',
        description: 'Annual fair promoting student health and well-being.',
      },
      {
        title: 'Tech Innovation Showcase',
        date: 'May 15, 2024',
        description: 'Exhibition of student technology projects.',
      },
    ],
  },
};

function Events() {
  const { type } = useParams();
  
  if (type && !eventTypes[type as keyof typeof eventTypes]) {
    return <Navigate to="/events" replace />;
  }

  if (type) {
    const eventInfo = eventTypes[type as keyof typeof eventTypes];
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{eventInfo.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{eventInfo.description}</p>

        <div className="space-y-8">
          {eventInfo.events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-musa-blue mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Events</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(eventTypes).map(([key, { title, description }]) => (
          <a
            key={key}
            href={`/events/${key}`}
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

export default Events;