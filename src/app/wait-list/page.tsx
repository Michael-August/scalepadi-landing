"use client"

import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WaitList = () => {

    return (
        <div className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center w-full flex flex-col items-center gap-4 lg:pt-20 pt-10 px-4 lg:px-0 pb-5">
            <div className="px-4 py-10 lg:py-20 lg:px-[119px] gap-10 lg:gap-20 flex flex-col lg:flex-row">
                <div className="form lg:w-[417px]">
                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSec7zSsjvx1T62Cf5f0Hk9IKRb9i2hnmlRu1tE3YZ-NkDE02A/formResponse" method="POST" target="_blank" className="flex relative flex-col gap-[18px]">
                        <div className="form-group flex flex-col gap-2">
                            <Label className="text-[#1A1A1A] font-normal text-base">First name</Label>
                            <Input name="entry.1994526435" className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" required placeholder="Enter your first name" />
                        </div>
                        <div className="form-group flex flex-col gap-2">
                            <Label className="text-[#1A1A1A] font-normal text-base">Last name</Label>
                            <Input name="entry.1646160413" className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" required placeholder="Enter your last name" />
                        </div>
                        <div className="form-group flex flex-col gap-2">
                            <Label className="text-[#1A1A1A] font-normal text-base">Email address</Label>
                            <Input name="entry.494779770" type="email" className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" required placeholder="Enter your email" />
                        </div>

                        <div className="form-group flex flex-col gap-2">
                            <Label className="text-[#1A1A1A] font-normal text-base">What are you joining as</Label>
                            <select name="entry.590988085" className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-4 w-full" required>
                                <option>kindly select what you do for a living</option>
                                <option>Aspiring Growth Expert</option>
                                <option value="">Business Owner (Hire Talent)</option>
                                <option>Student/Recent Grad</option>
                            </select>
                        </div>

                        <div className="form-group flex flex-col gap-2">
                            <Label className="text-[#1A1A1A] font-normal text-base">I am looking for information about:</Label>
                            <Textarea name="entry.414716084" className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" required placeholder="What are you looking for" />
                        </div>

                        <Button type="submit" className="flex w-fit gap-2 text-white bg-[#1746A2]">Submit <ArrowRight /></Button>
                    </form>
                </div>
                <div className="flex-1 flex flex-col gap-4 lg:gap-5">
                    <div className="avatars flex lg:flex-row flex-col items-center gap-1">
                        <Image src={'/images/avatars.svg'} alt="Avatars" width={95} height={24} />
                        <span className="text-[#878A93] text-[10px] font-medium lg:text-base text-center">Over 6500+ Experts & Business owners use us</span>
                    </div>
                    <span className="text-[#1A1A1A] font-bold text-3xl lg:text-5xl lg:leading-[75px]">
                        Join Africa’s Next Generation of <span className="text-[#1746A2]">Growth Experts</span>
                    </span>
                    <span className="text-[#1A1A1A] text-base font-normal">Get early access to our academy + exclusive resources. Limited spots available.</span>
                </div>
            </div>
        </div>
    )
}

export default WaitList;
