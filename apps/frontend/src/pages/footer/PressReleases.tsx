import { FileText, Calendar } from 'lucide-react';
import { type ReactElement } from 'react';

function PressReleases(): ReactElement {
  const releases = [
    {
      title: "MUSA Launches New Leadership Development Program",
      date: "March 1, 2024",
      category: "Programs",
      summary: "Introducing a comprehensive leadership training initiative for student representatives.",
      content: "The Modern University Student Association (MUSA) today announced the launch of its new Leadership Development Program, aimed at enhancing the capabilities of student leaders across campus.",
    },
    {
      title: "Annual Student Survey Results Released",
      date: "February 15, 2024",
      category: "Research",
      summary: "Key findings from our comprehensive student satisfaction survey.",
      content: "MUSA has released the results of its annual student survey, showing significant improvements in student satisfaction with campus services and facilities.",
    },
    {
      title: "MUSA Partners with Tech Giants for Innovation Hub",
      date: "January 30, 2024",
      category: "Partnerships",
      summary: "New collaboration to provide students with cutting-edge technology resources.",
      content: "In a groundbreaking partnership, MUSA has joined forces with leading technology companies to establish a state-of-the-art innovation hub on campus.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Press Releases</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Stay updated with the latest news and announcements from MUSA
        </p>

        <div className="space-y-8">
          {releases.map((release, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-musa-blue/10 text-musa-blue rounded-full text-sm">
                    {release.category}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {release.date}
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">{release.title}</h2>
                <p className="text-gray-600 font-medium mb-4">{release.summary}</p>
                <p className="text-gray-600 mb-6">{release.content}</p>

                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-musa-blue hover:text-blue-700">
                    <FileText className="h-5 w-5" />
                    Download Full Release
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PressReleases;