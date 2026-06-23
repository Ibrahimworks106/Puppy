import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LazyVideo } from "@/components/ui/LazyVideo";

const VIDEOS = [
  { src: "/videos/Playing.mp4" },
  { src: "/videos/grooming-bathing.mp4" },
  { src: "/videos/Cage-Free-Daycare-2.mp4" },
  { src: "/videos/Care.mp4" },
  { src: "/videos/cage-free-daycare.mp4" },
];

export const FacilityGallery = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-bark">
      <div className="max-w-7xl mx-auto text-center">
        <SectionLabel color="coral" className="mb-4">THE ISLAND GROUNDS</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl text-foam mb-16 font-bold">
          A Peek Inside Paradise
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {VIDEOS.map((vid, idx) => (
            <div 
              key={idx} 
              className="relative w-full md:w-[calc(33.333%-16px)] aspect-square rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] cursor-pointer"
            >
              <LazyVideo
                src={vid.src}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-bark/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
