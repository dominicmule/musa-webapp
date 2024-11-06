export interface User {
  id?: string;
  email: string;
  emailVerified: boolean;
  role: UserRole;
}

export type UserRole = 'member' | 'admin' | 'leader';

export interface RegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  idNumber: string;
  university: string;
  program: string;
  academicLevel: AcademicLevel;
  graduationYear: number;
  constituency: string;
  ward: string;
  residencyProof?: File;
}

export type AcademicLevel = 'Certificate' | 'Diploma' | "Bachelor's" | 'Masters' | 'Doctorate';