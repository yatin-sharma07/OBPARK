"use client";

import { motion } from "framer-motion";

export function ScrollReveal({ 
  text, 
  className = "",
  as: Component = "p"
}: { 
  text: string; 
  className?: string;
  as?: any;
}) {
  // Create a motion component dynamically based on the 'as' prop
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {text}
    </MotionComponent>
  );
}
