import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    // Validate request body
    const parseResult = Email.safeParse(body);
    if (!parseResult.success) {
      console.error('Validation error:', parseResult.error.format());
      return Response.json({
        error: parseResult.error.issues[0]?.message || 'Invalid form data'
      }, { status: 400 });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return Response.json({
        error: 'Email service is not configured'
      }, { status: 500 });
    }

    // Send email using Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [config.email],
      subject: `New Contact Form Message from ${parseResult.data.fullName}`,
      react: EmailTemplate({
        fullName: parseResult.data.fullName,
        email: parseResult.data.email,
        message: parseResult.data.message,
      }),
    });

    if (resendError) {
      console.error('Resend API error:', resendError);
      return Response.json({
        error: 'Failed to send email. Please try again later.'
      }, { status: 500 });
    }

    console.log('Email sent successfully:', resendData);
    return Response.json({ success: true });
    

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
