import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import eventImg from "@/app/assets/images/eventsHeroImg.png"


export default function EventPage() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <EventHeroSection />
            </div>
            <Background />
        </div>
    )
}

function EventHeroSection () {
    return (
        <div>
            <HeroSection
                title={"All Events"}
                img={eventImg}
                description={"Step into a world where creativity meets technology. Our events brings together designers, developers, and tech enthusiasts to collaborate, learn, and innovate. Don't miss out on this unique opportunity to connect with industry leaders, showcase your skills, and drive the future of design and development!"}
            />
        </div>
    )
}