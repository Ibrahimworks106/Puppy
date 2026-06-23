"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDogName } from "@/lib/dogName";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Dog } from "lucide-react";

export const BookingForm = () => {
  const { dogName } = useDogName();
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Mid-Sized");

  const SIZES = [
    { label: "Pocket", emoji: "🦴", key: "Pocket Pups" },
    { label: "Mid-Sized", emoji: "🐕", key: "Mid-Sized" },
    { label: "Giant", emoji: "🐘", key: "Gentle Giants" },
  ];

  return (
    <section id="booking" className="bg-sand py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-card relative overflow-hidden">
        {/* Decorative elements from image */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl text-ocean mb-4">
            Pack <span className="italic font-bold">{dogName}</span>&apos;s Bags for the Island! 🏝️
          </h2>
          <p className="font-body text-on-surface-variant opacity-70">
            Let&apos;s get the details sorted for the perfect getaway.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1.5 bg-mist rounded-full mb-16 px-2 mx-auto max-w-md">
          <motion.div 
            initial={{ width: "33%" }}
            animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
            className="absolute top-0 left-0 h-full bg-ocean rounded-full flex items-center justify-end"
          >
            <div className="absolute -right-4 bg-ocean text-foam p-2 rounded-xl shadow-lg transform -translate-y-1">
              <Dog size={20} />
            </div>
          </motion.div>
          <div className="absolute inset-0 flex justify-between items-center -top-3">
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] transition-colors ${
                  s <= step ? "bg-ocean text-foam" : "bg-mist text-bark/20"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <SectionLabel className="ml-2 mb-0">Pup&apos;s Name</SectionLabel>
              <input 
                type="text" 
                placeholder="Rex, Luna, Bella..."
                defaultValue={dogName === "Max" ? "" : dogName}
                className="w-full bg-mist border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-ocean outline-none font-body text-bark"
              />
            </div>
            <div className="space-y-3">
              <SectionLabel className="ml-2 mb-0">Pup&apos;s Breed</SectionLabel>
              <input 
                type="text" 
                placeholder="e.g. Golden Retriever"
                className="w-full bg-mist border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-ocean outline-none font-body text-bark"
              />
            </div>
          </div>

          <div className="space-y-4">
            <SectionLabel className="ml-2 mb-0">Pup&apos;s Size</SectionLabel>
            <div className="grid grid-cols-3 gap-4">
              {SIZES.map((size) => (
                <button
                  key={size.key}
                  type="button"
                  onClick={() => setSelectedSize(size.key)}
                  className={`py-6 border-2 rounded-2xl transition-all flex flex-col items-center gap-2 ${
                    selectedSize === size.key 
                      ? "border-ocean bg-ocean/5 shadow-inner" 
                      : "border-mist hover:border-ocean/30"
                  }`}
                >
                  <span className="text-2xl">{size.emoji}</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{size.label}</span>
                </button>
              ))}
            </div>
          </div>

          <Button 
            variant="secondary" 
            className="w-full h-16 text-lg rounded-2xl"
            onClick={() => setStep(prev => Math.min(prev + 1, 3))}
          >
            Continue Journey
          </Button>
        </form>
      </div>
    </section>
  );
};
