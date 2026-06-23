import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const StoryHero = () => {
  return (
    <section className="bg-foam pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <SectionLabel color="ocean">OUR ORIGIN STORY</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-ocean font-bold leading-[1.1]">
            We Didn&apos;t Build a Kennel.<br />We Built an Island.
          </h1>
          <p className="text-bark/70 text-lg leading-relaxed max-w-xl">
            Founded on the belief that boarding should be a vacation, not a confinement. Puppy Island was born from a simple desire: to give dogs the same level of luxury, freedom, and joy that we expect from a 5-star tropical resort. No cages, no concrete runs—just lush gardens, sparkling pools, and endless care.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" size="lg" className="bg-coral hover:bg-coral/90 px-10">
              Tour the Island
            </Button>
            <Button variant="ghost" size="lg" className="border-ocean/20 text-ocean px-10">
              Our Mission
            </Button>
          </div>
        </div>

        {/* Right: Image with Badge */}
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070"
              alt="Golden Retriever on a pool lounger"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Stats Badge */}
          <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-8 rounded-[32px] shadow-xl border border-foam/50 max-w-[200px]">
            <div className="font-display text-4xl font-bold text-ocean mb-1">98%</div>
            <p className="text-bark/60 text-xs leading-tight font-medium">
              Return guest rate from our furry friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
