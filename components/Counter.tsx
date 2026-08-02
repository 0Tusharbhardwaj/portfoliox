"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ value, suffix = "+", duration = 2 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(current) {
        setDisplayValue(Math.floor(current));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={nodeRef} className="font-mono">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
