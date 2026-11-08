import { Resend } from "resend";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.includes("placeholder")) {
    return null;
  }
  return new Resend(apiKey);
};

export async function sendWelcomeEmail(toEmail: string, name: string): Promise<boolean> {
  const resend = getResendClient();
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Department of Mathematics <onboarding@resend.dev>";

  if (!resend) {
    console.log(`ℹ️ [Resend Simulation] Welcome email would be sent to: ${toEmail} for ${name}`);
    return true;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "Welcome to Department of Mathematics - Kurigram Government College",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #263238; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5EAF0; border-radius: 8px;">
          <h2 style="color: #164A7A; margin-top: 0;">Welcome, ${name}!</h2>
          <p>Thank you for registering on the official portal of the <strong>Department of Mathematics, Kurigram Government College</strong>.</p>
          <p>Your departmental account has been created successfully. You can now access notices, course resources, and alumni networks.</p>
          <div style="margin: 25px 0;">
            <a href="${process.env.CLIENT_URL || "http://localhost:3000"}/login" style="background-color: #2E8B57; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">Login to Your Portal</a>
          </div>
          <hr style="border: none; border-top: 1px solid #E5EAF0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #7E8B95;">Department of Mathematics, Kurigram Government College<br />College Road, Krishnapur, Kurigram-5600, Bangladesh</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend send error:", error);
      return false;
    }
    console.log(`✅ Welcome email sent via Resend (ID: ${data?.id})`);
    return true;
  } catch (err) {
    console.error("❌ Resend service exception:", err);
    return false;
  }
}

export async function sendContactNotification(
  senderName: string,
  senderEmail: string,
  subject: string,
  message: string
): Promise<boolean> {
  const resend = getResendClient();
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Department of Mathematics <onboarding@resend.dev>";
  const adminEmail = process.env.ADMIN_EMAIL || "math@kgc.ac.bd";

  if (!resend) {
    console.log(`ℹ️ [Resend Simulation] Contact inquiry from ${senderName} (${senderEmail}) regarding "${subject}": ${message}`);
    return true;
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: senderEmail,
      subject: `New Department Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #263238; max-width: 600px; padding: 20px;">
          <h3 style="color: #164A7A;">New Contact Message Received</h3>
          <p><strong>Sender:</strong> ${senderName} (${senderEmail})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #F4F8FB; padding: 15px; border-left: 4px solid #164A7A; margin: 15px 0;">
            ${message}
          </div>
        </div>
      `,
    });
    return true;
  } catch (err) {
    console.error("❌ Resend contact notification error:", err);
    return false;
  }
}
