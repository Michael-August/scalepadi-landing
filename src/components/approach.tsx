import Image from "next/image"

const OurApproach = () => {
    return (
        <div className="lg:h-[775px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0">
            <div className="top flex flex-col items-center justify-center gap-3.5">
                <span className="font-bold text-2xl lg:text-5xl">Our Approach</span>
                <span className="md:text-base text-sm text-center">Scale your business while learning form industry expert</span>
            </div>

            <div className="cards flex flex-wrap items-center justify-center lg:gap-6 gap-4">
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/approach1.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Growth Assessment & Strategy Mapping</span>
                        <span className="text-[#333333] text-center">AI + expert evaluation of business challenges</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/approach2.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Expert & Resource Connection</span>
                        <span className="text-[#333333] text-center">Smart matching with top growth professionals</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/approach3.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">Monitoring & Evaluation</span>
                        <span className="text-[#333333] text-center">Continuous tracking of growth outcomes</span>
                    </div>
                </div>
                <div className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white">
                    <div className="top flex items-center justify-center">
                        <Image src={'/images/approach4.svg'} alt="image" width={248} height={104} />
                    </div>
                    <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                        <span className="text-[#1A1A1A] text-[18px] font-semibold text-center">72-Hour Deployment</span>
                        <span className="text-[#333333] text-center">Businesses connect with their growth engine in under 3 days</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApproach
