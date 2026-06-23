import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const VALUES = [
  {
    title: "Cage-Free Always",
    description: "We believe in freedom. Dogs at Puppy Island enjoy open-plan suites and shared communal lounges designed for comfort and socialization.",
    emoji: "🏝️",
  },
  {
    title: "Personalized Care",
    description: "Every guest has a unique personality. From dietary needs to play styles, our Island Concierge tailors the experience to every pup.",
    emoji: "🦴",
  },
  {
    title: "Total Transparency",
    description: "Watch your pup play in real-time. Our HD Island Cams and daily digital 'Postcards' keep you connected no matter where you are.",
    emoji: "✨",
  },
];

export const ValuesCards = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-foam">
      <div className="max-w-7xl mx-auto text-center">
        <SectionLabel color="coral" className="mb-4">OUR CORE PILLARS</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl text-ocean mb-16 font-bold">
          The Island Philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-10 shadow-sm border border-bark/5 text-left transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-4xl mb-8 bg-foam w-16 h-16 rounded-2xl flex items-center justify-center">
                {value.emoji}
              </div>
              <h3 className="font-display text-2xl text-ocean mb-4 font-bold">
                {value.title}
              </h3>
              <p className="text-bark/60 text-[15px] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
