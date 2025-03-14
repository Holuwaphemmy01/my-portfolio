import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
   
  },
});


const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;


export async function POST(request) {
  console.log('Environment:', {
    email: process.env.EMAIL_ADDRESS ? 'exists' : 'missing',
    pass: process.env.GMAIL_APP_PASSWORD ? 'exists' : 'missing'
  });
  try {
    const payload = await request.json();
    
    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `Portfolio <${process.env.EMAIL_ADDRESS}>`, 
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message From ${payload.name}`,
      html: generateEmailTemplate(payload.name, payload.email, payload.message),
      replyTo: payload.email,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}


