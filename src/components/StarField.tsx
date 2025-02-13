"use client";

import { useEffect, useRef } from "react";

// Configuration constants
const STAR_CONFIG = {
  COUNT: 200, // Number of stars
  SIZE_MIN: 0.5, // Minimum star size
  SIZE_MAX: 2.0, // Maximum star size
  OPACITY_MIN: 0.5, // Minimum base opacity
  OPACITY_MAX: 1.0, // Maximum base opacity
  TWINKLE_SPEED_MIN: 0.01, // Minimum twinkle speed
  TWINKLE_SPEED_MAX: 0.03, // Maximum twinkle speed
  PARALLAX_INTENSITY: 0.25, // Higher = more dramatic parallax effect
  TWINKLE_INTENSITY: 0.5, // Controls how much stars twinkle (0-1)
} as const;

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  parallaxFactor: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to document size
    const resizeCanvas = () => {
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
      canvas.width = window.innerWidth;
      canvas.height = documentHeight;

      // Regenerate stars when canvas is resized
      generateStars();
    };

    // Create stars array outside the generate function
    let stars: Star[] = [];

    // Function to generate stars
    const generateStars = () => {
      if (!canvas) return;
      stars = Array.from({ length: STAR_CONFIG.COUNT }, () => {
        const size =
          Math.random() * (STAR_CONFIG.SIZE_MAX - STAR_CONFIG.SIZE_MIN) +
          STAR_CONFIG.SIZE_MIN;

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity:
            Math.random() *
              (STAR_CONFIG.OPACITY_MAX - STAR_CONFIG.OPACITY_MIN) +
            STAR_CONFIG.OPACITY_MIN,
          twinkleSpeed:
            Math.random() *
              (STAR_CONFIG.TWINKLE_SPEED_MAX - STAR_CONFIG.TWINKLE_SPEED_MIN) +
            STAR_CONFIG.TWINKLE_SPEED_MIN,
          twinklePhase: Math.random() * Math.PI * 2,
          parallaxFactor:
            (size / STAR_CONFIG.SIZE_MAX) * STAR_CONFIG.PARALLAX_INTENSITY,
        };
      });
    };

    // Handle scroll events
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update twinkle phase
        star.twinklePhase += star.twinkleSpeed;

        // Calculate parallax offset
        const parallaxOffset = scrollRef.current * star.parallaxFactor;

        // Calculate wrapped Y position
        let adjustedY = star.y + parallaxOffset;
        adjustedY = adjustedY % canvas.height;
        if (adjustedY < 0) adjustedY += canvas.height;

        // Calculate current opacity based on sine wave
        const currentOpacity =
          star.opacity *
          (1 -
            STAR_CONFIG.TWINKLE_INTENSITY +
            STAR_CONFIG.TWINKLE_INTENSITY * Math.sin(star.twinklePhase));

        // Draw star
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.arc(star.x, adjustedY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 bg-[#09071D] w-full h-full"
      style={{
        zIndex: -1,
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
