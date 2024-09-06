import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

export default function AboutPAge() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <AboutSection />
            </div>
            <Footer />
            <Background />
        </div>
    )
}

function AboutSection () {
    return (
        <div>
            <HeroSection />
        </div>
    )
}