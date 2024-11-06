import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail } from 'lucide-react';

function VerifyEmail() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/join-us');
      return;
    }

    if (currentUser.emailVerified) {
      navigate('/complete-registration');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentUser, navigate]);

  const handleResendEmail = async () => {
    if (!currentUser || !canResend) return;

    try {
      await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: currentUser.email }),
      });
      setTimeLeft(60);
      setCanResend(false);
    } catch (error) {
      console.error('Error sending verification email:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Mail className="h-12 w-12 text-musa-blue" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify your email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We've sent a verification link to{' '}
          <span className="font-medium text-musa-blue">{currentUser?.email}</span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="text-sm text-gray-600">
              <p className="mb-4">
                Please check your email and click the verification link to continue with your
                registration.
              </p>
              <p>
                If you don't see the email, check your spam folder or request a new
                verification link.
              </p>
            </div>

            <button
              onClick={handleResendEmail}
              disabled={!canResend}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                canResend
                  ? 'bg-musa-blue hover:bg-blue-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {canResend
                ? 'Resend verification email'
                : `Resend available in ${timeLeft}s`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;