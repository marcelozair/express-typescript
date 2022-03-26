import Mailgun from 'mailgun-js';

const API_KEY = process.env.API_KEY_MAILGUN || '';
const DOMAIN = process.env.DOMAIN_MAILGUN || '';

const sgMail = Mailgun({ apiKey: API_KEY, domain: DOMAIN });

const mailgun = {
  forgotPassowrd: (email: string) => {
    const emailData = {
      from: '<Forgot Password>',
      to: email,
      subject: 'Hello',
    };
  },
};

export default mailgun;