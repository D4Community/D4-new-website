import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import teamImg from "@/app/assets/images/teamHeroImg.png"


export default function TeamPage() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <TeamHeroSection />
            </div>
            <Footer />
            <Background />
        </div>
    )
}

function TeamHeroSection () {
    return (
        <div>
            <HeroSection
                title={"Our Team Members"}
                img={teamImg}
                description={"D4 Community is an inclusive, open-source initiative driven by passionate individuals from diverse backgrounds. With contributions from a dedicated group of members and continuous input from the wider community, our mission is to build the ultimate, free platform for design and development enthusiasts."}
            />
        </div>
    )
}