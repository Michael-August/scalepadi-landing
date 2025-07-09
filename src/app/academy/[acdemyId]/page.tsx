"use client"

import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AcademyId() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="relative rounded-2xl overflow-hidden shadow">
                <Image
                    src="/images/course-preview.svg"
                    alt="Course"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white text-sm px-3 py-1 rounded-full shadow font-medium">
                    3hrs, 30min
                </div>
            </div>

            {/* Right: Text content */}
            <div className="space-y-5">
                <h1 className="text-3xl font-bold">Sales Mastery</h1>

                <div className="flex items-center gap-2">
                    <Image
                        src="/images/author-dp.svg"
                        alt="David Eze Peters"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <p className="text-sm font-medium text-gray-700">David Eze Peters</p>
                </div>

                <p className="text-[#878A93] leading-6">
                    For professionals who want to transition into growth and help businesses scale as an expert, 
                    a consultant or a full-time growth engineer. This is a 3 month intensive training and 3 months 
                    internship working with a growth engineer on real business challenges.
                </p>

                <div className="flex items-center gap-6">
                    <Button className="bg-[#1746A2] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#123c8d]">
                        Apply Now
                        <ArrowRight />
                    </Button>
                    <a href="#" className="text-[#1746A2] underline text-sm font-medium">View Curriculum</a>
                </div>

                <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Image
                        src={'/images/avatars.svg'}
                        alt="User"
                        width={95}
                        height={23}
                        className="rounded-full border-2 border-white"
                    />
                    <p className="text-sm text-[#878A93]">Over 35+ certificates issued</p>
                </div>
            </div>
        </section>
    )
}
