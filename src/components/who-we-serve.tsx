"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const WhoWeServe = () => {
    return (
        <div className="bg-[url('/images/we-serve-bg.svg')] bg-cover bg-center lg:h-[799px] mt-20 flex flex-col items-center justify-center gap-8 text-white py-6 lg:py-0">
            <div className="top flex flex-col items-center justify-center w-full lg:w-[634px] gap-3.5 px-4 lg:px-0">
                <span className="font-bold text-2xl lg:text-5xl">Who We Serve</span>
                <span className="md:text-base text-sm text-center">ScalePadi bridges the gap between businesses needing to scale and the experts who make it happen, all powered by AI precision.</span>
            </div>

            <div className="cards flex items-center justify-center w-full lg:gap-6 gap-4 flex-wrap">
                <div className="card px-5 pt-8 w-[314px] h-[355px] bg-white text-[#1A1A1A] flex flex-col gap-3 items-center rounded-[32px]">
                    <div className="w-[100px] h-[100px]">
                        <Image className="w-[inherit] h-[inherit]" src={'/images/we-serve1.svg'} alt="icon" width={75} height={75} />
                    </div>
                    
                    <span className="heading text-[18px] font-semibold">For Startups & SMEs</span>
                    <span className="text-base text-center text-[#333333]">Break through growth ceilings with tailored strategies and vetted talent, no more guesswork.</span>
                </div>
                <div className="card px-5 pt-8 w-[314px] h-[355px] bg-white text-[#1A1A1A] flex flex-col gap-3 items-center rounded-[32px]">
                    <div className="w-[100px] h-[100px]">
                        <Image className="w-[inherit] h-[inherit]" src={'/images/we-serve2.svg'} alt="icon" width={75} height={75} />
                    </div>
                    
                    <span className="heading text-[18px] font-semibold">For Growth Experts</span>
                    <span className="text-base text-center text-[#333333]">Find high-impact projects that match your skills and accelerate your career trajectory.</span>
                </div>
                <div className="card px-5 pt-8 w-[314px] h-[355px] bg-white text-[#1A1A1A] flex flex-col gap-3 items-center rounded-[32px]">
                    <div className="w-[100px] h-[100px]">
                        <Image className="w-[inherit] h-[inherit]" src={'/images/we-serve3.svg'} alt="icon" width={75} height={75} />
                    </div>
                    
                    <span className="heading text-[18px] font-semibold">For Investors & Partners</span>
                    <span className="text-base text-center text-[#333333]">Discover and support high-potential businesses backed by data-driven growth plans.</span>
                </div>
            </div>
            <Button className="flex font-semibold items-center gap-2 bg-[#FCCE37] text-[#1A1A1A]">
                Start for Free
                <ArrowRight />
            </Button>
        </div>
    )
}