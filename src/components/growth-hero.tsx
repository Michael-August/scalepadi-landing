"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const fadeChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const GrowthHero = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <motion.div
        className="bg-[url('/images/gold-line.svg')] bg-cover bg-center flex w-full lg:w-[1229px] py-5 lg:py-10 lg:mx-auto flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-4 w-full items-center justify-center lg:w-[527px]"
          variants={fadeChild}
        >
          <motion.span
            className="font-bold text-3xl lg:text-5xl text-[#FCC40F]"
            variants={fadeChild}
          >
            Growth Hub
          </motion.span>
          <motion.span
            className="text-base font-medium text-center text-white"
            variants={fadeChild}
          >
            Your AI Powered Growth Hub for African Entrepreneurs, read, learn and digest our blog post resources
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GrowthHero;
