import { useState, useEffect } from 'react';
import { constituencies } from '../../types/registration';

interface DetailedRegistrationFormProps {
  email: string;
  onSubmit: (data: FormData) => void;
}

function DetailedRegistrationForm({ email, onSubmit }: DetailedRegistrationFormProps) {
  const [selectedConstituency, setSelectedConstituency] = useState('');
  const [wards, setWards] = useState<string[]>([]);
  const [phoneError, setPhoneError] = useState('');
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from(
    { length: 10 },
    (_, i) => currentYear + i
  );

  useEffect(() => {
    if (selectedConstituency) {
      setWards(constituencies[selectedConstituency] || []);
    }
  }, [selectedConstituency]);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+254[17]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Phone number must be in the format +254XXXXXXXXX');
      return false;
    }
    setPhoneError('');
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Registration</h2>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const phone = formData.get('phone') as string;
        
        if (!validatePhone(phone)) {
          return;
        }
        
        onSubmit(formData);
      }} className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-600"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+254XXXXXXXXX"
              onChange={(e) => {
                let value = e.target.value;
                if (value && !value.startsWith('+254')) {
                  if (value.startsWith('0')) {
                    value = value.substring(1);
                  }
                  value = '+254' + value;
                }
                e.target.value = value;
                validatePhone(value);
              }}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue ${
                phoneError ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {phoneError && (
              <p className="mt-1 text-sm text-red-600">{phoneError}</p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Academic Information</h3>
          
          <div>
            <label htmlFor="university" className="block text-sm font-medium text-gray-700">
              University/College
            </label>
            <input
              type="text"
              id="university"
              name="university"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">
              Program/Course
            </label>
            <input
              type="text"
              id="program"
              name="program"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            />
          </div>

          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">
              Academic Level
            </label>
            <select
              id="level"
              name="level"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            >
              <option value="">Select level</option>
              <option value="Certificate">Certificate</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Masters">Masters</option>
              <option value="Doctorate">Doctorate</option>
            </select>
          </div>

          <div>
            <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
              Expected Graduation Year
            </label>
            <select
              id="graduationYear"
              name="graduationYear"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            >
              <option value="">Select year</option>
              {graduationYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Location Information</h3>
          
          <div>
            <label htmlFor="constituency" className="block text-sm font-medium text-gray-700">
              Constituency
            </label>
            <select
              id="constituency"
              name="constituency"
              required
              value={selectedConstituency}
              onChange={(e) => setSelectedConstituency(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            >
              <option value="">Select constituency</option>
              {Object.keys(constituencies).map((constituency) => (
                <option key={constituency} value={constituency}>
                  {constituency}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ward" className="block text-sm font-medium text-gray-700">
              Ward
            </label>
            <select
              id="ward"
              name="ward"
              required
              disabled={!selectedConstituency}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            >
              <option value="">Select ward</option>
              {wards.map((ward) => (
                <option key={ward} value={ward}>
                  {ward}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Document Upload</h3>
          
          <div>
            <label htmlFor="residencyProof" className="block text-sm font-medium text-gray-700">
              Proof of Residency
            </label>
            <input
              type="file"
              id="residencyProof"
              name="residencyProof"
              required
              accept=".pdf,.jpg,.jpeg,.png"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-musa-blue focus:border-musa-blue"
            />
            <p className="mt-1 text-sm text-gray-500">
              Upload a clear photo/scan of your ID, student ID, or utility bill (PDF, JPG, PNG)
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-musa-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-musa-blue"
        >
          Complete Registration
        </button>
      </form>
    </div>
  );
}

export default DetailedRegistrationForm;