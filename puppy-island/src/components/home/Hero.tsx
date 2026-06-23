"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useDogName } from "@/lib/dogName";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart } from "lucide-react";
import { LazyVideo } from "@/components/ui/LazyVideo";

import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export const Hero = () => {
  const { dogName, setDogName } = useDogName();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    const value = inputRef.current?.value.trim();
    if (value) {
      setDogName(value);
    }
    const nextSection = document.getElementById("service-builder");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleStart();
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-ocean flex items-center px-6 md:px-12 py-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <LazyVideo
          src="/videos/front-page.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/50 to-bark/80" />
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-sand/20 rounded-l-[200px] z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <SectionLabel color="foam" className="opacity-80 mb-6">
              GLENDALE&apos;S #1 CAGE-FREE RESORT
            </SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="font-display italic font-bold text-foam text-5xl md:text-7xl leading-[1.1] mb-6 max-w-[600px] uppercase"
          >
            THE ULTIMATE GLOW-UP FOR YOUR BEST FRIEND
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="font-body text-lg text-foam/90 mb-10 max-w-md leading-relaxed"
          >
            A boutique sanctuary where wagging tails meet white-glove service. 
            We redefine luxury dog care with tropical vibes and premium hospitality.
          </motion.p>

          {/* Interaction Block */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <div className="flex bg-white rounded-full p-1 shadow-lg w-full max-w-md">
              <input
                ref={inputRef}
                type="text"
                defaultValue={dogName === "Max" ? "" : dogName}
                onKeyDown={handleKeyDown}
                placeholder="Enter pup's name..."
                className="h-12 flex-1 px-6 bg-transparent text-bark font-body text-base outline-none"
              />
              <Button 
                variant="primary" 
                size="md" 
                onClick={handleStart}
                className="px-8"
              >
                Let&apos;s Treat Them! 🐾
              </Button>
            </div>
            
            <button className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-coral shadow-lg hover:scale-105 transition-transform">
              <Heart fill="currentColor" size={24} />
            </button>
          </motion.div>
        </div>

        {/* Right Column - Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 rounded-full border-8 border-foam/30 z-10" />
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069"
                alt="Luxury Dog Spa"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Palette Icon Decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-20 text-foam">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
