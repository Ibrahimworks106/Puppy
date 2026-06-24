"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingDecoration {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

export const FloatingDecorations = () => {
  const [decorations, setDecorations] = useState<FloatingDecoration[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const generateDecorations = () => {
      const newDecorations: FloatingDecoration[] = [];
      const count = 8;
      
      for (let i = 0; i < count; i++) {
        newDecorations.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.15 + 0.05,
          animationDuration: Math.random() * 20 + 10,
          animationDelay: Math.random() * 10
        });
      }
      
      setDecorations(newDecorations);
    };

    generateDecorations();
    
    const interval = setInterval(generateDecorations, 30000);
    return () => clearInterval(interval);
  }, [isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="absolute rounded-full"
          style={
            {
              left: `${decoration.x}%`,
              top: `${decoration.y}%`,
              width: `${decoration.size}px`,
              height: `${decoration.size}px`,
              opacity: decoration.opacity,
              transform: `rotate(${decoration.rotation}deg)`,
              animation: `float ${decoration.animationDuration}s ease-in-out infinite`,
              animationDelay: `${decoration.animationDelay}s`,
              background: decoration.id % 3 === 0 
                ? "radial-gradient(circle, rgba(255, 107, 107, 0.3), transparent)" 
                : decoration.id % 3 === 1
                ? "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)"
                : "radial-gradient(circle, rgba(14, 165, 233, 0.3), transparent)"
            }
          }
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};