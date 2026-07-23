import nodemailer from 'nodemailer';

// Configure SMTP transport with environment variables or fallback
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
  port: parseInt(process.env.SMTP_PORT || '2525', 10),
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailPayload): Promise<boolean> {
  // If SMTP configurations are missing, log email contents to console for local testing
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('--- [LOCAL DEV EMAIL LOG] ---');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`HTML: \n${html}`);
    console.log('------------------------------');
    return true;
  }

  try {
    await transporter.sendMail({
      from: '"DentalNTK Concierge" <cskh.nhakhoatre@gmail.com>',
      to,
      subject,
      html
    });
    return true;
  } catch (error) {
    console.error('Error sending email via Nodemailer:', error);
    return false;
  }
}

/**
 * Sends notifications for new leads
 */
export async function sendNewLeadNotification(lead: {
  name: string;
  email: string;
  phone: string;
  country: string;
  treatment: string;
  message?: string;
  fileUrl?: string;
}) {
  const staffHtml = `
    <h2>New Patient Lead Received</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
    <p><strong>Country:</strong> ${lead.country}</p>
    <p><strong>Treatment Interest:</strong> ${lead.treatment}</p>
    <p><strong>X-Ray File Attachment:</strong> ${lead.fileUrl ? `<a href="${lead.fileUrl}">View Patient X-Ray File</a>` : 'None uploaded'}</p>
    <p><strong>Message:</strong> ${lead.message || 'No additional message'}</p>
  `;

  const patientHtml = `
    <h2>Thank You for Reaching Out to DentalNTK</h2>
    <p>Dear ${lead.name},</p>
    <p>We have successfully received your request for a Free Dental Treatment Plan.</p>
    <p>Our Chief Clinical Director is currently reviewing your case details and X-Rays. We will compile an itemized treatment proposal and send it back to you within 24 to 48 hours.</p>
    <p>Best regards,<br><strong>DentalNTK Concierge Team</strong></p>
  `;

  // Send alert to clinic staff
  await sendEmail({
    to: 'cskh.nhakhoatre@gmail.com',
    subject: `🚨 [New Lead] ${lead.name} (${lead.country}) - ${lead.treatment}`,
    html: staffHtml
  });

  // Send confirmation to patient
  await sendEmail({
    to: lead.email,
    subject: `Your DentalNTK Free Treatment Plan Request`,
    html: patientHtml
  });
}

/**
 * Sends notifications for new appointments
 */
export async function sendNewAppointmentNotification(appointment: {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  vietnamTimeStr: string;
}) {
  const staffHtml = `
    <h2>New Appointment Booking</h2>
    <p><strong>Patient Name:</strong> ${appointment.name}</p>
    <p><strong>Email:</strong> ${appointment.email}</p>
    <p><strong>Phone:</strong> ${appointment.phone}</p>
    <p><strong>Treatment:</strong> ${appointment.treatment}</p>
    <p><strong>Clinic Appointment Time:</strong> ${appointment.vietnamTimeStr}</p>
  `;

  const patientHtml = `
    <h2>Appointment Booking Received - DentalNTK</h2>
    <p>Dear ${appointment.name},</p>
    <p>We have received your appointment request for: <strong>${appointment.treatment}</strong>.</p>
    <p><strong>Requested Clinic Local Time:</strong> ${appointment.vietnamTimeStr}</p>
    <p>Our travel coordinator will contact you shortly to confirm your booking and arrange your free VIP airport transfers.</p>
    <p>Best regards,<br><strong>DentalNTK Concierge Team</strong></p>
  `;

  // Send alert to clinic staff
  await sendEmail({
    to: 'cskh.nhakhoatre@gmail.com',
    subject: `📅 [Booking Request] ${appointment.name} - ${appointment.treatment}`,
    html: staffHtml
  });

  // Send confirmation to patient
  await sendEmail({
    to: appointment.email,
    subject: `Your DentalNTK Appointment Request`,
    html: patientHtml
  });
}
