import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import aboutImg from "@/app/assets/images/abouthero.png"

export default function AboutPAge() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <AboutHeroSection />
            </div>
            <Footer />
            <Background />
        </div>
    )
}

function AboutHeroSection () {
    return (
        <div>
            <HeroSection
                title={"About D4 Community"}
                img={aboutImg}
                description={"An open-source, student-driven organization committed to nurturing community growth."}
                description2={"Our mission is to inspire and facilitate communication and collaboration among members of the tech community, share best practices, and promote technical expertise."}
                description3={"We are dedicated to creating an inclusive environment that welcomes individuals of all skill levels, from absolute beginners to seasoned experts."}
            />
        </div>
    )
}