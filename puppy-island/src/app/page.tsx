import { Hero } from "@/components/home/Hero";
import { ServiceBuilder } from "@/components/home/ServiceBuilder";
import { ProofWall } from "@/components/home/ProofWall";
import { BookingForm } from "@/components/home/BookingForm";
import { TrustBar } from "@/components/home/TrustBar";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FadeInOnScroll>
        <Hero />
      </FadeInOnScroll>
      <WaveDivider color="#0EA5E9" />
      <FadeInOnScroll>
        <ServiceBuilder />
      </FadeInOnScroll>
      <WaveDivider color="#FF6B6B" flip />
      <FadeInOnScroll>
        <ProofWall />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <BookingForm />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <TrustBar />
      </FadeInOnScroll>
    </div>
  );
}
