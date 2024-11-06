import type { RegistrationData } from '../types/auth';

export async function registerWithEmail(email: string, password: string) {
  // TODO: Implement with your backend
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
}

export async function loginWithEmail(email: string, password: string) {
  // TODO: Implement with your backend
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}

export async function completeRegistration(userId: string, data: RegistrationData) {
  // TODO: Implement with your backend
  const response = await fetch(`/api/auth/complete-registration/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to complete registration');
  }

  return response.json();
}