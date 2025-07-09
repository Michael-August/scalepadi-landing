"use client";
import Image from "next/image";

export const AcademyWorks = () => {
    return (
        <div className="lg:h-[775px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0">
            <div className="top flex flex-col items-center justify-center gap-3.5">
                <span className="font-bold text-2xl lg:text-5xl">How it Works</span>
                <span className="md:text-base text-sm text-center">Scale your business while learning form industry expert</span>
            </div>

            <div className="cards flex flex-wrap items-center justify-center lg:gap-6 gap-4">
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/step1.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Apply and Get Selected</span>
                        <span className="text-[#333333] text-center">Candidates go through a selection process based on experience and growth potential.</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/step2.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Learn and Develop</span>
                        <span className="text-[#333333] text-center">Comprehensive training in business growth and execution strategies.</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/step3.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Gain Real-World Experience</span>
                        <span className="text-[#333333] text-center">Participants are placed in internship roles to apply their skills.</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/step4.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Career Advancement</span>
                        <span className="text-[#333333] text-center">Graduates access freelance, full-time, and project-based opportunities.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademyWorks;
