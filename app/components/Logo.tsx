export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 150"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Meridian Collective"
      role="img"
    >
      {/* Obsidian background — part of the logo design */}
      <rect width="260" height="150" fill="#0C0F0D" />

      {/* Bone serif M in Fraunces Light */}
      <text
        x="130"
        y="113"
        fontSize="115"
        fill="#F4EFE6"
        textAnchor="middle"
        style={{
          fontFamily:
            'var(--font-fraunces, Georgia, "Times New Roman", serif)',
          fontWeight: 300,
        }}
      >
        M
      </text>

      {/* Brass unfilled circle at top-right of M */}
      <circle cx="189" cy="32" r="8.5" fill="none" stroke="#B08954" strokeWidth="2.5" />

      {/* Brass wordmark: em-dashes framing MERIDIAN COLLECTIVE */}
      <text
        x="130"
        y="143"
        fontSize="9.5"
        fill="#B08954"
        textAnchor="middle"
        letterSpacing="2.5"
        style={{
          fontFamily:
            'var(--font-geist-sans, "Helvetica Neue", Arial, sans-serif)',
          fontWeight: 300,
        }}
      >
        {"—— MERIDIAN COLLECTIVE ——"}
      </text>
    </svg>
  );
}
