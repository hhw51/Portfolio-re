import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465 (SSL), false for 587 (TLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_KEY,
  },
  // Keeps connection sockets stable inside stateless serverless runtimes
  pool: true, 
  maxConnections: 3,
});

const SENDER_EMAIL = '"Haris Wyne" <haris.wyne10@gmail.com>';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, services, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const formattedServices = services && services.length > 0 ? services.join(", ") : "None selected";

    // 1. Send beautiful, responsive confirmation email to the lead
    const userMailOptions = {
        from: SENDER_EMAIL,
        to: email,
        subject: "We've received your request | Haris Wyne",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inquiry Received</title>
            <style>
              /* Responsive Overrides */
              @media only screen and (max-width: 600px) {
                .email-container { padding: 20px !important; width: 100% !important; }
                .header-title { font-size: 22px !important; }
                .body-text { font-size: 15px !important; }
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
            
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; padding: 40px 10px;">
              <tr>
                <td align="center">
                  
                  <!-- Main Wrapper Card -->
                  <table class="email-container" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px; text-align: left; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                    
                    <!-- Logo / Branding Header -->
                    <tr>
                      <td style="padding-bottom: 24px;">
                        <span style="font-size: 20px; font-weight: 800; tracking: 0.05em; color: #0f172a; letter-spacing: 2px;">HARIS WYNE</span>
                      </td>
                    </tr>
  
                    <!-- Top Accent Bar -->
                    <tr>
                      <td>
                        <div style="height: 4px; width: 100%; background: linear-gradient(90deg, #00FFC6 0%, #00b3ff 100%); border-radius: 2px; margin-bottom: 32px;"></div>
                      </td>
                    </tr>
  
                    <!-- Greeting & Core Message -->
                    <tr>
                      <td>
                        <h1 class="header-title" style="color: #0f172a; font-size: 26px; font-weight: 700; margin: 0 0 16px 0; line-height: 1.2;">Your message has been received. Let's build.</h1>
                        <p class="body-text" style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">Hi ${name},</p>
                        <p class="body-text" style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">Thank you for getting in touch with us. This is an automated confirmation to let you know that your email has been successfully received and read by our team.</p>
                        <p class="body-text" style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">We are currently reviewing your project details and requirements. A specialist from our team will reach out to you as soon as possible to discuss the next steps.</p>
                      </td>
                    </tr>
  
                    <!-- Blockquote of their message for reference -->
                    <tr>
                      <td style="padding-bottom: 32px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; border-left: 4px solid #00FFC6; border-radius: 4px 8px 8px 4px;">
                          <tr>
                            <td style="padding: 16px 20px;">
                              <span style="display: block; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 6px; letter-spacing: 0.5px;">Your Message Copy</span>
                              <p style="margin: 0; font-size: 14px; font-style: italic; color: #334155; line-height: 1.5;">"${message}"</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Divider Line -->
                    <tr>
                      <td style="border-top: 1px solid #e2e8f0; padding-top: 24px;">
                        <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Best regards,</p>
                        <p style="margin: 4px 0 0 0; font-size: 14px; font-weight: 600; color: #0f172a;">Haris Wyne</p>
                      </td>
                    </tr>
  
                  </table>
                  
                  <!-- Simple Footer -->
                  <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="text-align: center; margin-top: 20px;">
                    <tr>
                      <td>
                        <p style="font-size: 12px; color: #94a3b8; margin: 0;">&copy; ${new Date().getFullYear()} Haris Wyne. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
  
                </td>
              </tr>
            </table>
  
          </body>
          </html>
        `,
      };
  

    // 2. Send detailed summary notification email to company owner
    const ownerMailOptions = {
      from: SENDER_EMAIL,
      to: process.env.OWNER_GMAIL_EMAIL, 
      subject: `New Project Inquiry: ${name} (${company || "No Company Specified"})`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background-color: #f4f4f5; max-width: 650px; margin: auto;">
          <div style="background: white; padding: 30px; border-radius: 8px; border: 1px solid #e4e4e7;">
            <h2 style="color: #111827; margin-top: 0; font-size: 20px;">New Project Brief Incoming</h2>
            <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 16px 0;" />
            <p style="font-size: 15px; margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 15px; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 15px; margin: 8px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p style="font-size: 15px; margin: 8px 0;"><strong>Services:</strong> ${formattedServices}</p>
            <p style="font-size: 15px; margin: 8px 0;"><strong>Budget:</strong> ${budget || "Not provided"}</p>
            <p style="font-size: 15px; margin: 8px 0;"><strong>Timeline:</strong> ${timeline || "Not provided"}</p>
            <p style="font-size: 15px; margin: 16px 0 8px 0;"><strong>Message:</strong></p>
            <div style="background: #f8fafc; padding: 12px 16px; border-radius: 6px; font-size: 14px; color: #334155; border: 1px solid #e2e8f0;">${message}</div>
          </div>
        </div>
      `,
    };

    // Execute both email operations concurrently and wait for completion
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(ownerMailOptions)
    ]);

    return NextResponse.json({ message: "Emails routed successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Brevo SMTP Route Crash Logged:", error);
    return NextResponse.json({ 
      error: "Internal mail relay failure", 
      details: error.message 
    }, { status: 500 });
  }
}
