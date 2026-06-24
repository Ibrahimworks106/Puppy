"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useDogName } from "@/lib/dogName";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heart } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
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
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* BACKGROUND — tropical beach with palm trees */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070"
          alt="Tropical beach with palm trees"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <SectionLabel color="foam">WELCOME TO PUPPY ISLAND</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl text-foam font-bold leading-[1.1] drop-shadow-lg">
            Your Dog&apos;s Paradise<br />Awaits
          </h1>
          <p className="text-foam/90 text-lg leading-relaxed max-w-xl drop-shadow-md">
            Give your furry best friend the vacation they deserve. Luxury suites, 
            splash pools, and endless play on our tropical island retreat.
          </p>

          {/* INTERACTION BLOCK */}
          <motion.div className="flex flex-wrap items-center gap-3" variants={itemVariants}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your dog's name..."
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              onKeyDown={handleKeyDown}
              className="px-5 py-3 rounded-full bg-white/90 backdrop-blur-sm text-bark placeholder-bark/40 focus:outline-none focus:ring-2 focus:ring-coral/50 w-64 transition-all duration-300 shadow-lg"
            />
            <Button variant="primary" size="lg" onClick={handleStart} className="rounded-full shadow-lg">
              Get Started
            </Button>
            <button
              onClick={() => {/* Heart button logic */}}
              className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-coral hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              aria-label="Add to favorites"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — circular image */}
        <motion.div className="relative flex justify-center lg:justify-end" variants={itemVariants}>
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border-8 border-white/50 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070"
              alt="Happy dog on the beach"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};