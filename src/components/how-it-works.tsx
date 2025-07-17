"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
    {
      title: "AI-Powered Analysis",
      description:
        "Share your growth challenge. Our AI analyses it in minutes, pinpointing key bottlenecks.",
      video: "/videos/how-works1.mp4",
    },
    {
      title: "Get tailored strategies",
      description:
        "Receive a vetted strategy with expert-matched talent and tools, activated within 72 hours.",
      video: "/videos/how-works2.mp4",
    },
    {
      title: "Growth Execution & Tracking",
      description:
        "Implement with your dedicated Growth Engineer and track real-time results.",
      video: "/videos/how-works3.mp4",
    },
  ]

export default function HowItWorks() { 

    const [active, setActive] = useState(0)

    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % steps.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div id="how-it-works" className="bg-[url('/images/hero-bg.svg')] flex flex-col lg:flex-row items-center gap-4 mt-6 lg:py-12 py-6">
            <div className="w-full md:w-1/2 pl-4 lg:pl-14 relative">
                <span className="text-2xl lg:text-5xl font-bold">How ScalePadi Works</span>
                <div className="relative pl-6 mt-6">
                    <div className="absolute left-0 top-0 h-full w-0.5">
                        {Array.from({ length: steps.length * 8 }).map((_, i) => {
                            const isActive = i < (active + 1) * 8
                            return (
                                <div
                                    key={i}
                                    className={`w-full h-2 ${isActive ? "bg-[#1746A2]" : "bg-blue-200"} my-0.5`}
                                ></div>
                            )
                        })}
                    </div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`mb-8 cursor-pointer transition-opacity duration-300 relative ${
                                active === index ? "opacity-100" : "opacity-50"
                            }`}
                            onClick={() => setActive(index)}
                        >
                            <div
                                className={`w-6 h-6 flex items-center justify-center text-sm font-semibold rounded-full border-2 absolute -left-[34px] top-1 ${
                                active === index
                                    ? "bg-[#1746A2] text-white border-[#1746A2]"
                                    : "bg-white opacity-0 text-blue-400 border-blue-300"
                                }`}
                            >
                                {index + 1}
                            </div>
                            <h3
                                className={`font-semibold text-lg mb-2 ${
                                active === index ? "text-black" : "text-gray-500"
                                }`}
                            >
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 max-w-sm">{step.description}</p>
                        </div>
                    ))}
                    <Button onClick={() => router.push('/wait-list')} className="flex font-semibold items-center gap-2 bg-[#1746A2] text-white">
                        Get Started for Free
                        <ArrowRight />
                    </Button>
                </div>
            </div>

            <div className={`w-full md:w-1/2 relative rounded-tl-[8px] rounded-bl-[32px] hidden lg:block rounded-tr-[8px] h-[610px] ${active === 0 ? 'bg-[#FCCE37]' : 'bg-[#1746A2]'}`}>
                <div className="rounded-[8px] ml-10 mt-10 -mb-10 shadow-xl h-[610px]">
                    <AnimatePresence mode="wait">
                        <motion.video
                            key={steps[active].video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0.8 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <source src={steps[active].video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </motion.video>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}