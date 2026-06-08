"use server";
// actions/contact.ts

import { z } from "zod";
import { sendContactEmail } from "@/lib/resend";
import type { ContactFormResponse } from "@/types";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email:    z.string().email("Please enter a valid email address"),
  phone:    z.string().optional(),
  company:  z.string().optional(),
  service:  z.string().min(1, "Please select a service"),
  details:  z.string().min(20, "Please provide more detail (at least 20 characters)"),
});

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
  const raw = {
    fullName: formData.get("fullName") as string,
    email:    formData.get("email")    as string,
    phone:    (formData.get("phone")   as string) || undefined,
    company:  (formData.get("company") as string) || undefined,
    service:  formData.get("service")  as string,
    details:  formData.get("details")  as string,
  };

  const v = schema.safeParse(raw);
  if (!v.success) {
    return { success: false, message: v.error.errors[0]?.message ?? "Invalid data" };
  }

  const result = await sendContactEmail(v.data);
  if (!result.success) {
    return { success: false, message: "Failed to send. Please try again or contact us on WhatsApp." };
  }

  return { success: true, message: "Your message was sent successfully! We'll get back to you within 24 hours." };
}
