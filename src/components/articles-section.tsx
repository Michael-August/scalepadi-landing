"use client";

import clsx from "clsx";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";

const tabs = [
  "All",
  "Educational Resources",
  "Business Growth",
  "Career Advice",
  "Market Trends",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ArticlesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#F7F7F7] py-5 lg:py-8 overflow-hidden">
      {/* Tabs */}
      <motion.div
        className="tabs py-2 border-b px-4 lg:px-[119px] border-[#EFF2F3] mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="flex items-center gap-5" variants={fadeInUp}>
          {tabs.map((tab, index) => (
            <motion.div
              key={tab}
              onClick={() => setActive(index)}
              className={clsx(
                "text-sm cursor-pointer pb-2 relative transition-colors",
                active === index
                  ? "text-[#1A1A1A] font-medium"
                  : "text-[#878A93] hover:text-[#1A1A1A]"
              )}
              variants={fadeInUp}
            >
              {tab}
              {active === index && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#1746A2] rounded-sm" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Articles */}
      <motion.div
        className="flex px-4 lg:px-[119px] items-center justify-center gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {[1].map((_, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="card lg:w-[370px] h-[390px] rounded-[32px] p-6 bg-[#FFFFFF]"
          >
            <Link href={`/growth-hub/${idx + 1}`}>
              <div className="top flex flex-col gap-1 mb-4">
                <div className="img relative rounded-[16px] bg-[url('/images/article1.svg')] lg:w-[322px] h-[207px] bg-cover bg-center">
                  <div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
                    <Clock className="w-[13.33px] h-[13.33px]" />
                    <span className="text-[#8C8C8C] text-xs">7mins Read</span>
                  </div>
                  <div className="absolute top-2 left-2 py-1 pl-1 pr-2 flex gap-1 bg-[#EFF6FB96] rounded-3xl">
                    <span className="text-[#1746A2] text-xs">7mins Read</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm lg:text-base font-normal text-[#6C757D]">08.08.2025</span>
                  <span className="text-sm lg:text-base font-normal text-[#1746A2]">by suleiman syd</span>
                </div>
              </div>
              <span className="text-[#0E1426] text-sm lg:text-lg font-normal">
                Learn how to market your business effectively with our marketing courses
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        className="px-4 lg:px-[119px] flex flex-col lg:flex-row items-center justify-between gap-6 my-4 lg:my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center lg:text-left" variants={fadeInUp}>
          <span className="text-2xl md:text-3xl font-semibold text-[#2F2F2F] lg:leading-[46px]">
            Join our newsletter and get the <br className="hidden md:block" />
            latest activities and trends <br className="hidden md:block" />
            updates into your <span className="text-[#1746A2]">inbox</span>
          </span>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          className="w-full lg:w-[545px] flex items-center border lg:h-[68px] border-[#D1DAEC] rounded-full overflow-hidden px-2 py-1 bg-[#F7F7F7]"
        >
          <input
            type="email"
            placeholder="mayorsuleimankhan1@gmail.com"
            className="flex-grow px-4 py-3 outline-none text-sm placeholder:text-gray-400"
          />
          <Button
            type="submit"
            className="rounded-full bg-[#1746A2] text-white px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ArticlesSection;
