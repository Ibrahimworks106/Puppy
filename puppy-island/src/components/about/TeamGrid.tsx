import React from "react";
import Image from "next/image";
import { TEAM } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const TeamGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-foam">
      <div className="max-w-7xl mx-auto text-center">
        <SectionLabel color="ocean" className="mb-4">THE ISLAND SQUAD</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl text-ocean mb-16 font-bold">
          Meet Our Caretakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group text-left space-y-6">
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={member.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl text-ocean font-bold">{member.name}</h3>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-coral font-bold">
                  {member.role}
                </div>
                <p className="text-bark/60 text-sm leading-relaxed italic pt-2">
                  &quot;Fun Fact: {member.funFact}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
