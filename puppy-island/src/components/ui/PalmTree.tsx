"use client";

import { motion } from "framer-motion";

interface PalmTreeProps {
  size?: number;
  variant?: "side-left" | "side-right";
}

export const PalmTree = ({ size = 400, variant = "side-left" }: PalmTreeProps) => {
  const isLeft = variant === "side-left";
  
  return (
    <motion.div
      style={{ 
        width: size, 
        height: size * 1.1,
        transformOrigin: isLeft ? "left center" : "right center"
      }}
      animate={{
        rotate: [0, 2, -1.5, 1, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        viewBox="0 0 350 400"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          transform: isLeft ? "scaleX(1)" : "scaleX(-1)",
          transformOrigin: "left center",
          overflow: "visible"
        }}
      >
        {/* Trunk - entering from left side, curving down */}
        <path
          d="M-20 80 Q30 85 70 95 Q110 110 140 140 Q160 165 175 200 Q185 230 190 260"
          stroke="#8B5A2B"
          strokeWidth="28"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Trunk texture - bark lines */}
        <path d="M10 78 Q15 82 20 78" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M35 82 Q40 86 45 82" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M58 88 Q63 92 68 88" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M80 96 Q85 100 90 96" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M100 108 Q105 112 110 108" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M118 122 Q123 126 128 122" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M132 138 Q137 142 142 138" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M145 158 Q150 162 155 158" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M155 178 Q160 182 165 178" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M165 200 Q170 204 175 200" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M172 222 Q177 226 182 222" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M178 245 Q183 249 188 245" stroke="#6B4423" strokeWidth="3" fill="none" opacity="0.5" />

        {/* Coconuts at the bend where fronds emerge */}
        <circle cx="155" cy="100" r="12" fill="#5D4037" />
        <circle cx="175" cy="108" r="10" fill="#4E342E" />
        <circle cx="145" cy="115" r="9" fill="#6D4C41" />
        <circle cx="168" cy="90" r="8" fill="#795548" />

        {/* Palm Fronds - long drooping leaves hanging down */}
        {/* Frond 1 - drops down and left */}
        <motion.path
          d="M155 95 Q130 130 100 180 Q80 220 60 260 Q85 230 105 200 Q75 250 50 310 Q80 270 110 230"
          fill="#228B22"
          style={{ 
            transformOrigin: "155px 95px",
            animation: "frondDangle 4s ease-in-out infinite"
          }}
        />
        
        {/* Frond 2 - drops down and right */}
        <motion.path
          d="M165 95 Q190 125 220 170 Q240 210 255 250 Q230 220 210 195 Q240 235 260 285 Q230 255 205 225"
          fill="#2E7D32"
          style={{ 
            transformOrigin: "165px 95px",
            animation: "frondDangle 4.5s ease-in-out infinite",
            animationDelay: "0.2s"
          }}
        />
        
        {/* Frond 3 - long droop down-left */}
        <motion.path
          d="M150 105 Q120 150 85 210 Q60 260 40 310 Q70 270 95 230 Q60 290 35 350 Q65 305 90 260"
          fill="#1B5E20"
          style={{ 
            transformOrigin: "150px 105px",
            animation: "frondDangle 3.8s ease-in-out infinite",
            animationDelay: "0.4s"
          }}
        />
        
        {/* Frond 4 - long droop down-right */}
        <motion.path
          d="M170 105 Q200 145 235 200 Q260 250 275 300 Q245 260 220 225 Q255 270 275 330 Q245 295 215 255"
          fill="#2E7D32"
          style={{ 
            transformOrigin: "170px 105px",
            animation: "frondDangle 4.2s ease-in-out infinite",
            animationDelay: "0.6s"
          }}
        />
        
        {/* Frond 5 - extra droopy left */}
        <motion.path
          d="M145 115 Q110 165 70 230 Q45 285 25 340 Q55 295 80 250 Q45 315 20 375 Q55 330 85 280"
          fill="#388E3C"
          style={{ 
            transformOrigin: "145px 115px",
            animation: "frondDangle 3.5s ease-in-out infinite",
            animationDelay: "0.8s"
          }}
        />
        
        {/* Frond 6 - extra droopy right */}
        <motion.path
          d="M175 115 Q210 160 250 220 Q275 270 290 320 Q260 280 235 245 Q270 290 290 350 Q260 315 230 275"
          fill="#43A047"
          style={{ 
            transformOrigin: "175px 115px",
            animation: "frondDangle 4.8s ease-in-out infinite",
            animationDelay: "1s"
          }}
        />

        {/* Frond 7 - shorter left for depth */}
        <motion.path
          d="M140 120 Q100 170 60 240 Q35 295 20 345 Q50 300 75 255 Q40 320 15 380"
          fill="#1B5E20"
          opacity="0.75"
          style={{ 
            transformOrigin: "140px 120px",
            animation: "frondDangle 5s ease-in-out infinite",
            animationDelay: "0.3s"
          }}
        />
        
        {/* Frond 8 - shorter right for depth */}
        <motion.path
          d="M180 120 Q220 165 260 230 Q285 280 300 330 Q270 290 245 255 Q280 300 300 360 Q270 325 240 285"
          fill="#388E3C"
          opacity="0.75"
          style={{ 
            transformOrigin: "180px 120px",
            animation: "frondDangle 5.2s ease-in-out infinite",
            animationDelay: "0.7s"
          }}
        />

        {/* Trunk shadow for depth */}
        <path
          d="M20 82 Q60 90 95 105 Q125 125 150 155"
          stroke="#5D4037"
          strokeWidth="6"
          fill="none"
          opacity="0.2"
        />
      </svg>
      
      <style jsx>{`
        @keyframes frondDangle {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          25% { transform: rotate(2deg) translateY(4px); }
          50% { transform: rotate(-1.5deg) translateY(6px); }
          75% { transform: rotate(1deg) translateY(2px); }
        }
      `}</style>
    </motion.div>
  );
};