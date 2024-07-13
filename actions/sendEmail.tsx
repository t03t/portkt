"use server"; 

import { Resend } from "resend"; 
import { getErrorMessage, validateFormData } from "@/lib/utils";
import { EmailForm } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    // Validate form data and send email using Resend API
    const validationResult = validateFormData(formData);

    if (validationResult.error) {
        console.log(validationResult.error);
    }
    const { senderEmail, message, senderName } = validationResult;
    
    try {
        await resend.emails.send({
        from: "Portfolio Visitor: <onboarding@resend.dev>",
        to: "tirmazi@brandeis.edu",
        subject: "Contact Form Received",
        reply_to: senderEmail,
        react: <EmailForm message={message} senderEmail={senderEmail} senderName={senderName} />,
        });
    } catch (error: any) {
        return {
            error: getErrorMessage(error),
        };
    }
    return {
        data: "Email sent successfully",
    }
}
