"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import { ButtonProps } from "../interfaces/button.interface";

// Default hover/initial variants (for hover interaction only)
const defaultButtonVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#B57F12",
    color: "#ffffff",
    borderColor: "#B57F12",
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  type,
  onClick,
  className = "",
  custom,
  initial = "initial",
  animate,
  variants = {}, // External variants like fadeUp
  whileHover = "hover", // Enable hover by default
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`relative flex items-center justify-center gap-2  px-6 py-3 rounded-lg overflow-hidden origin-left ${className}`}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      custom={custom}
      variants={{
        ...defaultButtonVariants,
        ...variants, // merge external variants like fadeUpVariant
      }}
    >
      <span className="whitespace-nowrap">{text}</span>

      <motion.div
        variants={{
          initial: { x: 0 },
          hover: {
            x: 8,
            transition: {
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            },
          },
        }}
      >
        <ArrowRight className="w-5 h-5 stroke-current" />
      </motion.div>
    </motion.button>
  );
};
