import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VerificationEmail";
import React from "react";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "TrueFeedback message | Verification code",
      react: React.createElement(VerificationEmail, {
        username,
        otp: verifyCode,
      }),
      // react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
