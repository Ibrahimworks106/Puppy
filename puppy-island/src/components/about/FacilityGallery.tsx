import React from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069", alt: "Outdoor island playground" },
  { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070", alt: "Luxury indoor guest suite" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000", alt: "Modern resort reception" },
  { src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069", alt: "Tropical spa and bathing room" },
  { src: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974", alt: "Sparkling doggy pool area" },
];

export const FacilityGallery = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-bark">
      <div className="max-w-7xl mx-auto text-center">
        <FadeInOnScroll>
          <SectionLabel color="coral" className="mb-4">THE ISLAND GROUNDS</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-foam mb-16 font-bold">
            A Peek Inside Paradise
          </h2>
        </FadeInOnScroll>

        <div className="flex flex-wrap justify-center gap-6">
          {IMAGES.map((img, idx) => (
            <FadeInOnScroll 
              key={idx} 
              delay={0.1 * idx} 
              direction="up"
              className="relative w-full md:w-[calc(33.333%-16px)] aspect-square rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-110 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-foam/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};