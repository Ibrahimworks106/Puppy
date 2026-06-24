"use client";

import React from "react";
import { 
  Palmtree, 
  Scissors, 
  CircleDot, 
  Bath, 
  Trees, 
  Camera
} from "lucide-react";
import { ServiceBlock } from "@/components/services/ServiceBlock";
import { PerksStrip } from "@/components/services/PerksStrip";
import { Button } from "@/components/ui/Button";
import { useDogName } from "@/lib/dogName";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { WaveDivider } from "@/components/ui/WaveDivider";

const SERVICES_DATA = [
  {
    label: "LUXURY STAY",
    title: "Overnight Boarding",
    description: "Our private suites offer the ultimate island getaway experience. No cages, just climate-controlled comfort and personalized turn-down service for your pup.",
    features: [
      "24/7 Professional Supervision",
      "Complimentary Nightly Treat",
      "Daily Photo/Video Updates"
    ],
    priceLabel: "STARTING AT",
    priceValue: "$85",
    priceSuffix: "/ night",
    buttonText: "Learn About Suites",
    imageSrc: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069",
    imageAlt: "Luxury dog boarding suite",
    icon: <Palmtree size={32} />,
    iconBgColor: "bg-palm",
    flipped: true,
  },
  {
    label: "STYLE & CARE",
    title: "Professional Grooming",
    description: "From breed-standard cuts to island-ready trims, our certified stylists ensure your dog looks and feels like royalty. We use only organic, hypoallergenic products.",
    features: [
      "Hand-Scissoring Specialist",
      "Sanitary & Paw Pad Trim",
      "Ear Cleaning & Nail Grinding"
    ],
    priceLabel: "PACKAGES FROM",
    priceValue: "$65+",
    buttonText: "View Style Gallery",
    imageSrc: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070",
    imageAlt: "Professional dog grooming",
    icon: <Scissors size={32} />,
    iconBgColor: "bg-coral",
    flipped: false,
  },
  {
    label: "SOCIAL CLUB",
    title: "Cage-Free Daycare",
    description: "Supervised play in our themed 'beaches' based on size and temperament. It's more than daycare; it's a social club for discerning dogs.",
    features: [
      "Indoor/Outdoor Access",
      "Behavioral Assessment Included",
      "Structured Rest & Nap Periods"
    ],
    priceLabel: "FULL DAY",
    priceValue: "$45",
    buttonText: "Schedule Evaluation",
    imageSrc: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069",
    imageAlt: "Dogs playing in daycare",
    icon: <CircleDot size={32} />,
    iconBgColor: "bg-ocean",
    flipped: true,
  },
  {
    label: "PURE BLISS",
    title: "Spa Bath Bundle",
    description: "The ultimate refresh. Our spa bundles include soothing massages, blueberry facials, and deep-conditioning treatments that leave coats silky and smelling like paradise.",
    features: [
      "Signature Blueberry Facial",
      "Paw-dicure & Pad Balms",
      "Organic Aromatherapy Bath"
    ],
    priceLabel: "ADD-ON FROM",
    priceValue: "$35",
    buttonText: "Customize Bundle",
    imageSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    imageAlt: "Dog in a relaxing spa bath",
    icon: <Bath size={32} />,
    iconBgColor: "bg-ocean",
    flipped: false,
  },
  {
    label: "FITNESS FIRST",
    title: "Walks & Gym",
    description: "Tailored exercise plans for high-energy explorers. From nature walks to our specialized doggy treadmill gym, we keep them fit and happy.",
    features: [
      "30 or 60 Minute Forest Walks",
      "Canine Treadmill Sessions",
      "GPS-Tracked Route Reporting"
    ],
    priceLabel: "30-MIN SESSION",
    priceValue: "$25",
    buttonText: "View Fitness Plans",
    imageSrc: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974",
    imageAlt: "Dog walking at sunset",
    icon: <Trees size={32} />,
    iconBgColor: "bg-palm",
    flipped: true,
  },
  {
    label: "CAPTURE THE JOY",
    title: "Island Photography",
    description: "Professional portraits captured in our signature natural light studio or outdoor beach park. High-resolution digital memories of your pup's vacation.",
    features: [
      "Editorial-Style Studio Setup",
      "Action Shots & Candid Play",
      "Digital Gallery & Canvas Prints"
    ],
    priceLabel: "MINI SESSION",
    priceValue: "$120",
    buttonText: "Book a Shoot",
    imageSrc: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069",
    imageAlt: "Professional dog photography",
    icon: <Camera size={32} />,
    iconBgColor: "bg-coral",
    flipped: false,
  },
];

export default function ServicesPage() {
  const { dogName } = useDogName();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <FadeInOnScroll>
        <section className="relative bg-gradient-to-br from-ocean to-coconut pt-32 pb-64 overflow-hidden">
          {/* Tropical Shape Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full scale-150 rotate-12" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 0 C 70 20, 90 50, 50 100 C 10 50, 30 20, 50 0 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="font-display text-5xl md:text-8xl text-foam mb-8 leading-tight max-w-5xl mx-auto">
              Everything Your Dog Deserves
            </h1>
            <p className="font-body text-xl md:text-2xl text-foam/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              A luxury retreat where tropical vibes meet world-class pet care. Our services are tailored to the unique personality of your furry family member.
            </p>
            <Button variant="primary" size="lg" className="px-12 bg-coral hover:bg-coral/90">
              Explore Spa Menu
            </Button>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Services List */}
      <div className="bg-sand -mt-24 relative z-10 rounded-t-[64px]">
        {SERVICES_DATA.map((service, index) => (
          <ServiceBlock key={index} {...service} />
        ))}
      </div>

      <WaveDivider color="#FFB627" />

      {/* Perks Strip */}
      <FadeInOnScroll>
        <PerksStrip />
      </FadeInOnScroll>

      {/* CTA Section */}
      <FadeInOnScroll>
        <section className="py-24 px-6 md:px-12 bg-sand">
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#D1523B] to-[#1A6B72] p-12 md:p-24 text-center text-foam shadow-2xl">
            {/* Subtle tropical leaf pattern overlay could go here */}
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Ready to Book {dogName}&apos;s Stay?
              </h2>
              <p className="text-xl md:text-2xl text-foam/90 leading-relaxed">
                Join the waiting list for our next season or secure your grooming spot today. Your pup&apos;s tropical adventure is just a click away.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Button variant="foam" size="lg" className="w-full sm:w-auto px-12">
                  Book Online Now
                </Button>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto px-12 border-foam text-foam hover:bg-foam/10">
                  Call the Front Desk
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
}