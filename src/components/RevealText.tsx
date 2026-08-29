"use client";

import { motion } from "framer-motion";

export default function RevealText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: delay },
    },
  };

  const word = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      <Tag className="m-0 flex flex-wrap gap-x-[0.28em]">
        {words.map((w, i) => (
          <span key={i} className="overflow-hidden py-1 leading-[1.05]">
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
