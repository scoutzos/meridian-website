import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.jpeg"
      alt="Meridian Collective"
      width={260}
      height={150}
      className={className}
      priority
    />
  );
}
