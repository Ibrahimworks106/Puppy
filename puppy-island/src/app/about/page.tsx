import React from "react";
import { StoryHero } from "@/components/about/StoryHero";
import { StatsStrip } from "@/components/about/StatsStrip";
import { ValuesCards } from "@/components/about/ValuesCards";
import { OwnerSpotlight } from "@/components/about/OwnerSpotlight";
import { TeamGrid } from "@/components/about/TeamGrid";
import { FacilityGallery } from "@/components/about/FacilityGallery";
import { LocationHours } from "@/components/about/LocationHours";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FadeInOnScroll>
        <StoryHero />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <StatsStrip />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ValuesCards />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <OwnerSpotlight />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <TeamGrid />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FacilityGallery />
      </FadeInOnScroll>
      <WaveDivider color="#10B981" />
      <FadeInOnScroll>
        <LocationHours />
      </FadeInOnScroll>
    </div>
  );
}
