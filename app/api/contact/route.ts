import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

export async function POST(req: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await req.json()
    const validatedData = contactSchema.parse(body)

    if (!process.env.EMAIL_HOST || 
        !process.env.EMAIL_PORT || 
        !process.env.EMAIL_USER || 
        !process.env.EMAIL_PASS) {
      throw new Error('Missing Nodemailer configuration')
    }

    // Create a transporter using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true, // Enable logging
      debug: true, // Enable debug output
    })

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"${validatedData.name}" <${validatedData.email}>`,
      to: 'Felix <felixashong4@gmail.com>',
      subject: validatedData.subject,
      text: validatedData.message,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007BFF;
            color: #ffffff;
            padding: 10px 0;
            text-align: center;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            color: #777777;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${validatedData.subject}</h1>
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>${validatedData.message}</p>
            <p>Best regards,<br>Your Company</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 phleodelly. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Validation failed', 
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { 
        message: 'Failed to send message',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 