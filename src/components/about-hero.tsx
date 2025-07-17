"use client";

import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import CountUp from "react-countup";
import { useRouter } from "next/navigation";

const AboutHero = () => {

    const router = useRouter()

    return (
        <div className="">
            <div className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center lg:h-[909px] lg:w-[1440px] flex w-full flex-col items-center pt-8 lg:pt-16">
                <div className="hero-pics lg:w-[1070px] w-full lg:rounded-4xl lg:h-[462px] p-4 bg-[#1A1A1A] lg:pl-14 flex flex-col items-center justify-center relative">
                    <div className="flex flex-col lg:gap-8 gap-5 items-center justify-center">
                        <div className="flex flex-col gap-3.5 text-white">
                            <span className="font-extrabold text-2xl lg:text-5xl lg:leading-[69.19px]">Empowering African Businesses with Scalable <span className="text-[#5F91F1]">Growth Solutions</span></span>
                            <span className="text-xs lg:text-sm leading-[27px]">
                                At ScalePadi, we’re on a mission to help African startups and SMEs overcome growth challenges with the power of AI-driven strategy and human-centered expertise.
                            </span>
                        </div>

                        <div className="flex items-start w-full">
                            <Button onClick={() => router.push('/wait-list')} className="flex font-semibold w-fit items-center gap-2 bg-[#FCCE37] text-black">
                                Join our Waitlist
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[1070px] lg:h-[462px] px-4 lg:px-0 flex flex-col mt-10 lg:mt-32 gap-4 lg:gap-6">
                    <span className="text-[#1A1A1A] font-semibold text-xl lg:text-4xl">
                        Recorded Impacts and Counting
                    </span>

                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="flex flex-col items-center justify-center">
                            <span className="font-bold text-[#1A1A1A] lg:text-[85px] text-3xl">
                                <CountUp end={50000} duration={2.5} separator="," suffix="+" />
                            </span>
                            <span className="text-[#878A93] text-center text-base lg:text-2xl leading-8">
                                Active community members
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <span className="font-bold text-[#1A1A1A] lg:text-[85px] text-3xl">
                                <CountUp end={6500} duration={2.5} separator="," suffix="+" />
                            </span>
                            <span className="text-[#878A93] text-base lg:text-2xl leading-8">
                                Businesses Empowered
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <span className="font-bold text-[#1A1A1A] lg:text-[85px] text-3xl">
                                <CountUp end={65} duration={2.5} separator="," suffix="+" />
                            </span>
                            <span className="text-[#878A93] text-base lg:text-2xl leading-8">
                                Active Professional Experts
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
