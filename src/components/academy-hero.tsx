"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const AcademyHero = () => {
    return (
        <div className="lg:pb-16 pb-8">
            <div className="bg-[url('/images/academy-bg.svg')] bg-cover bg-center lg:h-[745.8px] lg:w-[1229px] flex w-full lg:mx-auto flex-col items-center justify-center relative">
                <div className="hero-pics lg:w-[1070px] rounded-4xl lg:h-[553.45px] bg-[url('/images/academy-hero.svg')] bg-cover bg-center pl-14 relative">
                    <div className="flex flex-col lg:gap-8 gap-5 lg:w-[697px] absolute bottom-20">
                        <div className="flex flex-col gap-3.5 text-white">
                            <span className="font-extrabold text-2xl lg:text-5xl lg:leading-[69.19px]">Unlock Business Growth Expertise</span>
                            <span className="text-sm lg:text-base leading-[27px]">
                                ScalePadi Academy is a structured hands-on learning and career acceleration platform
                                designed to train individuals in business development and growth roles, provide career
                                mentorship and connect them with real-world job, projects and business opportunities.
                            </span>
                        </div>

                        <Button className="flex font-semibold w-fit items-center gap-2 bg-[#1746A2] text-white">
                            Join the next cohort
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
                <span className="text-[#1746A2] text-lg absolute bottom-0">Explore  some  of  our Available  Courses</span>
            </div>
            <motion.div
                className="pt-10 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Image src={'/images/mouse.svg'} alt="mouse" width={24} height={24} />
            </motion.div>
        </div>
    )
}

export default AcademyHero
