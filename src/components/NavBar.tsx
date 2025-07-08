"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full z-10 sticky top-0 bg-white border-b border-[#E5E8EB] px-4 py-3 lg:px-14 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Image src={'/logo.svg'} alt="Logo" width={104} height={27.54} />
                </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
                <Link href="#" className="text-gray-700 hover:text-[#1746A2] transition-colors">
                    Home
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#1746A2] transition-colors">
                    How It Works
                </Link>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-[#1746A2] transition-colors cursor-pointer">
                    <span>Resources</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
                <Link href="#" className="text-gray-700 hover:text-[#1746A2] transition-colors">
                    Contact
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#1746A2] transition-colors">
                    For Experts
                </Link>
                <div className="flex items-center space-x-4">
                    <Button
                        variant="outline"
                        className="border-[#1746A2] text-[#1746A2] hover:bg-[#1746A2] hover:text-white bg-transparent"
                    >
                        Join Waitlist
                    </Button>
                    <Button className="bg-[#1746A2] hover:bg-[#1746A2] text-white">For Business</Button>
                </div>
            </div>

            {/* Mobile nav */}
            <div className="flex lg:hidden items-center space-x-4">
                <Button
                    variant="outline"
                    className="border-[#1746A2] text-[#1746A2] hover:bg-[#1746A2] hover:text-white bg-transparent px-3"
                >
                    Join Waitlist
                </Button>
                <button onClick={() => setIsOpen(true)} className="text-[#1746A2]">
                    <Menu className="w-6 h-6" />
                </button>   
            </div>

            {/* Sidebar */}
            {isOpen && (
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 px-6 py-4 flex flex-col"
                >
                    <div className="flex items-center justify-between mb-6">
                        <Link href="/" className="flex items-center">
                            <Image src={'/logo.svg'} alt="Logo" width={104} height={27.54} />
                        </Link>
                        <button onClick={() => setIsOpen(false)}>
                            <X className="w-5 h-5 text-gray-800" />
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <Link href="#" className="text-gray-700 hover:text-[#1746A2]">Home</Link>
                        <Link href="#" className="text-gray-700 hover:text-[#1746A2]">How It Works</Link>
                        <div className="flex items-center space-x-1 text-gray-700 hover:text-[#1746A2]">
                            <span>Resources</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <Link href="#" className="text-gray-700 hover:text-[#1746A2]">Contact</Link>
                        <Link href="#" className="text-gray-700 hover:text-[#1746A2]">For Experts</Link>
                    </nav>
                </motion.div>
            )}
        </nav>
    )
}
