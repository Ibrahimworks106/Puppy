"use client";

interface WaveDividerProps {
  className?: string;
  color?: string;
  flip?: boolean;
}

export const WaveDivider = ({ className, color = "#0EA5E9", flip = false }: WaveDividerProps) => {
  return (
    <div
      className={className}
      style={{ width: "100%", overflow: "hidden", lineHeight: 0, transform: flip ? "scaleY(-1)" : "none" }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "80px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M0,80 C360,20 720,100 1080,40 C1260,20 1380,60 1440,80 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.08"
        />
      </svg>
    </div>
  );
};