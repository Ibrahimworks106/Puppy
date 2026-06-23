import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionLabelProps {
  color?: "ocean" | "coral" | "foam" | "bark";
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({
  color = "ocean",
  children,
  className,
}: SectionLabelProps) => {
  const colors = {
    ocean: "text-ocean",
    coral: "text-coral",
    foam: "text-foam",
    bark: "text-bark",
  };

  return (
    <span
      className={cn(
        "block font-mono text-[12px] font-bold uppercase tracking-[0.12em] mb-3",
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
};
