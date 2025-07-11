import ArticlesSection from "@/components/articles-section"
import FAQ from "@/components/faq"
import GrowthHero from "@/components/growth-hero"

const GrowthHub = () => {
    return (
        <div className="pb-5">
            <GrowthHero />
            <ArticlesSection />
            <FAQ />
        </div>
    )
}

export default GrowthHub
