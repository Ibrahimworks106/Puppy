import { Hero } from "@/components/home/Hero";
import { ServiceBuilder } from "@/components/home/ServiceBuilder";
import { ProofWall } from "@/components/home/ProofWall";
import { BookingForm } from "@/components/home/BookingForm";
import { TrustBar } from "@/components/home/TrustBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceBuilder />
      <ProofWall />
      <BookingForm />
      <TrustBar />
    </div>
  );
}
