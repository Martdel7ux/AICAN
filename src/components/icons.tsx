import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShieldIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 9-4.1-1.6-7-4.8-7-9V6l7-3z" />
      <path d="M9.2 12l1.9 1.9 3.7-3.8" />
    </svg>
  );
}

export function StackIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="M4 12l8 4.5 8-4.5" />
      <path d="M4 16.5l8 4.5 8-4.5" />
    </svg>
  );
}

export function BlueprintIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9h17M9 9v10.5M9 9V4.5" />
      <circle cx="14.5" cy="14" r="1.6" />
    </svg>
  );
}

export function NetworkIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M12 7.2v4.3M12 11.5L6.4 16.4M12 11.5l5.6 4.9" />
    </svg>
  );
}

export function LockIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V8a4 4 0 018 0v2.5" />
      <path d="M12 14.5v2" />
    </svg>
  );
}

export function ChipIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" />
    </svg>
  );
}

export function GatewayIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 20V8.5L12 4l8 4.5V20" />
      <path d="M4 20h16M9.5 20v-6h5v6" />
    </svg>
  );
}

export function ModuleIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.4" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.4" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.4" />
      <path d="M13.5 17h7M17 13.5v7" />
    </svg>
  );
}

export function PipelineIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="5.5" cy="18" r="2" />
      <circle cx="18.5" cy="12" r="2" />
      <path d="M5.5 8v8M7.5 6h6a3 3 0 013 3v.8M7.5 18h6a3 3 0 003-3v-.8" />
    </svg>
  );
}

export function DriftIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3.5 7.5h11M3.5 12h8M3.5 16.5h13" />
      <path d="M17 6l3 2.2-3 2.2" />
    </svg>
  );
}

export function ArrowRight(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={16} height={16} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} {...p}>
      <path d="M5 12.5l4 4 10-10.5" />
    </svg>
  );
}

export function CrossIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} {...p}>
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  );
}
