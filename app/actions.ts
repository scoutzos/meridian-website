"use server";

import { supabase } from "@/lib/supabase";

export type FormState = { success: boolean; error?: string } | null;

export async function submitDeal(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const { error } = await supabase.from("deal_submissions").insert({
    property_address: formData.get("address") as string,
    city: formData.get("city") as string,
    asking_price: formData.get("asking_price") as string,
    lot_size: formData.get("lot_size") as string,
    zoning: formData.get("zoning") as string,
    property_type: formData.get("property_type") as string,
    name: formData.get("contact_name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    notes: formData.get("notes") as string,
  });

  if (error) {
    console.error("Deal submission error:", error);
    return { success: false, error: "Failed to submit. Please try again." };
  }

  return { success: true };
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const { error } = await supabase.from("contact_submissions").insert({
    name: formData.get("contact_name") as string,
    email: formData.get("contact_email") as string,
    message: formData.get("message") as string,
  });

  if (error) {
    console.error("Contact submission error:", error);
    return { success: false, error: "Failed to send. Please try again." };
  }

  return { success: true };
}
