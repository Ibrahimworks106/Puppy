import React from "react";
import { Cake, Medal, type LucideIcon } from "lucide-react";

const PerkItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
      <Icon className="text-coral" size={32} />
    </div>
    <div className="space-y-1">
      <h3 className="font-display text-xl font-bold text-bark">{title}</h3>
      <p className="text-bark/60 text-sm leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  </div>
);

export const PerksStrip = () => {
  return (
    <section className="py-16 bg-[#EBE0C7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <PerkItem
            icon={Cake}
            title="Free Birthday Daycare"
            description="Because every birthday deserves an island party. Join our pup club for annual freebies."
          />
          <PerkItem
            icon={Medal}
            title="OnlyPaws Membership"
            description="Priority booking, exclusive discounts, and a free spa bundle every quarter for members."
          />
        </div>
      </div>
    </section>
  );
};
