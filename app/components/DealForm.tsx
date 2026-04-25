"use client";

import { useActionState } from "react";
import { submitDeal, type FormState } from "../actions";

const inputClass =
  "w-full border border-fog bg-transparent px-4 py-3 text-obsidian placeholder:text-fog focus:outline-none focus:border-brass transition-colors text-sm font-sans";

const labelClass = "block text-xs font-sans tracking-widest uppercase text-fog mb-2";

export default function DealForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitDeal,
    null
  );

  if (state?.success) {
    return (
      <div className="py-16 text-center">
        <p className="font-serif font-light text-2xl text-obsidian mb-3">
          We received your submission.
        </p>
        <p className="text-sm text-fog">
          Our team reviews every deal within 72 hours. We&apos;ll be in touch directly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="address" className={labelClass}>
          Property Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder="123 Main St"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="East Point"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="asking_price" className={labelClass}>
            Asking Price
          </label>
          <input
            id="asking_price"
            name="asking_price"
            type="text"
            required
            placeholder="$120,000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lot_size" className={labelClass}>
            Lot Size (approx.)
          </label>
          <input
            id="lot_size"
            name="lot_size"
            type="text"
            placeholder="0.25 acres / 10,000 sq ft"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="zoning" className={labelClass}>
            Zoning <span className="normal-case tracking-normal text-fog/60">(if known)</span>
          </label>
          <input
            id="zoning"
            name="zoning"
            type="text"
            placeholder="R-2, R-3, etc."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="property_type" className={labelClass}>
          Property Type
        </label>
        <select
          id="property_type"
          name="property_type"
          required
          className={`${inputClass} appearance-none cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="vacant_land">Vacant Land</option>
          <option value="teardown">Teardown</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="border-t border-fog/30 pt-6">
        <p className="text-xs text-fog tracking-widest uppercase mb-6">Your Contact Info</p>
        <div className="space-y-6">
          <div>
            <label htmlFor="contact_name" className={labelClass}>
              Your Name
            </label>
            <input
              id="contact_name"
              name="contact_name"
              type="text"
              required
              placeholder="Name or company"
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(404) 000-0000"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Anything else we should know — seller motivation, access, liens, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full md:w-auto bg-obsidian text-bone font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-brass hover:text-obsidian transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting…" : "Submit Deal"}
      </button>
    </form>
  );
}
