"use client";
import { cn } from "@/lib/utils";

interface AnimatedPalmTreeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  colorVariant?: "green" | "dark-green" | "tropical" | "palm";
}

export const AnimatedPalmTree = ({
  className,
  size = "md",
  colorVariant = "tropical",
}: AnimatedPalmTreeProps) => {
  const sizeMap = { sm: 80, md: 160, lg: 240 };
  const h = sizeMap[size];

  const trunkColor = "#78350F";
  const frondColors = {
    green: ["#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    "dark-green": ["#15803d", "#166534", "#14532d", "#052e16", "#022c22"],
    tropical: ["#10B981", "#059669", "#047857", "#065F46", "#064E3B"],
    palm: ["#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
  };
  const fronds = frondColors[colorVariant];

  return (
    <div
      className={cn("relative", className)}
      style={{ width: h, height: h * 1.4, transformOrigin: "bottom center" }}
    >
      <svg
        viewBox="0 0 100 140"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "sway 4s ease-in-out infinite" }}
      >
        {/* Trunk - curved path */}
        <path
          d="M48 140 Q45 100 42 80 Q40 60 50 40"
          stroke={trunkColor}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Bark texture lines */}
        <path d="M46 130 Q44 125 43 120" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M47 115 Q45 110 44 105" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M46 100 Q44 95 43 90" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M45 85 Q44 80 45 75" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Coconut */}
        <circle cx="48" cy="42" r="4" fill="#92400E" />
        <circle cx="54" cy="44" r="3.5" fill="#78350F" />

        {/* Frond 1 - top left */}
        <path
          d="M50 38 Q30 20 10 25 Q25 18 50 35"
          fill={fronds[0]}
          style={{ animation: "sway 3.5s ease-in-out infinite", animationDelay: "0s", transformOrigin: "50px 38px" }}
        />
        {/* Frond 2 - top right */}
        <path
          d="M50 38 Q70 15 95 20 Q72 12 50 35"
          fill={fronds[1]}
          style={{ animation: "sway 4s ease-in-out infinite", animationDelay: "0.3s", transformOrigin: "50px 38px" }}
        />
        {/* Frond 3 - left */}
        <path
          d="M48 42 Q20 30 5 45 Q22 28 48 39"
          fill={fronds[2]}
          style={{ animation: "sway 3.8s ease-in-out infinite", animationDelay: "0.6s", transformOrigin: "48px 42px" }}
        />
        {/* Frond 4 - right */}
        <path
          d="M52 42 Q80 28 98 42 Q78 25 52 39"
          fill={fronds[3]}
          style={{ animation: "sway 4.2s ease-in-out infinite", animationDelay: "0.9s", transformOrigin: "52px 42px" }}
        />
        {/* Frond 5 - top center droop */}
        <path
          d="M50 36 Q50 15 60 5 Q52 18 50 34"
          fill={fronds[4]}
          style={{ animation: "sway 3.2s ease-in-out infinite", animationDelay: "0.4s", transformOrigin: "50px 36px" }}
        />
        {/* Frond 6 - back left */}
        <path
          d="M48 40 Q25 10 8 15 Q28 8 48 37"
          fill={fronds[0]}
          opacity="0.7"
          style={{ animation: "sway 4.5s ease-in-out infinite", animationDelay: "1.2s", transformOrigin: "48px 40px" }}
        />
      </svg>
    </div>
  );
};