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

    const onMouseDown = () => {
      ring.animate(
        [
          { transform: `${ring.style.transform} scale(1)`, boxShadow: "0 0 12px rgba(168,85,247,0.55)" },
          { transform: `${ring.style.transform} scale(1.4)`, boxShadow: "0 0 18px rgba(34,211,238,0.55)" },
          { transform: `${ring.style.transform} scale(1)` },
        ],
        { duration: 250, easing: "ease-out" }
      );
    };

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      ring.style.borderColor = interactive ? "var(--accent-cyan)" : "rgba(168,85,247,0.7)";
      ring.style.boxShadow = interactive ? "var(--shadow-neon-cyan)" : "var(--shadow-neon-purple)";
      ring.style.width = interactive ? "44px" : "32px";
      ring.style.height = interactive ? "44px" : "32px";
    };

    const tick = () => {
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", onHover);
    window.addEventListener("mousedown", onMouseDown);
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onHover);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 rounded-full bg-accent-cyan mix-blend-screen"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-purple/70 glow-purple mix-blend-screen transition-[width,height,border-color] duration-150"
      />
    </>
  );
}


