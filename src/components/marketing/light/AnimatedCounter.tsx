import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, label, duration = 2 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract numeric part and suffix (e.g., "50,000+" -> 50000, "+")
  const numericMatch = value.match(/^([\d.,]+)(.*)$/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1].replace(/[,.]/g, '')) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';
  const hasThousandSeparator = value.includes(',') || value.includes('.');
  const separator = value.includes('.') ? '.' : ',';
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    if (hasThousandSeparator && rounded >= 1000) {
      return rounded.toLocaleString(separator === '.' ? 'de-DE' : 'en-US') + suffix;
    }
    return rounded + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, duration, count]);

  return (
    <div ref={ref} className="text-center">
      <motion.div 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.span>{rounded}</motion.span>
      </motion.div>
      <motion.div 
        className="text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {label}
      </motion.div>
    </div>
  );
};
