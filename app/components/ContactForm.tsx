"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "../actions";

const inputClass =
  "w-full border border-fog/40 bg-transparent px-4 py-3 text-bone placeholder:text-fog/50 focus:outline-none focus:border-brass transition-colors text-sm font-sans";

const labelClass = "block text-xs font-sans tracking-widest uppercase text-fog mb-2";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContact,
    null
  );

  if (state?.success) {
    return (
      <div className="py-12 text-center">
        <p className="font-serif font-light text-2xl text-bone mb-3">
          Message received.
        </p>
        <p className="text-sm text-fog">We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="contact_name" className={labelClass}>
          Name
        </label>
        <input
          id="contact_name"
          name="contact_name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact_email" className={labelClass}>
          Email
        </label>
        <input
          id="contact_email"
          name="contact_email"
          type="email"
          required
          placeholder="you@email.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full md:w-auto border border-brass text-brass font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-brass hover:text-obsidian transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
