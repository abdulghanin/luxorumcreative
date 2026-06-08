// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1),
  details: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: "بيانات غير صحيحة" },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(validation.data);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "فشل في الإرسال" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "تم الإرسال بنجاح" });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { success: false, message: "خطأ في الخادم" },
      { status: 500 }
    );
  }
}
