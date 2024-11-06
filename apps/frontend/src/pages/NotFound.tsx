import { Link } from 'react-router-dom';
import { type ReactElement } from 'react';

export function NotFound(): ReactElement {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Hey, you are here, </h1>
      <p className="text-gray-600 mb-8">but the page you are looking for is not.</p>
      <p className="text-gray-600 mb-8">Good thing, we're here too and we'll help you get back to the homepage</p>
      <Link
        to="/"
        className="px-6 py-3 bg-musa-blue text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
      <p className="text-gray-600 mb-8">Don't worry we've all been there, or rather here haha.</p>
    </div>
  );
}