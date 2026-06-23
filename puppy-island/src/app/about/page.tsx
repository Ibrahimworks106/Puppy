import React from "react";
import { StoryHero } from "@/components/about/StoryHero";
import { StatsStrip } from "@/components/about/StatsStrip";
import { ValuesCards } from "@/components/about/ValuesCards";
import { OwnerSpotlight } from "@/components/about/OwnerSpotlight";
import { TeamGrid } from "@/components/about/TeamGrid";
import { FacilityGallery } from "@/components/about/FacilityGallery";
import { LocationHours } from "@/components/about/LocationHours";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StoryHero />
      <StatsStrip />
      <ValuesCards />
      <OwnerSpotlight />
      <TeamGrid />
      <FacilityGallery />
      <LocationHours />
    </div>
  );
}
