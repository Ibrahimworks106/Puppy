"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  hoverable?: boolean;
}

export const Card = ({
  children,
  className,
  onClick,
  selected = false,
  hoverable = true,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative bg-white rounded-card shadow-card transition-all duration-300",
        hoverable && "hover:shadow-card-hover hover:scale-[1.02] cursor-pointer",
        selected && "border-2 border-ocean",
        className
      )}
    >
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-3 -right-3 bg-palm text-foam rounded-full p-1.5 shadow-md z-10"
          >
            <Check size={16} strokeWidth={3} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
