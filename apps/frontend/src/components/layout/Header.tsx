import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const navigationItems = {
  'Our Work': {
    items: [
      { name: 'Education', href: '/our-work/education' },
      { name: 'Climate Action', href: '/our-work/climate-action' },
      { name: 'Health', href: '/our-work/health' },
      { name: 'Youth Empowerment', href: '/our-work/youth-empowerment' },
      { name: 'Innovation', href: '/our-work/innovation' },
    ],
  },
  'Events': {
    items: [
      { name: 'Past Events', href: '/events/past-events' },
      { name: 'Upcoming Events', href: '/events/upcoming-events' },
    ],
  },
  'About Us': {
    items: [
      { name: 'Our Mission', href: '/about-us/our-mission' },
      { name: 'Our Story', href: '/about-us/our-story' },
      { name: 'Our Team', href: '/about-us/our-team' },
      { name: 'Our Partners', href: '/about-us/our-partners' },
    ],
  },
  'Contact': {
    items: [
      { name: 'Contact Us', href: '/contact-us' },
    ],
  },
  'Join Us': {
    items: [
      { name: 'Register', href: '/join-us/register' },
      { name: 'Log In', href: '/join-us/login' },
    ],
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleMouseEnter = (category: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(category);
  };

  const handleMouseLeave = (category: string) => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown((current) => (current === category ? null : current));
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-musa-blue">
              MUSA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {Object.entries(navigationItems).map(([category, { items }]) => (
              <div
                key={category}
                ref={(el) => (dropdownRefs.current[category] = el)}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={() => handleMouseLeave(category)}
              >
                <button
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-musa-blue"
                  aria-expanded={activeDropdown === category}
                >
                  {category}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {activeDropdown === category && (
                  <div 
                    className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => handleMouseEnter(category)}
                    onMouseLeave={() => handleMouseLeave(category)}
                  >
                    <div className="py-1" role="menu">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-musa-blue hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {Object.entries(navigationItems).map(([category, { items }]) => (
                <div key={category} className="space-y-1">
                  <button
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-musa-blue hover:bg-gray-100"
                    onClick={() => setActiveDropdown(activeDropdown === category ? null : category)}
                  >
                    <div className="flex items-center justify-between">
                      {category}
                      <ChevronDown
                        className={`h-4 w-4 transform ${
                          activeDropdown === category ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {activeDropdown === category && (
                    <div className="pl-4">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-musa-blue hover:bg-gray-50"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}