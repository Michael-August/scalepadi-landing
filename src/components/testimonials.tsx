"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight} from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

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
    }
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
                    <div className="flex gap-7 items-start justify-center min-w-fit">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border flex flex-col gap-8 border-[#D1DAEC] bg-white w-[363px] h-[300px] shrink-0 transition-all ${
                                index % 2 !== 0 ? 'mt-14' : 'mt-0'
                                }`}
                            >
                                <span className="text-[#1A1A1A] font-medium text-base text-left text-ellipsis">
                                    {testimonial.message.split(' ').slice(0, 21).join(' ')}
                                    {testimonial.message.split(' ').length > 21 && '...'}
                                </span>
                                <div className="flex items-center gap-3.5">
                                    <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full  overflow-hidden">
                                        <Image
                                            className="w-full h-full object-cover rounded-full"
                                            src={testimonial.image || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBQYEB//EADUQAAIBAgQEAwUHBQEAAAAAAAECAAMRBBIhMQUTQVEiYXEjMlKBkQYUM2KhseFCQ3KS0cH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+2mmoFwLESgZmIBOhkBmJAuTMrABSQNYFWUIMyixkIc/hbWRTJZrMbjzlqnhHh0MCH9n7ul5KAOLtqYp+K+bWRUOVrLpp0gGJQ2XYayyoGF21JhLMtzrPPiMTToEhqmW3QawMudr2+VpfItrgazVVeLr/Yoi/wATzzNxLFN/cy+gEDdqxZgGOh8pdlCi66TnfveJ6V3+sn77irfjt89YG/Q5zZtpL+D3NLzS0+J4hfeyN8rT14filF/x1ZD33ED3pZ9WGshyUNl0EgurANSYEHqDLoAwu2p84BVVhmI1lC5vYaAQ7ENYEgdpkABW9oEZFte2sorsxsTvIzNmtczKygKbCBDKFXMosRMfMbuJKEswBNx5zLlXsIA2sbWvMKXzC4MKpBBtMjMCpCnU7WgKlspy/pK0tzm/WRTBVrsLCWqWYeHUwFXpb9JUVEp02eowCjctI5i0EepVOVQJosZi6mKfM2iD3UED0YziT1GIoXRD1O5ngJubnUnrEiAOsREBERAREQL0q1Si+ekxU9bdZtcLxFa5C1LI/ro008QOqS2UXtMTXzG21+k1mAxu1KsfJWP7GbhWULa4vAaZel5iQHMNT84ynNe0ysykaEXgRUtkNt/KYrnzlqYKsCRYTLnXuIEZ1OgOsxqpVgSNBGRhrf6SzOHBUXuYEuQ4KrqZVRkJLaDvCqU1a1vKeHi+KC0RSXRn39IHh4jiziqth+Ep8Pn5zyesRAREQEXkOwRSzEBRuT0mpxPGACRhkB/M/X5QNvE5xuI4tj+KR6ACXp8VxSblXHUMP+QOgiePBcQpYk5LZKnw3uPkZ7ICIiAm44ZiTWXlObuo37iaeXpVDRqrUQ2ZYHTZ12vrKKjKwJFgJSiebTWqnukXtMpcEFReBLMHFlOsx8t+0sFKHMbWHaW5q9jAjm30ta8jJk8V9pPLC69pAcv4SN4EluYMtrTnsbU5uKdr3A8I9JvcQeRh6tQbhTb1nNwEREBHpExYuoaOFq1F3VdIGm4tjDXqmlTPskP+xngvIiAiIgBobjQjqJ0PC8X94o5XPtE0PmO856ezhVU08dT7N4SPWB0UREBERA2/BsR7N6Lf0m6+hmxCZNb7TQ8MfLjUF/euJvc+Y5SLAwJzZ/Da15HK/N+knIE8QO0jmntACoxNjbWSUCgtuRtLFFAvaY1YsQCdDvA8vE6hOCqA9bTRzfcXQDBPYdRNFAiIiAnm4mpbA1gO09Mh1DoyNswIMDk5EyV6RoVnpNup37zHAREQE9HD1LY6iB8YvPPNpwPD3qmu2y3A8yYG6tERAREQMuGOXE0iPjE6QoF17TmaP41P/ITow5LAE3ECVYucrbGW5S+f1hlCi6i1pTmN3gA5uNb+Uu4AU2Goljax1EwpmzDNt1gYMbepg6o3st/pNDOoqhWpkC2otOZdDTdkbdTaBWIiAgxEDx8QwS4pLjw1R7rd/IzQ16NSg+WqpU/vOqmGvUw6qVxDUsvZ9YHL9I6Xm5YcIJvmQf43EyUDwtWvTNLN+b+YGuwXD6uJIZgUpjdiN/SdBSprSRUQAKo0hWDaqwYeRlhAREQERHpAz4Jc+LpL+a86NgACQNZpuC081d6h2VdPUzaJmuCdusCUYswBNxMuVewkVCMhsfpMP+0CVVrjQ/SZGKspAOpklwRa8xqpVrkWAgKYIOotNTxmiFriqp0ff1m5chhZdTPPXw4rUWpvpf3T2MDnoksrI7IwsVNjIgTPHjMfSw3h96p8I6esx8Uxxwy8ukfasN/hE0JJJJJuTqSesD1YjiOIrkgvkHwppPJ1v1iICIiBam70jemxU9wZscLxaopAxAzr8Q0P8zWRA6ujWSugekwZT2l5zGFxNTDVA9PXuvcTo8PWSvRWpTPhbYdoGSDHpPXw3CmvVzEXpobm/UwNjw6g1HDpmUgnUz2sQRYG5MnMu19ZRVIIJFoEICGBNx6zLnHxCVZgwsDeU5bdoEimwNz0klwwKgbxzA2lrXgJk8RMCFXI2Y7SWPM0HSM3M8NrRblm51geDiWBNQZ6duYBt8QmkdxTps7aBRc+Vp1V+adNLTU8c4W2KwtVcOVFZl2OgbvA4KvVatWepU3Y3MpMlalUoVWpVkZKimxVhqJjgIiICIiAiIgPnabPglcpWNA7PqPUTWTacA4bisbi6dSiuWkjXeo2w/6YG/w9CpiagSmPU9p0GHRMPSFJBoOvcyuHpU8KmSmvqe5mTJm8WwgMhveWLhtB1gVP6bSOXlOa+ggQqlDmbYS3NXz+kjPn8IvrHKPeANOwvfaQHz+G28jmMdLSzIFBYdIAryxm3gHm+Ha0hWL6Na3lJYcoXXr3gPwvO8AczXbpC+094+lpDE0zZdRvrA8fEuHYTHU+XiaQYr7rg2ZfQzluIfZXGUAXwbfeE3tsw+XWdsBnFyNZBYqco284Hy2rSq0XK16b02G6utrSk+qVcPSrpasiuD0YXE1dbgPC6xJOERD3psy/sbQPn8Tu3+yfDLXHPHpU/iRS+y/C89mp1WHnVP8A5A4W89WE4bjMabYfD1GU/wBZFl+p0nf0eEcPwhzUMHSDd2GY/Uz2KM41FgNgIHM8K+ydMe04hV5hBvyk0HzPWdIgTDotKlTUIBoALAS7HlmyyQOYLtv5QIC5/Ft5Qalja20guUNhawlsoIB/aBHL63kCpm8Nt5Gdr5dJYoFBIvp3gCuQZt7SOafh/WAxc5SBY9pblL3MCcqjUDWY1YkgE6GIgXcBAWXQyqHOSG1kxAVPAfDpCAVBdtTtEQIclTZdBLKoZQWFzEQKFje19JkyrvaIgY1cswDG4MuyhRdRYxECqEuSGNxDjJ7ukmIBAHF2FzIdihsugiIFlUMoJGsoWIawOkRAyZRa9tZjRiWsTpEQLuoQXUWImPmN3iIH/9k='}
                                            alt="picture"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-[16px] text-left">{testimonial.name}</span>
                                        <span className="text-base text-left font-medium text-[#878C91]">{testimonial.title}</span>
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
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex items-center justify-center gap-4 lg:gap-7 animate-scroll"
                        >
                            <Image src={'/images/logos/afrinolly.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/colad.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/onehealth.jfif'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/kartam.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/ibomsoups.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/Meekfi.svg'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/Mytherapist.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/retro.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/s&s.jpg'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/afrinolly.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/colad.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/onehealth.jfif'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/kartam.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/ibomsoups.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/Meekfi.svg'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/Mytherapist.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/retro.png'} alt="partner logo" width={108} height={33} />
                            <Image src={'/images/logos/s&s.jpg'} alt="partner logo" width={108} height={33} />
                        </div>
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

