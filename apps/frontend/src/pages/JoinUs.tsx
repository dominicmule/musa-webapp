import { useState } from 'react';
import { Mail, LogIn, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { VerifyEmailPrompt } from '../components/auth/VerifyEmailPrompt';

function JoinUs() {
  const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');
  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [registeredEmail, setRegisteredEmail] = useState<string>('');
  const [showVerifyPrompt, setShowVerifyPrompt] = useState(false);
  const { registerWithEmail, signInWithEmail } = useAuth();
  const navigate = useNavigate();

  const handleInitialRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    
    try {
      await registerWithEmail(email, password);
      setRegisteredEmail(email);
      setShowVerifyPrompt(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Registration failed. Please try again.");
    }
  };

  const handleResendEmail = async () => {
    try {
      await registerWithEmail(registeredEmail, ''); // In a real app, you'd have a separate resend verification endpoint
      setSuccess('Verification email resent!');
    } catch (error) {
      setError('Failed to resend verification email. Please try again.');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    
    try {
      await signInWithEmail(email, password);
      setSuccess("Login successful!");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === 'register'
                ? 'text-musa-blue border-b-2 border-musa-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === 'login'
                ? 'text-musa-blue border-b-2 border-musa-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
        </div>

        <div className="p-6">
          {/* Error and Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              {success}
            </div>
          )}

          {/* Register Form */}
          {activeTab === 'register' && !showVerifyPrompt && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
                <p className="text-gray-600 mt-2">Join our community today</p>
              </div>

              {/* Registration Info Modal */}
              {showRegistrationInfo && (
                <div className="mb-6 p-4 bg-blue-50 rounded-md">
                  <h3 className="font-semibold text-blue-900 mb-2">Registration Process:</h3>
                  <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
                    <li>Enter your email and password</li>
                    <li>Verify your email address through the verification link</li>
                    <li>Complete your profile with required details including:
                      <ul className="list-disc list-inside ml-4 mt-1 text-blue-700">
                        <li>Personal information</li>
                        <li>Academic details</li>
                        <li>Chapter/Constituency and Ward</li>
                        <li>Proof of residency document</li>
                      </ul>
                    </li>
                    <li>Wait for admin approval</li>
                  </ol>
                  <button 
                    className="text-blue-600 text-sm mt-3 hover:text-blue-800"
                    onClick={() => setShowRegistrationInfo(false)}
                  >
                    Close
                  </button>
                </div>
              )}

              {!showRegistrationInfo && (
                <button
                  className="text-musa-blue text-sm mb-4 hover:text-blue-700"
                  onClick={() => setShowRegistrationInfo(true)}
                >
                  How does registration work?
                </button>
              )}

              {/* Email Register Form */}
              <form className="space-y-4" onSubmit={handleInitialRegistration}>
                <div>
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-musa-blue focus:border-musa-blue"
                  />
                </div>
                <div>
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      id="register-password"
                      name="password"
                      required
                      minLength={8}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-musa-blue focus:border-musa-blue pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    >
                      {showRegisterPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Password must be at least 8 characters long
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-musa-blue hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Register with Email
                </button>
              </form>
            </div>
          )}

          {/* Verify Email Prompt */}
          {activeTab === 'register' && showVerifyPrompt && (
            <VerifyEmailPrompt
              email={registeredEmail}
              onResendEmail={handleResendEmail}
            />
          )}

          {/* Login Form */}
          {activeTab === 'login' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Sign in to your account</p>
              </div>

              {/* Email Login Form */}
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-musa-blue focus:border-musa-blue"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      id="login-password"
                      name="password"
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-musa-blue focus:border-musa-blue pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-musa-blue focus:ring-musa-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-musa-blue hover:text-blue-700">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-musa-blue hover:bg-blue-700 transition-colors"
                >
                  <LogIn className="h-5 w-5" />
                  Login with Email
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JoinUs;