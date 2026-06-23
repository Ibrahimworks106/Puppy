import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  variant?: "ocean" | "coral" | "palm" | "mist" | "bark";
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({
  variant = "ocean",
  children,
  className,
}: BadgeProps) => {
  const variants = {
    ocean: "bg-ocean text-foam",
    coral: "bg-coral text-foam",
    palm: "bg-palm text-foam",
    mist: "bg-mist text-ocean",
    bark: "bg-bark text-sand",
  };

  return (
    <span
      className={cn(
        "inline-flex px-3 py-1 rounded-pill font-mono text-[10px] font-bold uppercase tracking-[0.08em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
