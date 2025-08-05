"use client";

import { articleData } from "@/lib/constants/article";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Staggered animation container
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade-in upward animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ArticleRead = () => {
  const { category, title, subtitle, author, date, readTime, image, content } = articleData;

  return (
    <div className="pb-5 lg:pb-8 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[450px] md:h-[500px] lg:h-[580px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-end lg:pb-24 lg:pl-48">
          <motion.div
            className="text-white px-6 md:px-14 pb-12 lg:w-[800px]"
            variants={fadeInUp}
          >
            <p className="text-sm font-medium mb-2 px-[10px] py-[5px] rounded-[8px] bg-[#FFFFFF26] w-fit">
              {category}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">{title}</h1>
            <p className="mt-2 text-sm md:text-base text-[#E5E5E5]">{subtitle}</p>
            <p className="text-sm mt-3 font-light">
              By <span className="font-semibold">{author}</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Body Content */}
      <motion.div
        className="px-4 lg:px-[119px] py-10 flex gap-3 flex-col lg:flex-row lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        {/* Meta Info */}
        <motion.div
          className="flex gap-4 text-sm text-[#1A1A1A] w-fit mb-6 font-bold"
          variants={fadeInUp}
        >
          <span>{date}</span>
          <span>—</span>
          <span>{readTime}</span>
        </motion.div>

        {/* Article Content */}
        <motion.div className="flex-1" variants={containerVariants}>
          {content.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <motion.p
                  key={idx}
                  className="mb-5 text-[15px] leading-6 text-[#495057]"
                  variants={fadeInUp}
                >
                  {block.text}
                </motion.p>
              );
            }

            if (block.type === "heading") {
              return (
                <motion.h2
                  key={idx}
                  className="font-semibold text-[#1A1A1A] text-[17px] mb-2 mt-6"
                  variants={fadeInUp}
                >
                  {block.text}
                </motion.h2>
              );
            }

            if (block.type === "highlight") {
              return (
                <motion.p
                  key={idx}
                  className="bg-[#F3F6FA] p-4 rounded-md text-[#1746A2] text-sm leading-relaxed mb-5"
                  variants={fadeInUp}
                >
                  {block.text}
                </motion.p>
              );
            }

            if (block.type === "list") {
              return (
                <motion.ul
                  key={idx}
                  className="list-disc pl-5 space-y-2 leading-6 text-[#495057] text-[15px] mb-5"
                  variants={fadeInUp}
                >
                  {block.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </motion.ul>
              );
            }

            return null;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticleRead;
