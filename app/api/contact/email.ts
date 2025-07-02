import * as nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

// Add proper type imports for Node.js
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER?: string
      EMAIL_PASSWORD?: string
    }
  }
}

interface EmailError {
  code: string
  command: string
  response: string
  responseCode: number
  message: string
}

let transporter: nodemailer.Transporter | null = null

const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASSWORD

  console.log('[Email Debug] Creating transporter with:', { emailUser, hasPassword: !!emailPass })

  if (!emailUser || !emailPass) {
    console.error('[Email Debug] Missing EMAIL_USER or EMAIL_PASSWORD')
    throw new Error('Email configuration is missing. Please check EMAIL_USER and EMAIL_PASSWORD environment variables.')
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })
    console.log('[Email Debug] Transporter created successfully')
    return transporter
  } catch (err) {
    console.error('[Email Debug] Error creating transporter:', err)
    throw err
  }
}

const getTransporter = () => {
  if (!transporter) {
    transporter = createTransporter()
  }
  return transporter
}

const validateEmail = (email: string): boolean => {
  return Boolean(email && email.includes('@') && email.includes('.'))
}

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

const logoUrl = 'https://i.ibb.co/276t0YX8/photo-2024-07-13-12-08-22.jpg'

const emailTemplate = (
  data: EmailData,
  isReply: boolean = false
) => {
  const { name, email, subject, message } = data
  const year = new Date().getFullYear()
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>${isReply ? 'Reply from Delly Knows Tech' : 'New Contact Form Message'}</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet">
        <style>
          body { background: #181a20; margin: 0; padding: 0; font-family: 'Poppins', 'Segoe UI', Arial, sans-serif; color: #fff; }
          .email-wrapper { max-width: 600px; margin: 40px auto; background: rgba(35,38,58,0.85); border-radius: 24px; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(255,255,255,0.05) inset; border: 1.5px solid rgba(255,255,255,0.08); overflow: hidden; backdrop-filter: blur(8px); }
          .header { background: linear-gradient(90deg, #ff00cc 0%, #333399 100%); padding: 36px 24px 16px 24px; text-align: center; position: relative; }
          .header .neon-ring { width: 110px; height: 110px; margin: 0 auto 10px auto; border-radius: 50%; background: radial-gradient(circle, #ff00cc 60%, #00d2ff 100%, transparent 100%); box-shadow: 0 0 40px 10px #ff00cc88, 0 0 80px 20px #00d2ff55; display: flex; align-items: center; justify-content: center; }
          .header img { width: 90px; height: 90px; border-radius: 50%; border: 3px solid #fff; background: #fff; object-fit: cover; box-shadow: 0 0 24px 0 #ff00cc88, 0 0 32px 0 #00d2ff55; }
          .header-title { font-size: 2rem; font-weight: 700; letter-spacing: 2px; margin: 10px 0 0 0; color: #fff; text-shadow: 0 2px 8px #00d2ff, 0 0 16px #ff00cc; }
          .header-subtitle { font-size: 1.1rem; color: #b2b8d6; margin-top: 4px; margin-bottom: 0; font-weight: 500; letter-spacing: 1px; }
          .content { padding: 32px 24px 16px 24px; background: rgba(30,32,48,0.85); }
          .content .greeting { font-size: 1.1rem; margin-bottom: 18px; color: #fff; font-weight: 600; }
          .content .message-container { background: rgba(255,255,255,0.06); border-radius: 16px; padding: 20px 18px 16px 18px; box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08); margin-bottom: 18px; border: 1px solid rgba(255,255,255,0.07); }
          .content .message-label { font-weight: 700; color: #00d2ff; font-size: 1rem; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
          .content .message-content { font-size: 1.08rem; line-height: 1.7; color: #eaeaea; white-space: pre-line; }
          .content .info { background: rgba(255,255,255,0.03); border-radius: 12px; padding: 14px 14px 10px 14px; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04); border: 1px solid rgba(255,255,255,0.04); margin-top: 18px; font-size: 1.05rem; color: #fff; font-weight: 500; }
          .footer { background: rgba(30,32,48,0.92); color: #b2b8d6; text-align: center; padding: 18px 0 16px 0; font-size: 0.98rem; border-radius: 0 0 24px 24px; }
          @media (max-width: 600px) { .email-wrapper { border-radius: 0 !important; max-width: 98vw !important; } .content { padding: 16px 4vw 8px 4vw !important; } .header { padding: 24px 4vw 8px 4vw !important; } }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <div class="neon-ring">
              <img src="${logoUrl}" alt="Delly Knows Tech Logo" />
            </div>
            <div class="header-title">DELLY KNOWS TECH</div>
            <div class="header-subtitle">Tech Insights Made Simple</div>
          </div>
          <div class="content">
            <div class="greeting">${isReply ? `Hi ${name},` : 'You have a new contact form message!'}</div>
            <div class="message-container">
              <div class="message-label">Subject:</div>
              <div class="message-content">${subject.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
              <div class="message-label" style="margin-top:16px;">Message:</div>
              <div class="message-content">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </div>
            <div class="info">
              <strong>From:</strong> ${name} &lt;${email}&gt;
            </div>
          </div>
          <div class="footer">
            &copy; ${year} Delly Knows Tech. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `
}

const replyTemplate = (
  data: { name: string; email: string }
) => {
  const year = new Date().getFullYear()
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Thank you for contacting Delly Knows Tech</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet">
        <style>
          body { background: #181a20; margin: 0; padding: 0; font-family: 'Poppins', 'Segoe UI', Arial, sans-serif; color: #fff; }
          .email-wrapper { max-width: 600px; margin: 40px auto; background: rgba(35,38,58,0.85); border-radius: 24px; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(255,255,255,0.05) inset; border: 1.5px solid rgba(255,255,255,0.08); overflow: hidden; backdrop-filter: blur(8px); }
          .header { background: linear-gradient(90deg, #ff00cc 0%, #333399 100%); padding: 36px 24px 16px 24px; text-align: center; position: relative; }
          .header .neon-ring { width: 110px; height: 110px; margin: 0 auto 10px auto; border-radius: 50%; background: radial-gradient(circle, #ff00cc 60%, #00d2ff 100%, transparent 100%); box-shadow: 0 0 40px 10px #ff00cc88, 0 0 80px 20px #00d2ff55; display: flex; align-items: center; justify-content: center; }
          .header img { width: 90px; height: 90px; border-radius: 50%; border: 3px solid #fff; background: #fff; object-fit: cover; box-shadow: 0 0 24px 0 #ff00cc88, 0 0 32px 0 #00d2ff55; }
          .header-title { font-size: 2rem; font-weight: 700; letter-spacing: 2px; margin: 10px 0 0 0; color: #fff; text-shadow: 0 2px 8px #00d2ff, 0 0 16px #ff00cc; }
          .header-subtitle { font-size: 1.1rem; color: #b2b8d6; margin-top: 4px; margin-bottom: 0; font-weight: 500; letter-spacing: 1px; }
          .content { padding: 32px 24px 16px 24px; background: rgba(30,32,48,0.85); }
          .content .greeting { font-size: 1.1rem; margin-bottom: 18px; color: #fff; font-weight: 600; }
          .content .message-container { background: rgba(255,255,255,0.06); border-radius: 16px; padding: 20px 18px 16px 18px; box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08); margin-bottom: 18px; border: 1px solid rgba(255,255,255,0.07); }
          .content .message-label { font-weight: 700; color: #00d2ff; font-size: 1rem; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
          .content .message-content { font-size: 1.08rem; line-height: 1.7; color: #eaeaea; white-space: pre-line; }
          .footer { background: rgba(30,32,48,0.92); color: #b2b8d6; text-align: center; padding: 18px 0 16px 0; font-size: 0.98rem; border-radius: 0 0 24px 24px; }
          @media (max-width: 600px) { .email-wrapper { border-radius: 0 !important; max-width: 98vw !important; } .content { padding: 16px 4vw 8px 4vw !important; } .header { padding: 24px 4vw 8px 4vw !important; } }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <div class="neon-ring">
              <img src="${logoUrl}" alt="Delly Knows Tech Logo" />
            </div>
            <div class="header-title">DELLY KNOWS TECH</div>
            <div class="header-subtitle">Tech Insights Made Simple</div>
          </div>
          <div class="content">
            <div class="greeting">Hi ${data.name},</div>
            <div class="message-container">
              <div class="message-label">Thank you for reaching out!</div>
              <div class="message-content">
                I have received your message and will get back to you as soon as possible.<br><br>
                In the meantime, feel free to explore more tech insights at my YOUTUBE CHANNEL <a href="https://www.youtube.com/@dellyknowstechh" style="color:#00d2ff;text-decoration:underline;">Delly Knows Tech</a>.<br><br>
                Best regards,<br>
                Felix Ashong<br>
                Delly Knows Tech
              </div>
            </div>
          </div>
          <div class="footer">
            &copy; ${year} Delly Knows Tech. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `
}

export const sendTestEmail = async () => {
  try {
    const transporter = getTransporter()
    const adminEmail = process.env.EMAIL_USER

    if (!adminEmail) {
      throw new Error('Admin email not configured')
    }

    console.log('Sending test email to:', adminEmail)

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: adminEmail
      },
      to: adminEmail,
      subject: "Test Email from Portfolio",
      html: emailTemplate({
        name: "Test User",
        email: adminEmail,
        subject: "Test Email",
        message: "This is a test email from your portfolio contact form. If you're receiving this, the email service is working correctly."
      }),
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending test email:", error)
    const emailError = error as EmailError
    throw new Error(
      `Failed to send test email: ${emailError.response || emailError.message}`
    )
  }
}

export const sendContactEmail = async (data: EmailData) => {
  try {
    const transporter = getTransporter()
    // 1. Send admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: data.subject,
      html: emailTemplate(data),
    }
    console.log('[Email Debug] Sending admin notification:', adminMailOptions)
    await transporter.sendMail(adminMailOptions)

    // 2. Send automated feedback to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank you for contacting Delly Knows Tech!',
      html: replyTemplate({ name: data.name, email: data.email }),
    }
    console.log('[Email Debug] Sending user feedback:', userMailOptions)
    await transporter.sendMail(userMailOptions)

    return { success: true }
  } catch (err) {
    console.error('[Email Debug] Error sending email:', err)
    throw new Error('Failed to send email: ' + (err instanceof Error ? err.message : String(err)))
  }
} 