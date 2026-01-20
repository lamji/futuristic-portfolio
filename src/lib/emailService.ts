import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType: string;
  }>;
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ to, subject, html, attachments }: EmailData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const generateResumeEmailHTML = (email: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume Request Confirmation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 14px;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 25px;
          margin: 20px 0;
          font-weight: bold;
        }
        .highlight {
          background: #e8f4fd;
          padding: 15px;
          border-left: 4px solid #2196F3;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📄 Resume Request Received</h1>
        <p>Thank you for your interest in my professional profile!</p>
      </div>
      
      <div class="content">
        <p>Hi there,</p>
        
        <p>I've received your request for my resume. As a Mid Frontend Developer with expertise in React, Next.js, and modern web technologies, I'm excited about potential opportunities to contribute to innovative projects.</p>
        
        <div class="highlight">
          <h3>🚀 Quick Highlights:</h3>
          <ul>
            <li>5+ years of experience in web development</li>
            <li>Expert in React, TypeScript, and Next.js</li>
            <li>Specialized in payment processing and e-commerce solutions</li>
            <li>Strong background in responsive design and accessibility</li>
          </ul>
        </div>
        
        <p>My resume has been prepared for your review and includes detailed information about:</p>
        <ul>
          <li>Professional experience at Commerce Acceptance Solution, Inc.</li>
          <li>Technical skills and expertise</li>
          <li>Education background</li>
          <li>Featured projects and achievements</li>
        </ul>
        
        <p style="text-align: center;">
          <a href="https://www.jicklampago.xyz" class="button" target="_blank">
            View My Portfolio
          </a>
        </p>
        
        <p>I'm currently open to discussing new opportunities and would welcome the chance to discuss how my skills and experience align with your needs.</p>
        
        <p>Feel free to reach out directly at:</p>
        <p>
          📧 <strong>lampagojick5@gmail.com</strong><br>
          📱 <strong>09490390624</strong><br>
          💼 <strong>LinkedIn: linkedin.com/in/jick-lampago</strong>
        </p>
      </div>
      
      <div class="footer">
        <p>This email was sent in response to a resume request from: <strong>${email}</strong></p>
        <p>© 2024 Jick T. Lampago. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
};
