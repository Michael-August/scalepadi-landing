import { Clock } from "lucide-react";
import Link from "next/link";

const RelatedArticles = () => {
    return (
        <div className="lg:h-[636px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0">
            <div className="w-full px-4 lg:px-[119px]">
                <span className="font-bold text-2xl lg:text-5xl text-[#1A1A1A]">Related Articles</span>
            </div>
            <div className="flex px-4 lg:px-[119px] items-center justify-center gap-6 flex-wrap">
                <Link href={'/growth-hub/1'} className="card lg:w-[370px] h-[390px] rounded-[32px] p-6 bg-[#FFFFFF]">
                    <div className="top flex flex-col gap-1 mb-4">
                        <div className="img relative rounded-[16px] bg-[url('/images/article1.svg')] lg:w-[322px] h-[207px] bg-cover bg-center">
                            <div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
                                <Clock className="w-[13.33px] h-[13.33px]" />
                                <span className="text-[#8C8C8C] text-xs">7mins Read</span>
                            </div>
                            <div className="absolute top-2 left-2 py-1 pl-1 pr-2 flex gap-1 bg-[#EFF6FB96] rounded-3xl">
                                <span className="text-[#1746A2] text-xs">7mins Read</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm lg:text-base font-normal text-[#6C757D]">08.08.2025</span>
                            <span className="text-sm lg:text-base font-normal text-[#1746A2]">by suleiman syd</span>
                        </div>
                    </div>
                    <span className="text-[#0E1426] text-sm lg:text-lg font-normal">Learn how to market your business effectively with ourmarketing courses</span>
                </Link>
            </div>
        </div>
    )
}

export default RelatedArticles;
