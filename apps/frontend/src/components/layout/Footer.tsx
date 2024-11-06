import { Link } from 'react-router-dom';

const footerSections = {
  'Get Involved': [
    { name: 'Join Us', href: '/join-us/register' },
    { name: 'Donate', href: '/donate' },
    { name: 'Partner With Us', href: '/partner-with-us' },
  ],
  'Media': [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Press Releases', href: '/press-releases' },
    { name: 'Articles', href: '/articles' },
    { name: 'Speeches', href: '/speeches' },
    { name: 'Social Media', href: '/social-media' },
  ],
  'Resources': [
    { name: 'Our Constitution', href: '/constitution' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-of-use' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white hover:text-musa-blue">
              MUSA
            </Link>
            <p className="mt-2 text-gray-400">
              Empowering students through leadership and innovation.
            </p>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <address className="text-gray-400 not-italic">
              <p>MUSA Headquarters</p>
              <p>123 Student Avenue</p>
              <p>University District</p>
              <p>Contact: info@musa.org</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MUSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}