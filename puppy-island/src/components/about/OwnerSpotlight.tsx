import React from "react";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";

export const OwnerSpotlight = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-foam">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Founder Image */}
        <div className="relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full border-8 border-ocean/5 z-10" />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976"
                alt="Sarah Jenkins, Founder"
                fill
                className="object-cover"
              />
            </div>
            {/* Quote Badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-coral rounded-full flex items-center justify-center text-foam shadow-lg z-20">
              <Quote size={24} fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-8">
          <h2 className="font-display text-4xl md:text-5xl text-ocean font-bold leading-tight">
            A Letter from the Founder
          </h2>
          <p className="text-bark/80 text-xl italic leading-relaxed font-body">
            &quot;Puppy Island was born from my own anxiety leaving my poodle, Bella, behind when I traveled. I wanted a place that didn&apos;t just watch her, but celebrated her. Today, we treat every dog like the VIP they truly are.&quot;
          </p>
          <div className="space-y-4">
            <div>
              <div className="font-display text-2xl text-ocean font-bold">Sarah Jenkins</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bark/40 font-bold mt-1">
                FOUNDER & CHIEF HAPPINESS OFFICER
              </div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-coral font-bold text-sm hover:gap-3 transition-all border-b border-coral/20 pb-1"
            >
              Follow Sarah & Bella on Instagram <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
