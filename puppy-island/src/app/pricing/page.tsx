"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { WaveDivider } from "@/components/ui/WaveDivider";

const BOARDING_DATA = [
  {
    tier: "Standard Boarding",
    badge: "MOST POPULAR",
    badgeColor: "bg-ocean/10 text-ocean",
    borderColor: "bg-ocean",
    prices: [
      { weight: "Up to 20lbs", neutered: "$65.00/night", notNeutered: "$85.00/night" },
      { weight: "21–49lbs", neutered: "$75.00/night", notNeutered: "$95.00/night" },
      { weight: "50lbs & Above", neutered: "$85.00/night", notNeutered: "$105.00/night" },
    ],
  },
  {
    tier: "VIP Boarding",
    badge: "VIP",
    badgeColor: "bg-coral/10 text-coral",
    borderColor: "bg-coral",
    prices: [
      { weight: "Up to 20lbs", neutered: "$95.00/night", notNeutered: "$115.00/night" },
      { weight: "21–49lbs", neutered: "$105.00/night", notNeutered: "$125.00/night" },
      { weight: "50lbs & Above", neutered: "$115.00/night", notNeutered: "$135.00/night" },
    ],
  },
  {
    tier: "LUX Boarding",
    badge: "LUX",
    badgeColor: "bg-sunny/10 text-sunny",
    borderColor: "bg-sunny",
    prices: [
      { weight: "Up to 20lbs", neutered: "$115.00/night", notNeutered: "$135.00/night" },
      { weight: "21–49lbs", neutered: "$125.00/night", notNeutered: "$145.00/night" },
      { weight: "50lbs & Above", neutered: "$135.00/night", notNeutered: "$155.00/night" },
    ],
  },
];

const GROOMING_DATA = [
  {
    title: "Large Breeds: $200+",
    price: "$200+",
    priceColor: "text-coral",
    description: "German Shepherd, Golden Retriever, Belgian Malinois, Australian Shepherd, Standard Doodles, Standard Poodles, Berne Doodles, etc.",
    note: "Note: XL dogs or heavy matting may incur extra fees up to $300",
  },
  {
    title: "Medium Breeds: $130-$185",
    price: "$130-$185",
    priceColor: "text-ocean",
    description: "Cocker Spaniel, Australian Shepherd, Border Collie, Mini Goldendoodle",
  },
  {
    title: "Small Breeds: $95-$125",
    price: "$95-$125",
    priceColor: "text-palm",
    description: "Yorkies, Maltese, Shih Tzu, Mini Poodles, Mini Doodles, Pomeranians, Mixed Breeds, etc.",
  },
];

const SPA_BATH_DATA = [
  {
    title: "Large Breeds: $120+",
    price: "$120+",
    priceColor: "text-coral",
    description: "German Shepherd, Golden Retriever, Belgian Malinois, Australian Shepherd, Standard Doodles, Standard Poodles, Berne Doodles, etc.",
    note: "Note: XL dogs or heavy matting may incur extra fees up to $300",
  },
  {
    title: "Medium Breeds: $85+",
    price: "$85+",
    priceColor: "text-ocean",
    description: "Cocker Spaniel, Australian Shepherd, Border Collie, Mini Goldendoodle",
  },
  {
    title: "Small Breeds: $65+",
    price: "$65+",
    priceColor: "text-palm",
    description: "Yorkies, Maltese, Shih Tzu, Mini Poodles, Mini Doodles, Pomeranians, Mixed Breeds, etc.",
  },
];

const DAYCARE_DATA: { title: string; badge?: string; gradient?: boolean; prices: { label: string; price: string; savings?: string }[] }[] = [
  {
    title: "Daily",
    prices: [
      { label: "Neutered/Spayed", price: "$40.00 Daily" },
      { label: "Not Neutered/Spayed", price: "$45.00 Daily" },
      { label: "Private Daycare", price: "$50.00 Daily" },
    ],
  },
  {
    title: "Monthly",
    badge: "BEST VALUE",
    gradient: true,
    prices: [
      { label: "Neutered/Spayed", price: "$699.00/mo", savings: "You Save $101" },
      { label: "Not Neutered/Spayed", price: "$799.00/mo", savings: "You Save $101" },
      { label: "Private Daycare", price: "$875.00/mo", savings: "You Save $125" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION A: HERO */}
      <FadeInOnScroll direction="up">
        <section className="bg-gradient-to-br from-sunny via-coral to-ocean pt-32 pb-20 px-6 md:px-12 text-center overflow-hidden relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <SectionLabel color="foam" className="text-center mb-6">
              PRICING
            </SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl text-foam mb-8 leading-tight font-bold">
              Find the Perfect Package for Your Pup
            </h1>
            <p className="font-body text-xl text-foam/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transparent pricing for our boutique island resort services. From luxury boarding to rejuvenating spa baths, we provide only the best for your furry family.
            </p>
          </div>
        </section>
      </FadeInOnScroll>

      <WaveDivider color="#FFB627" />

      {/* BOARDING SECTION */}
      <section className="py-16 px-6 md:px-12 bg-foam">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll direction="up">
            <div className="text-center mb-12">
              <SectionLabel color="coral">BOARDING</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-coconut mt-3">Overnight Stays</h2>
              <p className="text-bark/60 mt-3 max-w-xl mx-auto">Choose your pup&apos;s level of luxury for their island getaway.</p>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOARDING_DATA.map((card) => (
              <div key={card.tier} className="bg-white rounded-3xl p-8 shadow-card border border-sand transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 relative">
                <div className={`absolute top-0 left-0 right-0 h-1 ${card.borderColor} rounded-t-3xl`} />
                <span className={`inline-block ${card.badgeColor} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                  {card.badge}
                </span>
                <h3 className="text-2xl font-display font-bold text-coconut mb-6">{card.tier}</h3>
                <div className="space-y-0">
                  <div className="grid grid-cols-3 gap-4 pb-3 border-b border-sand">
                    <span className="text-bark/50 text-xs uppercase tracking-wider font-medium">Weight</span>
                    <span className="text-bark/50 text-xs uppercase tracking-wider font-medium">Neutered/Spayed</span>
                    <span className="text-bark/50 text-xs uppercase tracking-wider font-medium">Not Neutered/Spayed</span>
                  </div>
                  {card.prices.map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 gap-4 py-4 border-b border-sand last:border-0 ${i % 2 === 1 ? 'bg-shell/50 -mx-4 px-4 rounded' : ''}`}>
                      <span className="text-bark font-medium text-sm">{row.weight}</span>
                      <span className="text-lg font-bold text-coconut">{row.neutered}</span>
                      <span className="text-lg font-bold text-coconut">{row.notNeutered}</span>
                    </div>
                  ))}
                </div>
                <p className="text-bark/40 text-xs mt-6">Prices are subject to change based on various factors. For the most accurate and up-to-date pricing, please contact us directly.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#10B981" />

      {/* GROOMING SECTION */}
      <section className="py-16 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll direction="up">
            <div className="text-center mb-12">
              <SectionLabel color="ocean">GROOMING</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-coconut mt-3">Look Sharp, Feel Amazing</h2>
              <p className="text-bark/60 mt-3 max-w-xl mx-auto">Professional grooming for every breed and size.</p>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GROOMING_DATA.map((card) => (
              <div key={card.title} className="bg-white rounded-3xl p-8 shadow-card border border-sand transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 h-full">
                <h3 className="text-2xl font-display font-bold text-coconut mb-4">{card.title}</h3>
                <p className={`text-3xl font-bold ${card.priceColor} mb-4`}>{card.price}</p>
                <p className="text-bark/70 leading-relaxed text-sm mb-4">{card.description}</p>
                {card.note && (
                  <div className="bg-coral/5 border border-coral/10 rounded-xl p-4 text-coral/80 text-sm">
                    {card.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#FFB627" />

      {/* SPA & BATH SECTION */}
      <section className="py-16 px-6 md:px-12 bg-foam">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll direction="up">
            <div className="text-center mb-12">
              <SectionLabel color="ocean">SPA & BATH</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-coconut mt-3">Relax & Refresh</h2>
              <p className="text-bark/60 mt-3 max-w-xl mx-auto">A soothing bath experience tailored to your pup&apos;s needs.</p>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPA_BATH_DATA.map((card) => (
              <div key={card.title} className="bg-white rounded-3xl p-8 shadow-card border border-sand transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 h-full">
                <h3 className="text-2xl font-display font-bold text-coconut mb-4">{card.title}</h3>
                <p className={`text-3xl font-bold ${card.priceColor} mb-4`}>{card.price}</p>
                <p className="text-bark/70 leading-relaxed text-sm mb-4">{card.description}</p>
                {card.note && (
                  <div className="bg-coral/5 border border-coral/10 rounded-xl p-4 text-coral/80 text-sm">
                    {card.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#0EA5E9" />

      {/* DAYCARE SECTION */}
      <section className="py-16 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll direction="up">
            <div className="text-center mb-12">
              <SectionLabel color="coral">DAYCARE</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-coconut mt-3">A Day at the Island</h2>
              <p className="text-bark/60 mt-3 max-w-xl mx-auto">Drop off your pup for a fun-filled day of play and socialization.</p>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DAYCARE_DATA.map((card) => (
              <div key={card.title} className={`rounded-3xl p-8 shadow-card border transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 h-full ${
                card.gradient 
                  ? 'bg-gradient-to-br from-coral/5 to-ocean/5 border-coral/20' 
                  : 'bg-white border-sand'
              }`}>
                {card.badge && (
                  <span className="inline-block bg-coral text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {card.badge}
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold text-coconut mb-6">{card.title}</h3>
                <div className="space-y-4">
                  {card.prices.map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-sand last:border-0">
                      <span className="text-bark font-medium text-sm">{row.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-coconut">{row.price}</span>
                        {row.savings && (
                          <span className="bg-palm/10 text-palm text-xs font-bold px-2 py-0.5 rounded-full">
                            {row.savings}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-bark py-20 px-6 md:px-12">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-5xl text-foam font-bold">
              Ready to Book Your Pup&apos;s Stay?
            </h2>
            <p className="text-lg text-foam/70">
              Contact us directly for the most accurate pricing and to reserve your spot on the island.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="primary" size="lg">
                Book Now
              </Button>
              <Button variant="ghost" size="lg" className="border-foam/30 text-foam">
                Contact Us
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    </div>
  );
}
