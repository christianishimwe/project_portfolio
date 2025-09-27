"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const tick = () => {
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    tick();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 rounded-full bg-accent-cyan mix-blend-screen"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-purple/70 glow-purple mix-blend-screen"
      />
    </>
  );
}


