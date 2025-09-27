"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down";

export type VerticalWallProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
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

  const duration = halfHeight > 0 ? halfHeight / speed : 20;
  const from = 0;
  const to = direction === "up" ? -halfHeight : halfHeight;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className ?? ""}`}>
      {reduce ? (
        <div className="py-3">
          {items.map((it, i) => (
            <div key={`static-${i}`} className="py-3">
              {renderItem(it, i)}
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          key={halfHeight}
          className="will-change-transform"
          style={{ translateZ: 0 }}
          animate={{ y: [from, to] }}
          transition={{ repeat: Infinity, ease: "linear", duration }}
        >
          <div data-half="1">
            {items.map((it, i) => (
              <div key={`a-${i}`} className="py-3">
                {renderItem(it, i)}
              </div>
            ))}
          </div>
          <div aria-hidden>
            {items.map((it, i) => (
              <div key={`b-${i}`} className="py-3">
                {renderItem(it, i)}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}


