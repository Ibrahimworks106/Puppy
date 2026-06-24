import type { Metadata } from "next";
import { DogNameProvider } from "@/lib/dogName";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { FloatingDecorations } from "@/components/ui/FloatingDecorations";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puppy Island Care & Spa | Glendale's #1 Cage-Free Dog Resort",
  description: "Experience the ultimate cage-free luxury retreat for your furry friends in Glendale, CA. Boarding, daycare, and spa services designed for comfort and joy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body bg-sand text-bark">
        <DogNameProvider>
          <ScrollIndicator />
          <FloatingDecorations />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </DogNameProvider>
      </body>
    </html>
  );
}
