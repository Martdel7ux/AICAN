import Link from "next/link";

export function Wordmark({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="AICAN home"
      className={`group inline-flex items-baseline gap-[1px] ${className}`}
    >
      <span
        className={`font-serif text-xl font-medium tracking-tight ${
          dark ? "text-canvas" : "text-ink"
        }`}
      >
        AICAN
      </span>
      <span className="font-mono text-[10px] align-super text-accent">®</span>
    </Link>
  );
}
