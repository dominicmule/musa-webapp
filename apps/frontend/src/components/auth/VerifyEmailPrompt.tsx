import { Mail } from 'lucide-react';

interface VerifyEmailPromptProps {
  email: string;
  onResendEmail: () => void;
}

export function VerifyEmailPrompt({ email, onResendEmail }: VerifyEmailPromptProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-musa-blue/10 text-musa-blue mb-6">
        <Mail className="h-8 w-8" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
      <p className="text-gray-600 mb-6">
        We've sent a verification link to <span className="font-medium">{email}</span>
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Next steps:</h3>
        <ol className="text-sm text-gray-600 text-left list-decimal list-inside space-y-2">
          <li>Open the email from MUSA</li>
          <li>Click the verification link</li>
          <li>Return here to complete your registration</li>
        </ol>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Didn't receive the email? Check your spam folder or
      </p>
      
      <button
        onClick={onResendEmail}
        className="text-musa-blue hover:text-blue-700 font-medium"
      >
        Click here to resend
      </button>
    </div>
  );
}