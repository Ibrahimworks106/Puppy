import React from "react";
import { Button } from "@/components/ui/Button";

type Package = {
  name: string;
  emoji: string;
  description: string;
  price: number;
  originalPrice: number;
  savings: string;
  popular?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Weekend Escape",
    emoji: "🌴",
    description: "2 Nights Boarding + 1 Full Groom + Daily Trail Walk. The ultimate mini-vacation.",
    price: 185,
    originalPrice: 218,
    savings: "SAVE 15%",
  },
  {
    name: "Full Glow-Up",
    emoji: "✨",
    description: "The Island Ritual Spa + Pawdicure + De-Shedding + Professional Portraits.",
    price: 145,
    originalPrice: 180,
    savings: "SAVE 20%",
    popular: true,
  },
  {
    name: "Island VIP",
    emoji: "👑",
    description: "5 Days Boarding + All Services + Priority Booking + Daily HD Video Updates.",
    price: 495,
    originalPrice: 660,
    savings: "SAVE 25%",
  },
];

export const PackageCards = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-foam">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-ocean mb-4 font-bold">
          Curated Package Bundles
        </h2>
        <p className="text-bark/70 text-lg mb-16">
          Perfect pairings designed for maximum wagging and savings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-[40px] p-10 shadow-sm border transition-all hover:shadow-xl ${
                pkg.popular
                  ? "border-coral border-2 scale-105 z-10"
                  : "border-bark/5 hover:-translate-y-2"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coral text-foam text-[10px] font-bold tracking-widest px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl">{pkg.emoji}</span>
                <span className="bg-palm/10 text-palm text-[10px] font-bold px-3 py-1 rounded-full">
                  {pkg.savings}
                </span>
              </div>

              <h3 className="font-display text-3xl text-ocean mb-4 text-left font-bold">
                {pkg.name}
              </h3>
              <p className="text-bark/60 text-sm text-left leading-relaxed mb-10 min-h-[60px]">
                {pkg.description}
              </p>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="font-display text-5xl font-bold text-ocean">
                  ${pkg.price}
                </span>
                <span className="text-bark/30 line-through text-lg">
                  ${pkg.originalPrice}
                </span>
              </div>

              <Button
                variant={pkg.popular ? "primary" : "secondary"}
                size="lg"
                className={`w-full rounded-2xl font-bold py-6 ${
                  pkg.popular ? "bg-coral hover:bg-coral/90" : "bg-ocean hover:bg-ocean/90 text-foam"
                }`}
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
