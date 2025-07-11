import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, Pin } from "lucide-react";

const Contact = () => {
    return (
        <div className="flex flex-col gap-4 lg:gap-8 px-60 py-8">
            <div className="w-full lg:w-[534px]">
                <span className="text-[#1A1A1A] text-2xl lg:text-5xl lg:leading-[69.19px] font-bold">Have <span className="text-[#1746A2]">Inquiries</span> about our Product ?</span>
            </div>

            <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row">
                <div className="w-full lg:w-[470px] bg-[#1A1A1A] text-white h-[582px] rounded-4xl px-4 lg:px-14 pt-12">
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col gap-1.5">
                            <span className="font-bold text-[32px] lg:leading-[100%]">Contact Information</span>
                            <span className="text-[18px] text-[#C9C9C9]">reach us , and . we will get back to you with the next 24hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone />
                            <span>+23434583975</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail />
                            <span>info@credova.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Pin />
                            <span>Number 23 Appo Legislative Quarters 
                            Central Business District Abuja, Nigeria</span>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col gap-6 w-full lg:w-[417px]">
                    <div className="form-group flex flex-col gap-2">
                        <Label className="text-[#1A1A1A] font-normal text-base">First name</Label>
                        <Input className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" placeholder="Enter your first name" />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                        <Label className="text-[#1A1A1A] font-normal text-base">Last name</Label>
                        <Input className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" placeholder="Enter your last name" />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                        <Label className="text-[#1A1A1A] font-normal text-base">Email address</Label>
                        <Input type="email" className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" placeholder="Enter your email" />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                        <Label className="text-[#1A1A1A] font-normal text-base">I am looking for information about:</Label>
                        <Textarea className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-2 py-7 shadow-none" placeholder="Enter your email" />
                    </div>

                    <div className="flex justify-end">
                        <Button className="flex w-fit gap-2 text-white bg-[#1746A2]">Submit <ArrowRight /></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
