import React from "react";
import { STATS } from "@/lib/constants";

export const TrustBar = () => {
  return (
    <section className="bg-ocean py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-foam">
        {STATS.map((stat, index) => (
          <div 
            key={index} 
            className={`space-y-3 ${index > 0 ? "md:border-l border-foam/10" : ""}`}
          >
            <div className="font-display text-5xl md:text-6xl font-bold">{stat.value}</div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
