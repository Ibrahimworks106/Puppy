import React from "react";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const LocationHours = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-foam">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Info Card */}
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-bark/5">
          <div className="p-10 md:p-14 space-y-10">
            <h2 className="font-display text-4xl text-ocean font-bold">Find Paradise</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-ocean/5 flex items-center justify-center text-ocean flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-bark text-lg mb-1">The Island Campus</div>
                  <p className="text-bark/60">123 Tropical Way, Sunny Isles Beach, FL 33160</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-ocean/5 flex items-center justify-center text-ocean flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold text-bark text-lg mb-1">Front Desk Hours</div>
                  <div className="grid grid-cols-2 gap-x-8 text-bark/60">
                    <span>Mon - Fri</span>
                    <span>7:00 AM – 8:00 PM</span>
                    <span>Sat - Sun</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <p className="text-bark/40 text-[12px] mt-2 italic">* Guest check-in/out available 24/7 for residents.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-ocean/5 flex items-center justify-center text-ocean flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-bark/60 font-bold">(305) 555-PAWS</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-ocean p-10 md:p-12 text-foam">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="font-bold text-xl">Ready to book a stay?</div>
                <p className="text-foam/70 text-sm leading-relaxed">
                  Our Island Concierge is ready to help you plan the perfect pup-cation.
                </p>
              </div>
              <Button variant="primary" size="lg" className="w-full bg-coral hover:bg-coral/90 font-bold rounded-2xl">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Map Visual */}
        <div className="relative aspect-square lg:aspect-auto lg:h-[700px] bg-mist rounded-[40px] overflow-hidden shadow-2xl group">
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066"
            alt="Map showing Sunny Isles Beach location"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-ocean/20 mix-blend-multiply" />
          
          {/* Stylized Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-coral animate-ping opacity-75" />
              <div className="relative w-8 h-8 bg-coral rounded-full border-4 border-foam shadow-lg flex items-center justify-center text-foam">
                <MapPin size={16} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
