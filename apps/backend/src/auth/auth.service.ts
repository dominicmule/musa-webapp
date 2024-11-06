import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { MailService } from '../mail/mail.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new UnauthorizedException('Email already registered');
    }
    
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    
    const createUserDto: CreateUserDto = {
      email: registerDto.email,
      password: hashedPassword,
      firstName: '',
      lastName: '',
      phone: '',
      idNumber: '',
      university: '',
      program: '',
      academicLevel: '',
      graduationYear: new Date().getFullYear(),
      constituency: '',
      ward: ''
    };

    const user = await this.usersService.create(createUserDto);

    const token = this.jwtService.sign(
      { email: user.email },
      { expiresIn: '1d' },
    );

    // Send verification email
    try {
      await this.mailService.sendVerificationEmail(user.email, token);
    } catch (error) {
      console.error('Failed to send verification email:', error);
      // Continue with registration even if email fails
    }

    return {
      message: 'Registration successful. Please check your email for verification.',
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isEmailVerified) {
      throw new UnauthorizedException('Please verify your email first');
    }

    const payload = { 
      sub: user.id, 
      email: user.email,
      role: user.role,
    };

    try {
      await this.mailService.sendWelcomeEmail(user.email, user.firstName || 'MUSA Member');
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      // Continue with login even if welcome email fails
    }

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        isApproved: user.isApproved,
      },
    };
  }

  async verifyEmail(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.usersService.findByEmail(decoded.email);
      
      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }

      await this.usersService.markEmailAsVerified(user.id);
      return { message: 'Email verified successfully' };
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}