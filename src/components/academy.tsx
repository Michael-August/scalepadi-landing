import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export const Academy = () => {
    return (
        <div className="lg:px-14 px-4 lg:py-12 py-6">
            <span className="font-bold text-2xl lg:text-5xl">ScalePadi Academy</span>
            <div className="mt-6 bg-[#D1DAEC] rounded-[16px] lg:h-[484px] px-2 lg:px-8 py-12 flex gap-8 lg:flex-row flex-col">
                <div className="lg:w-[390px] w-full flex flex-col lg:gap-6 gap-3.5">
                    <span className="lg:text-[32px] text-3xl font-bold text-[#1746A2]">Unlock Business Growth Expertise</span>
                    <span className="lg:text-lg text-sm font-normal">
                        ScalePadi Academy is a structured hands-on learning and career acceleration platform
                        designed to train individuals in business development and growth roles, provide career
                        mentorship and connect them with real-world job, projects and business opportunities.
                    </span>
                </div>
                <div className="flex-1 flex flex-col lg:flex-row gap-8">
                    <div className="card lg:w-[370px] h-[390px] rounded-[32px] p-6 bg-[#FBFCFC]">
                        <div className="top flex flex-col gap-1 mb-4">
                            <div className="img relative rounded-[16px] bg-[url('/images/academy1.svg')] lg:w-[322px] h-[207px] bg-cover bg-center">
                                <div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
                                    <Clock className="w-[13.33px] h-[13.33px]" />
                                    <span className="text-[#8C8C8C] text-xs">1hr:30min</span>
                                </div>
                            </div>
                            <div className="py-1 w-fit px-4 border bg-[#D2E7FA4D] border-[#D2E7FA] text-[#1E88E5] rounded-3xl">
                                <span className="text-sm lg:text-base font-normal">Sales Mastery</span>
                            </div>
                        </div>
                        <span className="text-[#0E1426] text-sm lg:text-lg font-normal">Learn how to market your business effectively with ourmarketing courses</span>
                    </div>
                    <div className="card lg:w-[370px] h-[390px] rounded-[32px] p-6 bg-[#FBFCFC]">
                        <div className="top flex flex-col gap-1 mb-4">
                            <div className="img relative rounded-[16px] bg-[url('/images/academy2.svg')] lg:w-[322px] h-[207px] bg-cover bg-center">
                                <div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
                                    <Clock className="w-[13.33px] h-[13.33px]" />
                                    <span className="text-[#8C8C8C] text-xs">1hr:30min</span>
                                </div>
                            </div>
                            <div className="py-1 w-fit px-4 border bg-[#D2E7FA4D] border-[#D2E7FA] text-[#1E88E5] rounded-3xl">
                                <span className="text-sm lg:text-base font-normal">Entrepreneurship </span>
                            </div>
                        </div>
                        <span className="text-[#0E1426] text-sm lg:text-lg font-normal">Learn how to market your business effectively with ourmarketing courses</span>
                    </div>
                </div>
            </div>

            <div className="lg:mt-16 mt-8 mx-auto lg:w-[1070px] w-full lg:h-[461px] rounded-2xl bg-[#1A1A1A] px-4 lg:pl-20 py-4 lg:pt-0 flex items-center gap-8 flex-col lg:flex-row">
                <div className="left lg:w-[404px] flex flex-col gap-7">
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-white text-3xl lg:text-[64px]">What You Gain</span>
                        <span className="font-medium text-white text-sm">Get in-demand skills and experience</span>
                    </div>
                    <Button className="bg-[#FCCE37] text-[#1A1A1A] flex text-base lg:w-[284px] gap-4">
                        Apply for the Next Cohort
                        <ArrowRight />
                    </Button>
                </div>
                <div className="right bg-white rounded-2xl lg:w-[569px] p-2 lg:p-6 lg:-mr-8">
                    <div className="items flex flex-col gap-[18px]">
                        <div className="item flex gap-3">
                            <Image src={'/icons/check.svg'} alt="check-icon" width={24} height={24} />
                            <span className="text-base font-normal lg:w-[382px]">In-demand growth skills in sales, strategy, marketing</span>
                        </div>
                        <div className="item flex gap-3">
                            <Image src={'/icons/check.svg'} alt="check-icon" width={24} height={24} />
                            <span className="text-base font-normal lg:w-[382px]">Work experience through structured internships</span>
                        </div>
                        <div className="item flex gap-3">
                            <Image src={'/icons/check.svg'} alt="check-icon" width={24} height={24} />
                            <span className="text-base font-normal lg:w-[382px]">Mentorship from industry experts and life-long learning opportunities</span>
                        </div>
                        <div className="item flex gap-3">
                            <Image src={'/icons/check.svg'} alt="check-icon" width={24} height={24} />
                            <span className="text-base font-normal lg:w-[382px]">Scale your career, increase revenue, connect with businesses in need of your skills</span>
                        </div>
                        <div className="item flex gap-3">
                            <Image src={'/icons/check.svg'} alt="check-icon" width={24} height={24} />
                            <span className="text-base font-normal lg:w-[382px]">A community and network of like-minded growth experts</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}