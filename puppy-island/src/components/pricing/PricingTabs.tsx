"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

type Service = {
  name: string;
  description: string;
  price: string;
};

type PricingCategory = {
  id: string;
  label: string;
  services: Service[];
};

const PRICING_DATA: PricingCategory[] = [
  {
    id: "boarding",
    label: "BOARDING",
    services: [
      {
        name: "Island View Villa",
        description: "Private indoor-outdoor suite with garden views and plush bedding.",
        price: "$75 / night",
      },
      {
        name: "Coral Reef Suite",
        description: "Extra-large space for multi-dog families with webcam access.",
        price: "$95 / night",
      },
      {
        name: "The Penthouse",
        description: "Climate-controlled luxury suite, nightly storytime, and personal concierge.",
        price: "$125 / night",
      },
      {
        name: "Holiday Premium",
        description: "Additional charge during peak holiday seasons.",
        price: "+$15 / night",
      },
    ],
  },
  {
    id: "grooming",
    label: "GROOMING",
    services: [
      {
        name: "Full Groom",
        description: "Bath, haircut, nail trim, ear cleaning, and gland expression.",
        price: "From $65",
      },
      {
        name: "Bath & Brush",
        description: "Shampoo, blow dry, and thorough brushing.",
        price: "From $45",
      },
      {
        name: "Puppy's First Spa",
        description: "Gentle introduction to grooming for pups under 6 months.",
        price: "$40",
      },
    ],
  },
  { id: "daycare", label: "DAYCARE", services: [] },
  { id: "spa", label: "SPA & BATHS", services: [] },
  { id: "walks", label: "WALKS & GYM", services: [] },
  { id: "photography", label: "PHOTOGRAPHY", services: [] },
];

export const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("boarding");

  const currentCategory = PRICING_DATA.find((cat) => cat.id === activeTab);

  return (
    <section className="py-12 px-6 md:px-12 bg-foam">
      <div className="max-w-7xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-bark/10 mb-12">
          {PRICING_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`pb-4 text-xs font-bold tracking-[0.15em] transition-all relative ${
                activeTab === cat.id
                  ? "text-ocean"
                  : "text-bark/40 hover:text-bark/60"
              }`}
            >
              {cat.label}
              {activeTab === cat.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ocean" />
              )}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-bark/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-mist/30 text-bark/40 font-mono text-[11px] uppercase tracking-widest border-b border-bark/5">
                <th className="px-8 py-5 font-bold">Service</th>
                <th className="px-8 py-5 font-bold">Description</th>
                <th className="px-8 py-5 font-bold">Price</th>
                <th className="px-8 py-5 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCategory?.services.length ? (
                currentCategory.services.map((service, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-bark/5 last:border-0 hover:bg-mist/10 transition-colors`}
                  >
                    <td className="px-8 py-6 font-display text-lg text-ocean font-bold">
                      {service.name}
                    </td>
                    <td className="px-8 py-6 text-bark/70 text-sm max-w-md">
                      {service.description}
                    </td>
                    <td className="px-8 py-6 font-mono text-sm font-bold text-bark">
                      {service.price}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <Button variant="ghost" size="sm" className="rounded-full border-bark/10 text-ocean hover:bg-ocean hover:text-foam">
                        Add to Package
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-8 py-12 text-center text-bark/40 italic">
                    Select a category to view services
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
