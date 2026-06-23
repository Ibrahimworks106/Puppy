import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PricingTabs } from "@/components/pricing/PricingTabs";
import { PackageCards } from "@/components/pricing/PackageCards";
import { PolicySection } from "@/components/pricing/PolicySection";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-foam pt-32 pb-20 px-6 md:px-12 text-center overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionLabel color="ocean" className="text-center mb-6">
            PREMIUM CARE & PRICING
          </SectionLabel>
          <h1 className="font-display text-5xl md:text-8xl text-ocean mb-8 leading-tight font-bold">
            No Surprises.<br />Just Happy Pups.
          </h1>
          <p className="font-body text-xl text-bark/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transparent, all-inclusive pricing for our boutique island resort services. From luxury villas to rejuvenating spa baths, we believe in providing only the best for your furry family.
          </p>
        </div>
        
        {/* Subtle Decorative Elements (if any from image) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          {/* Add tropical decorative SVG if needed */}
        </div>
      </section>

      {/* Services Tabs */}
      <PricingTabs />

      {/* Package Bundles */}
      <PackageCards />

      {/* Policies & Inclusion */}
      <PolicySection />

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-foam">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] bg-bark p-12 md:p-24 text-center text-foam shadow-2xl">
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Ready for an Island Adventure?
            </h2>
            <p className="text-xl text-foam/70 leading-relaxed">
              Spaces are limited, especially for our boutique boarding villas. Secure your pup&apos;s spot today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-12 bg-coral hover:bg-coral/90">
                Book a Resort Stay
              </Button>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto px-12 border-foam/30 text-foam hover:bg-foam/10">
                Tour the Island
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
