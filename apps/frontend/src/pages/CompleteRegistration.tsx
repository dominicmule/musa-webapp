import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DetailedRegistrationForm from '../components/registration/DetailedRegistrationForm';

function CompleteRegistration() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    try {
      await fetch('/api/registration/complete', {
        method: 'POST',
        body: formData
      });
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to complete registration. Please try again.');
      console.error('Registration error:', error);
    }
  };

  if (!currentUser || !currentUser.emailVerified) {
    navigate('/join-us');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {error && (
        <div className="max-w-2xl mx-auto mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <DetailedRegistrationForm
        email={currentUser.email || ''}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default CompleteRegistration;