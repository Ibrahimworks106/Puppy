import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceBlockProps {
  label: string;
  title: string;
  description: string;
  features: string[];
  priceLabel: string;
  priceValue: string;
  priceSuffix?: string;
  buttonText: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  flipped?: boolean;
}

export const ServiceBlock = ({
  label,
  title,
  description,
  features,
  priceLabel,
  priceValue,
  priceSuffix,
  buttonText,
  imageSrc,
  videoSrc,
  imageAlt,
  icon,
  iconBgColor = "bg-ocean",
  flipped = false,
}: ServiceBlockProps) => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={cn(
            "flex flex-col gap-12 lg:gap-24 items-center",
            flipped ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          {/* Content */}
          <div className="flex-1 space-y-8 max-w-xl">
            <div className="space-y-4">
              <SectionLabel color="ocean">{label}</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-bark leading-tight">
                {title}
              </h2>
              <p className="text-bark/70 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-bark/80">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-ocean/30 flex items-center justify-center text-ocean">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-body font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-bark/40">
                  {priceLabel}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl text-ocean italic">
                    {priceValue}
                  </span>
                  {priceSuffix && (
                    <span className="font-display text-xl text-bark/60">
                      {priceSuffix}
                    </span>
                  )}
                </div>
              </div>

              <Button variant="ghost" size="md">
                {buttonText}
              </Button>
            </div>
          </div>

          {/* Media (Image or Video) */}
          <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-sand/50">
              {videoSrc ? (
                <LazyVideo
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : null}
            </div>
            {/* Circular Icon Overlay */}
            <div
              className={cn(
                "absolute bottom-[-24px] w-20 h-20 rounded-full flex items-center justify-center text-foam shadow-xl border-8 border-sand",
                iconBgColor,
                flipped ? "right-[-24px]" : "left-[-24px]"
              )}
            >
              {icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
