"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Heart } from "lucide-react";
import { DOG_SIZES } from "@/lib/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import Image from "next/image";

const IMAGES = [
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2088",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069"
];

export const ProofWall = () => {
  const [activeFilter, setActiveFilter] = useState("All Pups");

  return (
    <section id="pooch-proof" className="bg-mist py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ocean mb-4">Pooch Proof</h2>
            <p className="font-body text-lg text-on-surface-variant opacity-70">See our recent guests living their best island life.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {DOG_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setActiveFilter(size)}
                className={cn(
                  "px-6 py-2 rounded-full font-body font-bold text-sm transition-all duration-300",
                  activeFilter === size 
                    ? "bg-ocean text-foam" 
                    : "bg-white text-ocean border border-ocean/10 hover:bg-ocean/5"
                )}
              >
                {size.replace(" Pups", "").replace("Gentle ", "")}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-card group relative cursor-pointer"
            >
              <Image 
                src={src} 
                alt="Happy Guest" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-bark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-foam">
                  {index % 2 === 0 ? <PlayCircle size={32} /> : <Heart size={32} fill="currentColor" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
