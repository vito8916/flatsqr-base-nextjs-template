"use client";

import { motion, type Variants, type HTMLMotionProps } from "motion/react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

type AnimateInProps = {
  variants?: Variants;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport">;

export function AnimateIn({
  variants = fadeUp,
  delay = 0,
  className,
  children,
  ...rest
}: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport">;

export function Stagger({
  staggerChildren: sc = 0.1,
  delayChildren: dc = 0,
  className,
  children,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger(sc, dc)}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export { motion };
