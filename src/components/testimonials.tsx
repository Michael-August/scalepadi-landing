"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight} from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const testimonials = [
    {
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
        image: "/avatars/avatar1.jpg",
        message:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers.",
    },
    {
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
        image: "/avatars/avatar2.jpg",
        message:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers.",
    },
    {
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
        image: "/avatars/avatar3.jpg",
        message:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers.",
    },
    {
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
        image: "/avatars/avatar3.jpg",
        message:
          "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers.",
    },
    {
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
        image: "/avatars/avatar3.jpg",
        message:
          "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers.",
      },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(2)
    // const [animationDirection, setAnimationDirection] = useState("next")
  
    const nextTestimonial = () => {
    //   setAnimationDirection("next")
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
  
    const prevTestimonial = () => {
    //   setAnimationDirection("prev")
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const router = useRouter();

    return (
        <div className="w-full lg:py-20 py-6 bg-white text-center flex flex-col gap-5 mt-8">
            <div className="flex flex-col items-center justify-center gap-3.5">
                <span className="font-bold text-2xl lg:text-5xl">Testimonials</span>
                <span className="md:text-base text-sm text-center">Here are what our successful customer and talent are saying</span>
            </div>
            
            <div className="lg:py-10 py-5 flex flex-col gap-8 rounded-4xl px-4 lg:mx-14 bg-[#FEF3CF] lg:h-[549px]">

                {/* Navigation */}
                <div className="flex items-center justify-center gap-10">
                    <button
                        onClick={prevTestimonial}
                        className="w-14 h-12 bg-white cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border hover:scale-110 disabled:opacity-50 hover:shadow-xl"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-gray-500 font-medium">
                        {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>
                    <button
                        onClick={nextTestimonial}
                        className="w-14 h-12 bg-[#1746A2] cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-[#1746A2]/90 transition-all duration-300 hover:scale-110 disabled:opacity-50 hover:shadow-xl"
                    >
                        <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                </div>

                <div className="cards w-full overflow-x-scroll hide-scrollbar pb-4">
                    <div className="flex gap-7 items-start min-w-fit">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border flex flex-col gap-8 border-[#D1DAEC] bg-white w-[363px] h-[300px] shrink-0 transition-all ${
                                index % 2 !== 0 ? 'mt-14' : 'mt-0'
                                }`}
                            >
                                <span className="text-[#1A1A1A] font-medium text-base text-left">They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. </span>
                                <div className="flex items-center gap-3.5">
                                    <div className="w-[70px] h-[70px] flex items-center justify-center border-2 rounded-full border-[#D9CF42] overflow-hidden">
                                        <Image
                                            className="w-full h-full object-cover rounded-full"
                                            src="/images/testimonial-pic1.svg"
                                            alt="picture"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-[20px] text-left">Michael Kaizer</span>
                                        <span className="text-base font-medium text-[#878C91]">Co-hort 3 participant</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:pl-14 mt-16 items-center">
                <div className="pattners flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    <span className="text-[#010205] text-left w-[190px] font-semibold text-base">Trusted by the worlds biggest brands</span>
                    <div className="flex items-center justify-center flex-wrap gap-4 lg:gap-7">
                        <Image src={'/images/logo1.svg'} alt="partner logo" width={108} height={33} />
                        <Image src={'/images/logo2.svg'} alt="partner logo" width={108} height={33} />
                        <Image src={'/images/logo3.svg'} alt="partner logo" width={108} height={33} />
                        <Image src={'/images/logo3.svg'} alt="partner logo" width={108} height={33} />
                    </div>
                </div>
                <Button onClick={() => router.push('/wait-list')} className="flex items-center gap-2 bg-[#1746A2] text-white">
                    <span>Get Started Now</span>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
}

export default Testimonials

