import { type ReactElement } from 'react';

function TermsOfUse(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using MUSA's services, you accept and agree to be bound by these Terms of Use and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Membership Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Members must be currently enrolled students</li>
              <li>Members must maintain good academic standing</li>
              <li>Members must adhere to MUSA's code of conduct</li>
              <li>Membership can be revoked for violation of terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Code of Conduct</h2>
            <p className="text-gray-600 mb-4">Members are expected to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Treat all members with respect and dignity</li>
              <li>Participate in activities professionally</li>
              <li>Uphold academic integrity</li>
              <li>Represent MUSA positively</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              MUSA reserves the right to modify these terms at any time. Members will be notified of significant changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;