"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useMotionValue, useAnimationFrame } from "framer-motion";

type Direction = "up" | "down";

export type VerticalWallProps<T> = {
  items: T[];
  renderItem: (args: { item: T; index: number; onPause: () => void; onResume: () => void }) => ReactNode;
  speed?: number; // pixels per second
  direction?: Direction;
  className?: string;
};

export default function VerticalWall<T>({
  items,
  renderItem,
  speed = 60,
  direction = "up",
  className,
}: VerticalWallProps<T>) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [halfHeight, setHalfHeight] = useState(0);
  const pausedRef = useRef(false);

  // Duplicate list to enable seamless vertical wrap
  const list = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const firstHalf = el.querySelector("[data-half='1']") as HTMLElement | null;
      if (firstHalf) setHalfHeight(firstHalf.scrollHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  const y = useMotionValue(0);
  useEffect(() => {
    const startY = direction === "down" ? -halfHeight : 0;
    y.set(startY);
  }, [direction, halfHeight, y]);

  useAnimationFrame((_, delta) => {
    if (reduce || pausedRef.current || halfHeight === 0 || speed === 0) return;
    const distance = (speed * delta) / 1000; // px moved this frame
    const cur = y.get();
    if (direction === "up") {
      let next = cur - distance;
      if (next <= -halfHeight) next += halfHeight; // wrap
      y.set(next);
    } else {
      let next = cur + distance;
      if (next >= 0) next -= halfHeight; // wrap
      y.set(next);
    }
  });

  const onPause = () => {
    pausedRef.current = true;
  };
  const onResume = () => {
    pausedRef.current = false;
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className ?? ""}`}>
      {reduce ? (
        <div className="py-3">
          {items.map((it, i) => (
            <div key={`static-${i}`} className="py-3">
              {renderItem({ item: it, index: i, onPause, onResume })}
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          key={`${halfHeight}-${direction}`}
          className="will-change-transform"
          style={{ translateZ: 0, y }}
        >
          <div data-half="1">
            {items.map((it, i) => (
              <div key={`a-${i}`} className="py-3">
                {renderItem({ item: it, index: i, onPause, onResume })}
              </div>
            ))}
          </div>
          <div aria-hidden>
            {items.map((it, i) => (
              <div key={`b-${i}`} className="py-3">
                {renderItem({ item: it, index: i, onPause, onResume })}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}


