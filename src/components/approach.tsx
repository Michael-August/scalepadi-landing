"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variants for each direction:
const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const directions = [fromLeft, fromRight, fromBottom, fromTop];

const OurApproach = () => {
  const cards = [
    {
      src: "/images/approach1.svg",
      title: "Growth Assessment & Strategy Mapping",
      desc: "AI + expert evaluation of business challenges",
    },
    {
      src: "/images/approach2.svg",
      title: "Expert & Resource Connection",
      desc: "Smart matching with top growth professionals",
    },
    {
      src: "/images/approach3.svg",
      title: "Monitoring & Evaluation",
      desc: "Continuous tracking of growth outcomes",
    },
    {
      src: "/images/approach4.svg",
      title: "72-Hour Deployment",
      desc: "Businesses connect with their growth engine in under 3 days",
    },
  ];

  return (
    <div className="lg:h-[775px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0">
      <div className="top flex flex-col items-center justify-center gap-3.5">
        <span className="font-bold text-2xl lg:text-5xl">Our Approach</span>
        <span className="md:text-base text-sm text-center">
          Scale your business while learning from industry expert
        </span>
      </div>

      <motion.div
        className="cards flex flex-wrap items-center justify-center lg:gap-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariant}
      >
        {cards.map(({ src, title, desc }, idx) => (
          <motion.div
            key={title}
            className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white"
            variants={directions[idx % directions.length]}
          >
            <div className="top flex items-center justify-center">
              <Image src={src} alt={title} width={248} height={104} />
            </div>
            <div className="flex flex-col items-center justify-center px-5 gap-2.5">
              <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">{title}</span>
              <span className="text-[#333333] text-center">{desc}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurApproach;
