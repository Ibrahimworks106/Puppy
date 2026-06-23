"use client";

import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export const LazyVideo = ({ src, className, poster }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  // When shouldLoad becomes true, the <source> tag is injected.
  // We need to explicitly tell the browser to load and play the new source.
  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((e) => console.log("Autoplay blocked or failed", e));
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      autoPlay
      playsInline
      preload="none"
      className={className}
      poster={poster}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
};
