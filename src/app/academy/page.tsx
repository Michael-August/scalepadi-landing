import { Academy } from "@/components/academy"
import AcademyHero from "@/components/academy-hero"
import AcademyWorks from "@/components/academy-works"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"

const Page = () => {
    return (
        <div className="pb-5">
            <AcademyHero />
            <AcademyWorks />
            <Academy onlyCourses={true} />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default Page
