import { type ReactElement } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function ContactUs(): ReactElement {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@musa.org", "support@musa.org"],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Student Avenue", "University District, ST 12345"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Monday-Friday: 9AM-5PM", "Saturday: 10AM-2PM"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Get in touch with us for any inquiries or support
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-musa-blue/10 text-musa-blue mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-musa-blue text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}