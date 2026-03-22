import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  color?: "primary-foreground" | "terracotta-brown";
}

const AnimatedCounter = ({ target, prefix = "", suffix = "", label, duration = 2, color = "primary-foreground" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  const numberClass = color === "terracotta-brown"
    ? "font-display text-4xl md:text-5xl text-terracotta-brown"
    : "font-display text-4xl md:text-5xl text-primary-foreground";

  const labelClass = color === "terracotta-brown"
    ? "font-body text-sm text-terracotta-brown/70 mt-1"
    : "font-body text-sm text-primary-foreground/70 mt-1";

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className={numberClass}>{prefix}{count}{suffix}</span>
      <p className={labelClass}>{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
