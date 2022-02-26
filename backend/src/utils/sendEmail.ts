import * as nodemailer from 'nodemailer';

export async function sendEmail(to: string, html: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    port: 587,
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    debug: true,
  });

  await transporter.sendMail({
    from: '"Xonia" <xoniaapp.noreply@gmail.com>',
    to: to,
    subject: 'Change Password',
    html,
  });
}
