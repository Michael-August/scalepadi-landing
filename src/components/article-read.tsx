"use client";

import { articleData } from "@/lib/constants/article";
import Image from "next/image";

const ArticleRead = () => {

    const {
        category,
        title,
        subtitle,
        author,
        date,
        readTime,
        image,
        content,
    } = articleData

    return (
        <div className="pb-5 lg:pb-8">
            <div className="relative w-full h-[450px] md:h-[500px] lg:h-[580px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-end lg:pb-24 lg:pl-48">
                    <div className="text-white px-6 md:px-14 pb-12 lg:w-[800px]">
                        <p className="text-sm font-medium mb-2 px-[10px] py-[5px] rounded-[8px] bg-[#FFFFFF26] text-white w-fit">{category}</p>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                            {title}
                        </h1>
                        <p className="mt-2 text-sm md:text-base texet-[#E5E5E5]">{subtitle}</p>
                        <p className="text-sm mt-3 font-light">
                            By <span className="font-semibold">{author}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Body Section */}
            <div className="px-4 lg:px-[119px] py-10 flex gap-3 flex-col lg:flex-row lg:gap-8">
                <div className="flex gap-4 text-sm text-[#1A1A1A] w-fit mb-6 font-bold">
                    <span>{date}</span>
                    <span>—</span>
                    <span>{readTime}</span>
                </div>
                <div className="flex-1">
                    {content.map((block, idx) => {
                        if (block.type === "paragraph") {
                            return (
                                <p key={idx} className="mb-5 text-[15px] leading-6 text-[#495057]">
                                    {block.text}
                                </p>
                            )
                        }

                        if (block.type === "heading") {
                            return (
                                <h2 key={idx} className="font-semibold text-[#1A1A1A] text-[17px] mb-2 mt-6">
                                    {block.text}
                                </h2>
                            )
                        }

                        if (block.type === "highlight") {
                            return (
                                <p
                                    key={idx}
                                    className="bg-[#F3F6FA] p-4 rounded-md text-[#1746A2] text-sm leading-relaxed mb-5"
                                >
                                    {block.text}
                                </p>
                            )
                        }

                        if (block.type === "list") {
                            return (
                                <ul key={idx} className="list-disc pl-5 space-y-2 leading-6 text-[#495057] text-[15px] mb-5">
                                    {block?.items && block.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )
                        }

                        return null
                    })}
                </div>

            </div>
        </div>
    )
}

export default ArticleRead
