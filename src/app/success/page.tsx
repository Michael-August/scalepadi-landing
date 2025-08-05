"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

const FloatingShape = ({
  color,
  size,
  top,
  left,
  delay = 0,
  shape = "square",
}: {
  color: string
  size: number
  top: string
  left: string
  delay?: number
  shape?: "square" | "rectangle"
}) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      },
    })
  }, [controls, delay])

  return (
    <motion.div
      className={`absolute ${color} ${shape === "rectangle" ? "rounded-md" : "rounded-full"}`}
      style={{
        width: shape === "rectangle" ? size * 1.6 : size,
        height: size,
        top,
        left,
      }}
      animate={controls}
      aria-hidden="true"
    />
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
}

export default function Success() {
  const shapes = [
    { color: "bg-orange-400", size: 12, top: "15%", left: "15%", delay: 0 },
    { color: "bg-blue-500", size: 8, top: "25%", left: "85%", delay: 1, shape: "rectangle" as const },
    { color: "bg-green-500", size: 10, top: "45%", left: "12%", delay: 2 },
    { color: "bg-purple-600", size: 8, top: "12%", left: "45%", delay: 0.5 },
    { color: "bg-cyan-400", size: 12, top: "35%", left: "75%", delay: 1.5 },
    { color: "bg-orange-500", size: 6, top: "55%", left: "25%", delay: 2.5, shape: "rectangle" as const },
    { color: "bg-green-400", size: 8, top: "65%", left: "80%", delay: 3 },
    { color: "bg-yellow-400", size: 10, top: "75%", left: "15%", delay: 1 },
    { color: "bg-pink-400", size: 6, top: "80%", left: "70%", delay: 2 },
    { color: "bg-indigo-500", size: 8, top: "20%", left: "70%", delay: 0.8 },
    { color: "bg-teal-400", size: 10, top: "50%", left: "90%", delay: 1.8 },
    { color: "bg-red-400", size: 6, top: "10%", left: "25%", delay: 2.2 },
  ]

  return (
    <div className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center w-full flex flex-col items-center gap-4 lg:pt-20 pt-10 px-4 mt-5 lg:px-0 pb-5 relative overflow-hidden">
      {/* Animated floating shapes */}
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}

      {/* Main content */}
      <motion.div
        className="relative flex flex-col items-center py-10 lg:pb-36 max-w-[670px] w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex lg:flex-row flex-col items-center gap-2 mb-6"
        >
          <Image src={'/images/avatars.svg'} alt="Avatars" width={95} height={24} />
          <span className="text-[#878A93] text-[10px] font-medium lg:text-base text-center">
            Over 6500+ Experts & Business owners use us
          </span>
        </motion.div>

        {/* Typewriter animated h1 */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] lg:leading-[75px] mb-4 text-center"
          aria-label="Welcome to the Future of Growth Careers!"
        >
          <Typewriter
            words={["Welcome to the Future of Growth Careers!"]}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={true}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-8 text-center"
        >
          Get early access to our academy + exclusive resources. Limited spots available.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="bg-[#1746A2] hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(23, 70, 162, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore ScalepaPadi"
          >
            Explore ScalepaPadi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
