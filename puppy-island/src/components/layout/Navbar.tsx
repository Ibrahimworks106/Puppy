"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const PawIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5Z" />
    <path d="M8.25 13.5C9.07843 13.5 9.75 12.8284 9.75 12C9.75 11.1716 9.07843 10.5 8.25 10.5C7.42157 10.5 6.75 11.1716 6.75 12C6.75 12.8284 7.42157 13.5 8.25 13.5Z" />
    <path d="M15.75 13.5C16.5784 13.5 17.25 12.8284 17.25 12C17.25 11.1716 16.5784 10.5 15.75 10.5C14.9216 10.5 14.25 11.1716 14.25 12C14.25 12.8284 14.9216 13.5 15.75 13.5Z" />
    <path d="M12 21C14.4853 21 16.5 19.3208 16.5 17.25C16.5 15.1792 14.4853 13.5 12 13.5C9.51472 13.5 7.5 15.1792 7.5 17.25C7.5 19.3208 9.51472 21 12 21Z" />
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 h-[72px] bg-sand/85 backdrop-blur-md flex items-center px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <PawIcon className="text-bark group-hover:text-ocean transition-colors" />
          <span className="font-display text-xl font-bold text-bark">Puppy Island</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-body text-[15px] font-medium text-bark hover:text-ocean transition-colors py-1 group",
                pathname === link.href && "text-bark"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] bg-coral transition-transform origin-left scale-x-0 group-hover:scale-x-100",
                  pathname === link.href && "scale-x-100"
                )}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Button / Mobile Toggle */}
        <div className="flex-1 md:flex-none flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <Button variant="secondary" size="sm" href="/pricing">
              Book Now 🐾
            </Button>
          </div>
          <button
            className="md:hidden text-bark hover:text-ocean transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-bark text-foam flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-foam hover:text-coral transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-3xl hover:text-coral transition-colors",
                  pathname === link.href && "text-coral underline underline-offset-8 decoration-2"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Button
              variant="primary"
              size="lg"
              className="mt-4"
              href="/pricing"
              onClick={() => setIsOpen(false)}
            >
              Book Now 🐾
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
