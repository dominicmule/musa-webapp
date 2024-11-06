import { type ReactElement } from 'react';

function Constitution(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">MUSA Constitution</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article I: Organization</h2>
            <p className="text-gray-600 mb-4">
              The name of this organization shall be the Modern University Student Association (MUSA).
            </p>
            <p className="text-gray-600">
              MUSA serves as the official representative body for all students enrolled at the university.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article II: Purpose</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Represent student interests and concerns</li>
              <li>Promote academic excellence and professional development</li>
              <li>Foster leadership and innovation</li>
              <li>Enhance student life and community engagement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article III: Membership</h2>
            <p className="text-gray-600 mb-4">Membership shall consist of:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All enrolled students</li>
              <li>Elected representatives</li>
              <li>Committee members</li>
              <li>Chapter leaders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Article IV: Governance</h2>
            <p className="text-gray-600 mb-4">
              MUSA shall be governed by:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Executive Board</li>
              <li>Student Council</li>
              <li>Standing Committees</li>
              <li>Chapter Representatives</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Constitution;