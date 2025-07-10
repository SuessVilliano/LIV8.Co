import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function formatContactEmail(data: any): { subject: string; html: string; text: string } {
  const subject = `New Contact Form Submission from ${data.name}`;
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
    <p><strong>Service Interest:</strong> ${data.service || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;
  const text = `
    New Contact Form Submission
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Company: ${data.company || 'N/A'}
    Service Interest: ${data.service || 'N/A'}
    Message: ${data.message}
  `;
  return { subject, html, text };
}

export function formatBookingEmail(data: any): { subject: string; html: string; text: string } {
  const subject = `New Booking Request from ${data.name}`;
  const html = `
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Preferred Date:</strong> ${data.date}</p>
    <p><strong>Preferred Time:</strong> ${data.time}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message || 'N/A'}</p>
  `;
  const text = `
    New Booking Request
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Company: ${data.company || 'N/A'}
    Service: ${data.service}
    Preferred Date: ${data.date}
    Preferred Time: ${data.time}
    Message: ${data.message || 'N/A'}
  `;
  return { subject, html, text };
}

export function formatRDCreditsEmail(data: any): { subject: string; html: string; text: string } {
  const subject = `New R&D Tax Credits Request from ${data.company}`;
  const html = `
    <h2>New R&D Tax Credits Request</h2>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Industry:</strong> ${data.industry}</p>
    <p><strong>Annual Revenue:</strong> $${data.revenue}</p>
    <p><strong>R&D Spend (2022-2024):</strong> $${data.rd_spend}</p>
    <p><strong>Contact Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>CPA Authorization:</strong> ${data.authorize ? 'Yes' : 'No'}</p>
  `;
  const text = `
    New R&D Tax Credits Request
    Company: ${data.company}
    Industry: ${data.industry}
    Annual Revenue: $${data.revenue}
    R&D Spend (2022-2024): $${data.rd_spend}
    Contact Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    CPA Authorization: ${data.authorize ? 'Yes' : 'No'}
  `;
  return { subject, html, text };
}

export function formatEventEmail(data: any): { subject: string; html: string; text: string } {
  const subject = `New Event Request: ${data.eventType} - ${data.company || data.name}`;
  const html = `
    <h2>New Event Request</h2>
    <p><strong>Event Type:</strong> ${data.eventType}</p>
    <p><strong>Event Date:</strong> ${data.eventDate}</p>
    <p><strong>Location:</strong> ${data.eventLocation}</p>
    <p><strong>Guest Count:</strong> ${data.guestCount}</p>
    <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
    <p><strong>Description:</strong></p>
    <p>${data.description || 'N/A'}</p>
  `;
  const text = `
    New Event Request
    Event Type: ${data.eventType}
    Event Date: ${data.eventDate}
    Location: ${data.eventLocation}
    Guest Count: ${data.guestCount}
    Budget: ${data.budget || 'Not specified'}
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Company: ${data.company || 'N/A'}
    Description: ${data.description || 'N/A'}
  `;
  return { subject, html, text };
}

export function formatJoinEmail(data: any): { subject: string; html: string; text: string } {
  const subject = `New Join Application from ${data.name}`;
  const html = `
    <h2>New Join Application</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Experience:</strong> ${data.experience}</p>
    <p><strong>Interest:</strong> ${data.interest}</p>
    <p><strong>Background:</strong></p>
    <p>${data.background || 'N/A'}</p>
  `;
  const text = `
    New Join Application
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Experience: ${data.experience}
    Interest: ${data.interest}
    Background: ${data.background || 'N/A'}
  `;
  return { subject, html, text };
}