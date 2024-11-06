import { Link } from 'react-router-dom';
import { type ReactElement } from 'react';

export function Home(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to MUSA</h1>
      <p className="text-xl text-center text-gray-600">
        Empowering over 4,000 students through leadership and innovation
      </p>
      
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/our-work"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-4 text-musa-blue">Our Work</h2>
          <p className="text-gray-600">
            Discover our initiatives in education, leadership, and community development.
          </p>
        </Link>

        <Link
          to="/events"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-4 text-musa-blue">Events</h2>
          <p className="text-gray-600">
            Join our upcoming events or explore our past activities.
          </p>
        </Link>

        <Link
          to="/join-us"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-4 text-musa-blue">Get Involved</h2>
          <p className="text-gray-600">
            Become a member and contribute to student leadership.
          </p>
        </Link>
      </div>
    </div>
  );
}