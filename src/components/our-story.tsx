import Image from "next/image"

const OurStory = () => {
    return (
        <div className="flex items-center justify-between flex-col lg:flex-row gap-8 py-5 lg:py-0 lg:h-[844px] bg-white px-4 lg:pl-14">
            <div className="flex flex-col gap-2 lg:gap-3.5 w-full lg:w-[567px]">
                <span className="font-bold text-2xl lg:text-[32px] text-[#1A1A1A]">Our Story</span>
                <span className="text-base font-medium leading-[137%]">
                    For years, African businesses have faced recurring growth bottlenecks, ineffective strategies, and limited access to the right resources. At GrowthPadi, we worked with over 50 businesses and realized they needed more than just advice — they needed a repeatable system.
                    That led to the creation of ScalePadi — a scalable AI-powered platform that blends strategy, verified expertise, and actionable frameworks to help businesses grow smarter and faster.
                </span>
            </div>

            <div className="hidden lg:block h-[575px] w-[615px] bg-[#083690] rounded-tl-2xl rounded-bl-2xl overflow-visible pt-14">
                <div className="w-[749px] -ml-[134px]">
                    <Image src={'/images/people.svg'} alt="people" width={749} height={408.55} />
                </div>
            </div>

            <div className="block lg:hidden w-full">
                <div className="w-full">
                    <Image src={'/images/people.svg'} alt="people" width={749} height={408.55} />
                </div>
            </div>
        </div>
    )
}

export default OurStory
