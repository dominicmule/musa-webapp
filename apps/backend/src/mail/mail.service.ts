import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import type { TemplateDelegate } from 'handlebars';
import * as Handlebars from 'handlebars';

@Injectable()
export class MailService {
  private transporter: Transporter;
  private readonly logger = new Logger(MailService.name);
  private templates: { [key: string]: TemplateDelegate } = {};

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('SMTP_HOST');
    const port = this.configService.get<number>('SMTP_PORT');
    const user = this.configService.get<string>('SMTP_USER');
    const pass = this.configService.get<string>('SMTP_PASS');

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
      debug: true,
      logger: true
    });

    // Initialize templates
    this.templates = {
      verification: Handlebars.compile(`
        <h1>Verify Your Email</h1>
        <p>Please click the link below to verify your email:</p>
        <a href="{{verificationUrl}}">Verify Email</a>
      `),
      welcome: Handlebars.compile(`
        <h1>Welcome to MUSA, {{firstName}}!</h1>
        <p>Thank you for joining our community.</p>
      `)
    };

    // Verify connection configuration
    this.verifyConnection();
  }

  private async verifyConnection() {
    try {
      const verification = await this.transporter.verify();
      this.logger.log('SMTP connection verified:', verification);
    } catch (error) {
      this.logger.error('SMTP connection failed:', error);
      throw error;
    }
  }

  async sendVerificationEmail(email: string, token: string) {
    try {
      const verificationUrl = `http://localhost:5173/verify-email?token=${token}`;
      const html = this.templates.verification({ verificationUrl, email });

      const info = await this.transporter.sendMail({
        from: '"MUSA" <no-reply@musa.org>',
        to: email,
        subject: 'Welcome to MUSA - Verify Your Email',
        html,
      });

      this.logger.log('Verification email sent:', info);
      return info;
    } catch (error) {
      this.logger.error('Failed to send verification email:', error);
      throw error;
    }
  }

  async sendWelcomeEmail(email: string, firstName: string) {
    try {
      const html = this.templates.welcome({ firstName, email });

      const info = await this.transporter.sendMail({
        from: '"MUSA" <no-reply@musa.org>',
        to: email,
        subject: 'Welcome to MUSA!',
        html,
      });

      this.logger.log('Welcome email sent:', info);
      return info;
    } catch (error) {
      this.logger.error('Failed to send welcome email:', error);
      throw error;
    }
  }
}