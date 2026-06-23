"use client";

import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "foam";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
}

export const Button = ({
  variant = "primary",
  size = "lg",
  children,
  onClick,
  disabled,
  className,
  type = "button",
  href,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-pill font-body font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.02]";
  
  const variants = {
    primary: "bg-coral text-foam hover:bg-[#D1523B]",
    secondary: "bg-ocean text-foam hover:bg-[#145358]",
    ghost: "border-2 border-ocean text-ocean bg-transparent hover:bg-ocean/5",
    foam: "bg-foam text-ocean hover:bg-mist",
  };

  const sizes = {
    sm: "h-[40px] px-6 text-sm",
    md: "h-[48px] px-8 text-base",
    lg: "h-[56px] px-10 text-lg",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};
