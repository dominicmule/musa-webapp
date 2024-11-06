import { CreditCard, Gift, Users } from 'lucide-react';
import { type ReactElement } from 'react';

function Donate(): ReactElement {
  const donationOptions = [
    {
      title: 'One-Time Donation',
      description: 'Make a single contribution to support our initiatives',
      icon: <CreditCard className="h-6 w-6 text-musa-blue" />,
      amounts: [10, 25, 50, 100],
    },
    {
      title: 'Monthly Giving',
      description: 'Become a sustaining supporter with monthly donations',
      icon: <Gift className="h-6 w-6 text-musa-green" />,
      amounts: [5, 15, 30, 50],
    },
    {
      title: 'Corporate Sponsorship',
      description: 'Partner with us to make a bigger impact',
      icon: <Users className="h-6 w-6 text-purple-600" />,
      custom: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600">
            Your contribution helps us empower student leaders and drive positive change
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">{option.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
              <p className="text-gray-600 mb-4">{option.description}</p>
              
              {option.amounts ? (
                <div className="grid grid-cols-2 gap-2">
                  {option.amounts.map((amount) => (
                    <button
                      key={amount}
                      className="px-4 py-2 border border-musa-blue text-musa-blue rounded hover:bg-musa-blue hover:text-white transition-colors"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              ) : (
                <button className="w-full px-4 py-2 bg-musa-blue text-white rounded hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Where Your Money Goes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-musa-blue mb-2">40%</div>
              <p className="text-gray-600">Student Programs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-musa-blue mb-2">35%</div>
              <p className="text-gray-600">Leadership Development</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-musa-blue mb-2">25%</div>
              <p className="text-gray-600">Community Initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;