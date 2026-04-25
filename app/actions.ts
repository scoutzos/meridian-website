"use server";

export type FormState = { success: boolean; error?: string } | null;

export async function submitDeal(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // TODO: Wire up to an email service (Resend, Postmark, etc.) to route submissions to the team
  const data = Object.fromEntries(formData);
  console.log("Deal submission received:", data);
  return { success: true };
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // TODO: Wire up to email service
  const data = Object.fromEntries(formData);
  console.log("Contact inquiry received:", data);
  return { success: true };
}
