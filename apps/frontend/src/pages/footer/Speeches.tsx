import { Calendar, Clock, User } from 'lucide-react';
import { type ReactElement } from 'react';

function Speeches(): ReactElement {
  const speeches = [
    {
      title: "President's Welcome Address 2024",
      speaker: "Sarah Johnson",
      role: "MUSA President",
      date: "January 15, 2024",
      duration: "25 mins",
      description: "Annual address outlining MUSA's vision and goals for the year.",
      videoUrl: "https://youtube.com/watch?v=example1",
    },
    {
      title: "Leadership Summit Keynote",
      speaker: "Dr. Michael Chen",
      role: "Guest Speaker",
      date: "December 5, 2023",
      duration: "45 mins",
      description: "Inspiring talk on student leadership in the modern era.",
      videoUrl: "https://youtube.com/watch?v=example2",
    },
    {
      title: "Environmental Initiative Launch",
      speaker: "Emma Rodriguez",
      role: "Environmental Committee Chair",
      date: "November 20, 2023",
      duration: "30 mins",
      description: "Presentation of MUSA's new environmental sustainability program.",
      videoUrl: "https://youtube.com/watch?v=example3",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Notable Speeches</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Collection of impactful addresses from our leaders and guest speakers
        </p>

        <div className="space-y-8">
          {speeches.map((speech, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{speech.title}</h2>
                
                <div className="flex flex-wrap gap-6 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <div>
                      <div className="font-medium">{speech.speaker}</div>
                      <div className="text-sm">{speech.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{speech.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{speech.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{speech.description}</p>

                <a
                  href={speech.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-musa-blue hover:text-blue-700"
                >
                  Watch Speech
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speeches;