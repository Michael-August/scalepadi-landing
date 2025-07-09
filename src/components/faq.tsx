"use client";

import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
      question: "Who is the Academy for?",
      answer: "The Academy is for anyone looking to upskill and grow their career."
    },
    {
      question: "Is it free?",
      answer: "Absolutely. Upgrade/downgrade anytime with prorated billing."
    },
    {
      question: "Is the internship remote or physical?",
      answer: "It is completely remote, accessible from anywhere."
    },
    {
      question: "What happens after the internship?",
      answer: "You can apply for roles, get recommendations or join advanced programs."
    }
]

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className="lg:h-[594px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col gap-5 lg:gap-14 lg:py-14 py-4">
            <div className="px-4 lg:pl-16 flex flex-col gap-3">
                <span className="font-bold text-2xl lg:text-5xl lg:w-[465px] lg:leading-14">Frequently Asked <span className="text-[#1746A2]">Questions</span></span>

                <div className="w-full flex flex-col items-center justify-center">
                    <div className="card w-full lg:w-[504px]">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index
                        return (
                            <div
                                key={index}
                                className="border border-[#E0E0E0] rounded-2xl mb-3.5 overflow-hidden transition-shadow"
                            >
                                <button
                                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                                    onClick={() => toggle(index)}
                                >
                                    <span className="text-[#2F2F2F]">{faq.question}</span>
                                    {isOpen ? <Minus className="w-5 h-5 cursor-pointer" /> : <Plus className="w-5 h-5 cursor-pointer" />}
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-5 pt-4 pb-4 text-#000000 border-t border-gray-200">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
