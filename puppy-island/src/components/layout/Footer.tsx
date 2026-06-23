import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-foam/60 hover:text-coral transition-colors text-[13px] font-medium">
      {children}
    </Link>
  </li>
);

export const Footer = () => {
  return (
    <footer className="bg-bark text-foam pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <span className="font-display text-4xl font-bold">Puppy Island</span>
            </Link>
            <p className="text-foam/50 text-sm leading-relaxed max-w-[240px]">
              Luxury care for your most loyal family members. Elevating the standard of pet boarding since 2018.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-coral transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-coral transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-coral transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-coral">Explore</h4>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/about">About</FooterLink>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-coral">Support</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-coral">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-foam/50 text-sm">Join the pack for exclusive offers and island updates.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-coral transition-all"
                />
                <Button variant="primary" size="md" className="w-full bg-coral hover:bg-coral/90 py-3 rounded-xl font-bold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-foam/20 text-[11px] font-mono tracking-widest uppercase">
            © 2026 Puppy Island Care & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
