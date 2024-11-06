import { type ReactElement } from 'react';

function PrivacyPolicy(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Create an account or register for membership</li>
              <li>Participate in events or activities</li>
              <li>Sign up for newsletters or communications</li>
              <li>Contact us for support or information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Send you important information about events and activities</li>
              <li>Improve and optimize our services</li>
              <li>Protect the security of our users and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, modification, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@musa.org
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;