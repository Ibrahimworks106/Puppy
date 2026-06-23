import React from "react";
import { Star } from "lucide-react";

export const StatsStrip = () => {
  return (
    <section className="bg-ocean py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-foam">
        <div className="text-center space-y-2">
          <div className="font-display text-5xl font-bold">500+</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 font-bold">
            HAPPY PUPS HOSTED
          </div>
        </div>

        <div className="text-center space-y-2 md:border-x border-foam/10">
          <div className="font-display text-5xl font-bold">2018</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 font-bold">
            FOUNDED IN PARADISE
          </div>
        </div>

        <div className="text-center space-y-3">
          <div className="flex justify-center gap-1 text-coral">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 font-bold">
            5.0 STAR BOUTIQUE RATING
          </div>
        </div>
      </div>
    </section>
  );
};
