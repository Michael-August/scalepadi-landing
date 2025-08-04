"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./MotionKit";

const testimonials = [
  {
    name: "Oreofe Ojurereoluwa Daniel",
    title: "Partnerships Lead Mytherapist.ng",
    image: "",
    message:
      "Working with Growthpadi has been a great experience. As a mental health organisation, Mytherapist.ng needed help improving how we handle business development, and they really came through. Their advice on how to improve our sales process from finding leads to closing deals made a big difference for us. The weekly check-ins were super helpful, and the feedback I received really helped us sharpen our approach and messaging. They were always professional, quick to respond, and also genuinely invested in our success (Anita's top notch check ins 🫶🏼) One thing I'd say is that we didn't fully utilise them to a large extent because they had so much to give but overall, the partnership has been really beneficial. I'm glad to have worked with them and definitely would recommend Growthpadi to any business looking for practical support.",
  },
  {
    name: "Tamaraefieye Isaac",
    title: "Founder Kartam Financial",
    image: "",
    message:
      "I am the founder of Kartam Financial, a company based in the United States. I was starting a new business and I did not know how to kick it off and very unmotivated, that when I found Growth Padi and my business journey had been great ever since. Growthpadi has helped me with the start of my new business by helping bring my ideas and vision to reality by helping me understand how to manage’ market and create a brand for my business. They have also help me understand my customers and ways I can reach them. Growth Padi do not just do the work themselves but involve you in all their processes, so you can be educated and become a better business owner. They also have helped me curate my brand identity, which I was struggling with. I will highly recommend Growth Padi to anyone struggling to start up their business or have an idea but don’t know what to do. The people at Growth Padi work hard and consistently to give you the best services. My business is off the ground and I have began to get clients for my business. I could not have done all this without Growth Padi.",
  },
  {
    name: "Oreofe Ojurereoluwa Daniel",
    title: "Partnerships Lead, Mytherapist.ng",
    image: "",
    message:
      "Working with Growthpadi has been a great experience. As a mental health organisation, Mytherapist.ng needed help improving how we handle business development, and they really came through. Their advice on how to improve our sales process from finding leads toclosing deals made a big difference for us.The weekly check-ins were super helpful, and the feedback I received really helped us sharpen our approach and messaging. They were always professional, quick to respond, and also genuinely invested in our success (Anita's top notch check ins) One thing I'd say is that we didn't fully utilise them to a large extent because they had so much to give but overall, the partnership has been really beneficial. I'm glad to have worked with them and definitely would recommend Growthpadi to any business looking for practical support.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full lg:py-20 py-6 bg-white text-center flex flex-col gap-5 mt-8">
      <div className="flex flex-col items-center justify-center gap-3.5">
        <span className="font-bold text-2xl lg:text-5xl">Testimonials</span>
        <span className="md:text-base text-sm text-center">
          Here are what our successful customer and talent are saying
        </span>
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
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={nextTestimonial}
            className="w-14 h-12 bg-[#1746A2] cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-[#1746A2]/90 transition-all duration-300 hover:scale-110 disabled:opacity-50 hover:shadow-xl"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Testimonials */}
        <div className="cards w-full overflow-x-scroll hide-scrollbar pb-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-7 items-start justify-center min-w-fit"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`p-8 rounded-2xl border flex flex-col gap-8 border-[#D1DAEC] bg-white w-[363px] h-[300px] shrink-0 transition-all ${
                  index % 2 !== 0 ? "mt-14" : "mt-0"
                }`}
              >
                <span className="text-[#1A1A1A] font-medium text-base text-left text-ellipsis">
                  {testimonial.message.split(" ").slice(0, 21).join(" ")}
                  {testimonial.message.split(" ").length > 21 && "..."}
                </span>
                <div className="flex items-center gap-3.5">
                  <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src={
                        testimonial.image ||
                        "/images/default-user.png"
                      }
                      alt="profile"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-[16px] text-left">
                      {testimonial.name}
                    </span>
                    <span className="text-base text-left font-medium text-[#878C91]">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partners + CTA */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:pl-14 mt-16 items-center">
        <div className="pattners flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <span className="text-[#010205] text-left w-[190px] font-semibold text-base">
            Trusted by the world's biggest brands
          </span>
          <div className="w-full overflow-hidden">
            <div className="flex items-center justify-center gap-4 lg:gap-7 animate-scroll">
              {[
                "afrinolly.png",
                "colad.png",
                "onehealth.jfif",
                "kartam.png",
                "ibomsoups.png",
                "Meekfi.svg",
                "Mytherapist.png",
                "retro.png",
                "s&s.jpg",
              ].map((logo, i) => (
                <Image
                  key={i}
                  src={`/images/logos/${logo}`}
                  alt="partner logo"
                  width={108}
                  height={33}
                />
              ))}
            </div>
          </div>
        </div>
        <Button
          onClick={() => router.push("/wait-list")}
          className="flex items-center gap-2 bg-[#1746A2] text-white"
        >
          <span>Get Started Now</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
