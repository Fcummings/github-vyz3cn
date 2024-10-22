import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

export const sendWelcomeEmail = functions.firestore
  .document('waitlist/{userId}')
  .onCreate(async (snap, context) => {
    const userEmail = snap.data().email;

    const mailOptions = {
      from: 'CLKK Team <your-email@gmail.com>',
      to: userEmail,
      subject: 'Welcome to CLKK Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: #3B82F6;">Welcome to CLKK!</h1>
          <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
          <p>We look forward to revolutionizing nightlife payments with you.</p>
          <p>Stay tuned for updates and early access opportunities.</p>
          <div style="margin-top: 20px; padding: 10px; background: linear-gradient(to right, #3B82F6, #8B5CF6); color: white; display: inline-block; border-radius: 5px;">
            Get ready to experience: Tap. Pay. Party.
          </div>
          <p style="margin-top: 20px;">Best regards,<br>The CLKK Team</p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Welcome email sent successfully');
    } catch (error) {
      console.error('Error sending welcome email:', error);
    }
  });