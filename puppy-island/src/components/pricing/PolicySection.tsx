import React from "react";
import { CheckCircle2, Info } from "lucide-react";

const INCLUDED_ITEMS = [
  {
    title: "Premium Organic Meals",
    description: "Every stay includes nutritionist-approved, grain-free premium dining options tailored to your dog's diet.",
  },
  {
    title: "24/7 Wellness Monitoring",
    description: "Certified veterinary technicians are on-site at all times to ensure health and happiness.",
  },
  {
    title: "Lush Play Grounds",
    description: "Access to our temperature-controlled indoor-outdoor play arenas with artificial turf.",
  },
];

const POLICIES = [
  "Vaccination records (Rabies, Distemper, Bordetella) must be provided 48 hours prior to arrival.",
  "Cancellations must be made 72 hours before booking for a full refund.",
  "Holiday surges: A 15% premium applies to all services during peak holiday seasons.",
  "Pick-up/Drop-off times: 8:00 AM – 7:00 PM. Late fees apply after 7:30 PM.",
];

export const PolicySection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-foam">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: What's Included */}
        <div className="space-y-12">
          <h2 className="font-display text-4xl text-ocean font-bold">What&apos;s Included</h2>
          <div className="space-y-8">
            {INCLUDED_ITEMS.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-palm w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-bark text-lg mb-2">{item.title}</h4>
                  <p className="text-bark/60 leading-relaxed text-[15px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Booking Policies */}
        <div className="bg-ocean/5 rounded-[32px] p-10 md:p-12">
          <h3 className="font-display text-3xl text-ocean mb-8 font-bold text-left">Booking Policies</h3>
          <ul className="space-y-6">
            {POLICIES.map((policy, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Info className="text-ocean w-5 h-5 opacity-60" />
                </div>
                <p className="text-bark/70 text-sm leading-relaxed">{policy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
