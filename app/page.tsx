import DealForm from "./components/DealForm";
import ContactForm from "./components/ContactForm";

function NavLogo() {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-brass text-[2.4rem] font-normal leading-none">
        M<span className="align-super text-[0.38em] leading-none">°</span>
      </span>
      <div className="flex flex-col justify-center">
        <p className="font-serif text-bone text-[0.95rem] leading-snug">
          <span className="font-normal">Meridian</span>{" "}
          <span className="italic">Collective</span>
        </p>
        <p className="font-sans text-fog text-[0.6rem] font-light leading-tight tracking-wide">
          A six-operator partnership · Atlanta real estate
        </p>
      </div>
    </div>
  );
}

function HeroLogo() {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-brass font-normal leading-none text-[7rem] md:text-[10rem]">
        M<span className="align-super text-[0.32em] leading-none">°</span>
      </span>
      <div className="flex items-center gap-3 mt-2">
        <span className="text-brass text-base md:text-xl leading-none">——</span>
        <span className="font-serif font-light tracking-[0.28em] text-bone text-xs md:text-sm">
          MERIDIAN COLLECTIVE
        </span>
        <span className="text-brass text-base md:text-xl leading-none">——</span>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs tracking-widest uppercase text-brass mb-4">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" aria-label="Meridian Collective home">
            <NavLogo />
          </a>
          <a
            href="#submit-a-deal"
            className="hidden md:inline-block font-sans text-xs tracking-widest uppercase text-brass border border-brass/60 px-5 py-2.5 hover:bg-brass hover:text-obsidian transition-colors"
          >
            Submit a Deal
          </a>
        </div>
      </nav>

      {/* ── 1. Hero (dark) ── */}
      <section className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <HeroLogo />

        <h1 className="font-serif font-light text-bone text-3xl md:text-5xl lg:text-6xl mt-14 max-w-2xl leading-tight">
          We buy land and build in Atlanta metro.
        </h1>

        <p className="font-sans font-light text-fog text-base md:text-lg mt-6 max-w-xl leading-relaxed">
          Meridian Collective acquires vacant land and teardown opportunities
          across the Atlanta metro area. Submit a property directly to our
          acquisition team.
        </p>

        <a
          href="#submit-a-deal"
          className="mt-10 inline-block bg-brass text-obsidian font-sans font-medium text-xs tracking-widest uppercase px-10 py-4 hover:bg-bone transition-colors"
        >
          Submit a Deal
        </a>

        <div className="mt-20 w-px h-12 bg-brass/30 mx-auto" aria-hidden="true" />
      </section>

      {/* ── 2. Our Markets (dark) ── */}
      <section
        id="our-markets"
        className="bg-obsidian py-24 md:py-32 px-6 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Where We Buy</SectionLabel>
          <h2 className="font-serif font-light text-bone text-3xl md:text-4xl mb-4">
            Our Markets
          </h2>
          <p className="font-sans font-light text-fog text-base mb-16 max-w-xl leading-relaxed">
            We&apos;re actively evaluating opportunities across the Atlanta metro.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { market: "Marietta", sub: "Cobb County" },
              { market: "Gwinnett", sub: "Gwinnett County" },
              { market: "Cobb", sub: "Cobb County" },
              { market: "Roswell", sub: "Fulton County" },
              { market: "Buckhead", sub: "Atlanta Metro" },
              { market: "Sandy Springs", sub: "Fulton County" },
              { market: "Dunwoody", sub: "DeKalb County" },
              { market: "Doraville", sub: "DeKalb County" },
              { market: "Fayetteville", sub: "Fayette County" },
            ].map(({ market, sub }) => (
              <div key={market} className="bg-obsidian p-8 md:p-10">
                <h3 className="font-serif font-light text-brass text-xl mb-1">
                  {market}
                </h3>
                <p className="font-sans font-light text-fog/60 text-xs tracking-wide">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Submit a Deal (light) ── */}
      <section
        id="submit-a-deal"
        className="bg-bone py-24 md:py-32 px-6 scroll-mt-16"
      >
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Submit a Deal</SectionLabel>
          <h2 className="font-serif font-light text-obsidian text-3xl md:text-4xl mb-4">
            Bring us your land.
          </h2>
          <p className="font-sans font-light text-ink/70 text-base mb-12 max-w-xl leading-relaxed">
            We&apos;re a developer group looking for vacant land and teardown
            opportunities across the Atlanta metro. Fill out the form below and
            our acquisitions team will review it within 72 hours.
          </p>
          <DealForm />
        </div>
      </section>

      {/* ── 4. Our Process (light) ── */}
      <section
        id="our-process"
        className="bg-bone py-24 md:py-32 px-6 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif font-light text-obsidian text-3xl md:text-4xl mb-4">
            Our Process
          </h2>
          <p className="font-sans font-light text-ink/70 text-base mb-16 max-w-xl leading-relaxed">
            We keep it straightforward. No brokers required, no lengthy back-and-forth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-fog/30">
            {[
              {
                step: "01",
                title: "Submit",
                body: "Fill out the deal form above with property details, asking price, and your contact info.",
              },
              {
                step: "02",
                title: "Review",
                body: "We evaluate every submission within 72 hours — address, lot size, zoning, and comparable sales.",
              },
              {
                step: "03",
                title: "Offer",
                body: "If the property fits our acquisition criteria, we reach out directly with an offer.",
              },
              {
                step: "04",
                title: "Close",
                body: "We close with a title company. Clean, direct, and on a defined timeline.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-bone p-8 md:p-10">
                <p className="font-serif text-brass text-4xl font-light mb-6 leading-none">
                  {step}
                </p>
                <h3 className="font-serif font-light text-obsidian text-xl mb-3">
                  {title}
                </h3>
                <p className="font-sans font-light text-ink/60 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Projects (dark) ── */}
      <section
        id="projects"
        className="bg-obsidian py-24 md:py-32 px-6 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="font-serif font-light text-bone text-3xl md:text-4xl mb-4">
            Projects
          </h2>
          <p className="font-sans font-light text-fog text-base mb-16 max-w-xl leading-relaxed">
            Completed projects will be showcased here as they deliver.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-obsidian border border-white/5 aspect-[4/3] flex flex-col items-center justify-center text-center p-8"
              >
                <span className="font-serif text-brass/30 text-4xl mb-4 leading-none">
                  M°
                </span>
                <p className="font-sans text-fog/50 text-xs tracking-widest uppercase">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. About (light) ── */}
      <section
        id="about"
        className="bg-bone py-24 md:py-32 px-6 scroll-mt-16"
      >
        <div className="max-w-3xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-serif font-light text-obsidian text-3xl md:text-4xl mb-10">
            A six-operator partnership.<br />Atlanta real estate.
          </h2>

          <div className="space-y-6 font-sans font-light text-ink/70 text-base leading-relaxed">
            <p>
              Meridian Collective is a close-knit partnership of six principals
              focused on land acquisition and residential development in the
              Atlanta metro. We pool capital, expertise, and deal flow — each
              member of the group brings a distinct discipline: acquisitions,
              construction management, finance, design, legal, and operations.
            </p>
            <p>
              We&apos;re not a fund. We&apos;re not a brokerage. We find land, plan
              projects, and build homes. Our structure lets us move decisively
              at the acquisition stage and manage projects with direct
              accountability at every step.
            </p>
            <p>
              We&apos;re based in Atlanta. We build in Atlanta. And we&apos;re actively
              looking for more land to work with.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-fog/40 grid grid-cols-3 gap-6">
            {[
              { label: "Structure", value: "Six-operator partnership" },
              { label: "Focus", value: "Land acquisition & new construction" },
              { label: "Market", value: "Atlanta metro" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-sans text-xs tracking-widest uppercase text-brass mb-2">
                  {label}
                </p>
                <p className="font-sans font-light text-obsidian text-sm">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Contact (dark) ── */}
      <section
        id="contact"
        className="bg-obsidian py-24 md:py-32 px-6 scroll-mt-16"
      >
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-serif font-light text-bone text-3xl md:text-4xl mb-4">
            Contact
          </h2>
          <p className="font-sans font-light text-fog text-base mb-2 max-w-md leading-relaxed">
            Have a question that isn&apos;t about a specific property? Reach out
            directly.
          </p>
          <p className="font-sans text-sm text-brass mb-12">
            hello@meridiancollective.com
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ── 8. Footer (dark) ── */}
      <footer className="bg-obsidian border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <NavLogo />
          <div className="text-center md:text-right">
            <p className="font-sans text-xs text-fog">
              © {new Date().getFullYear()} Meridian Collective · Atlanta, GA
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
