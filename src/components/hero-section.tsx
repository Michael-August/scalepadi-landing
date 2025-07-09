"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() { 
    return (
        <div id="hero" className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center lg:h-[895px] w-full flex flex-col items-center gap-4 lg:pt-20 pt-10 px-4 lg:px-0">
            <div className="top lg:w-[892px] items-center justify-center flex flex-col gap-4">
                <div className="avatars flex lg:flex-row flex-col items-center gap-1">
                    <Image src={'/images/avatars.svg'} alt="Avatars" width={95} height={24} />
                    <span className="text-[#878A93] text-[10px] lg:text-base text-center">Over 6500+ Experts & Business owners use us</span>
                </div>
                <span className="font-bold text-center text-2xl lg:text-[64px] text-[#1A1A1A] lg:leading-[91px]">
                    Powering Business Growth with Technology and Talent
                </span>
                <span className="text-sm text-center text-[#1A1A1A]">Identify challenges, get expert-backed strategies, and scale efficiently all on one platform.</span>
                <div className="buttons flex items-center gap-3 justify-center mt-4">
                    <Button className="flex font-semibold items-center gap-2 bg-[#1746A2] text-white">
                        Join waitlist
                        <ArrowRight />
                    </Button>
                    <Button className="flex items-center gap-2 bg-transparent text-[#1746A2] hover:bg-[#1746A2] hover:text-white border border-[#1746A2]">
                        Explore ScalePadi
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <div className="down w-screen lg:w-[822px]">
                <video src={'/videos/hero-section.mp4'} autoPlay muted loop/>
            </div>
        </div>
    )
}