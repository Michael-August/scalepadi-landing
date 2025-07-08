"use client";
import Image from "next/image";

export const WhyChoose = () => {
    return (
        <div className="lg:h-[775px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0">
            <div className="top flex flex-col items-center justify-center gap-3.5">
                <span className="font-bold text-2xl lg:text-5xl">Why Choose <span className="text-[#1746A2]">ScalePadi</span></span>
                <span className="md:text-base text-sm text-center">Experience the difference with our innovative approach to business growth.</span>
            </div>

            <div className="cards flex flex-wrap items-center justify-center lg:gap-6 gap-4">
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/choose1.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Vetted and Qualified Experts</span>
                        <span className="text-[#333333] text-center">Access Africa’s top 5% growth talent, pre-screened for your specific challenges.</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/choose2.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Tailored Recommendations and Strategy</span>
                        <span className="text-[#333333] text-center">Get strategies tailored by our AI and refined by seasoned Growth Engineers</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/choose3.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Fast Expert Matching (72 hrs)</span>
                        <span className="text-[#333333] text-center">From challenge to execution in 3 days, 70% faster than traditional consulting.</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/choose4.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Comprehensive Business Tools</span>
                        <span className="text-[#333333] text-center">A full-suite platform combining strategy, expert matching, and performance tracking.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}