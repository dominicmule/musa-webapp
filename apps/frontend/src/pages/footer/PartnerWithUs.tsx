import { Building2, Users, Trophy, Target, Rocket, Heart } from 'lucide-react';
import { type ReactElement } from 'react';

function PartnerWithUs(): ReactElement {
  const partnershipTypes = [
    {
      title: 'Corporate Partners',
      description: 'Connect with future leaders and support student development',
      icon: <Building2 className="h-8 w-8 text-musa-blue" />,
      benefits: [
        'Direct access to talented student pool',
        'Brand visibility at campus events',
        'Recruitment opportunities',
        'CSR initiative fulfillment',
      ],
    },
    {
      title: 'Academic Institutions',
      description: 'Collaborate on educational initiatives and research',
      icon: <Users className="h-8 w-8 text-musa-green" />,
      benefits: [
        'Joint research projects',
        'Student exchange programs',
        'Shared resources and facilities',
        'Academic conference participation',
      ],
    },
    {
      title: 'Non-Profit Organizations',
      description: 'Join forces for community impact and social change',
      icon: <Heart className="h-8 w-8 text-red-500" />,
      benefits: [
        'Volunteer coordination',
        'Joint community programs',
        'Resource sharing',
        'Impact measurement collaboration',
      ],
    },
  ];

  const successMetrics = [
    {
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      stat: '50+',
      label: 'Active Partners',
    },
    {
      icon: <Target className="h-6 w-6 text-red-500" />,
      stat: '100+',
      label: 'Joint Projects',
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-500" />,
      stat: '5000+',
      label: 'Students Impacted',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Partner With MUSA</h1>
          <p className="text-xl text-gray-600">
            Join us in shaping the future of student leadership and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{metric.stat}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">{type.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-musa-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type
                </label>
                <select
                  id="type"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
                >
                  <option>Corporate Partnership</option>
                  <option>Academic Partnership</option>
                  <option>Non-Profit Partnership</option>
                </select>
              </div>
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

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Goals
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-musa-blue focus:border-musa-blue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-musa-blue text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Partnership Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PartnerWithUs;