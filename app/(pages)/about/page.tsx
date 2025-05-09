import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import aboutImg from "@/app/assets/images/abouthero.png"
import { Heading } from "@/app/components/Headings";
import Card from "@/app/components/Card";
import { CardType } from "@/types/cards";
import FounderCard from "@/app/components/FounderCard";
import { FounderType } from "@/types/founder";
import Image from "next/image";

export default function AboutPAge() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <AboutHeroSection />
            </div>
            <ReachSection />
            <div className="container z-10 relative">
                <FounderSection />
            </div>
            <Background />
        </div>
    )
}

function AboutHeroSection() {
    const AboutCards: CardType[] = [{
        title: "Descite",
        description: "Develop Skills!! This is the first step in your journey. Learn the basics of programming and get a solid foundation."
    }, {
        title: "Develop",
        description: "Build it!! Time to turn your dreams and ideas into reality by writing the code and creating your tech masterpiece."
    }, {
        title: "Debug",
        description: "Fix it!! When things inevitably go haywire, you identify errors, issues and finally hunt down and fix those bugs."
    }, {
        title: "Deploy",
        description: "Share it!! After your creation is polished and perfected, deploy it to the world, making it accessible to users."
    }]

    return (
        <div>
            <HeroSection
                title={"About D4 Community"}
                img={aboutImg}
                description={"An open-source, student-driven organization committed to nurturing community growth."}
                description2={"Our mission is to inspire and facilitate communication and collaboration among members of the tech community, share best practices, and promote technical expertise."}
                description3={"We are dedicated to creating an inclusive environment that welcomes individuals of all skill levels, from absolute beginners to seasoned experts."}
            />

            <div className="py-12">
                <Heading
                    title={"Our Pillars"}
                />

                <div className="flex md:flex-row flex-col py-10">
                    {
                        AboutCards.map((props, k) => {
                            return (
                                <Card title={props.title} description={props.description} key={k} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


function ReachSection() {

    const reachInfo = [{
        title: "Successful Events",
        reach: 10
    }, {
        title: "Community Partners",
        reach: 10
    }, {
        title: "Sponsors",
        reach: 10
    }, {
        title: "College Partners",
        reach: 10
    }]

    return (
        <div className="py-5 bg-[#091B32]">
            <div className="container z-10 relative flex flex-col gap-10 py-8">
                <div>
                    <Heading title={"Our Reach"} />
                </div>
                <div className="relative bg-slate-400 xl:h-[720px] lg:h-[540px] md:h-[340px] h-[240px] w-[100%] rounded-sm shadow-md overflow-hidden">
                    <Image 
                        src="/extra/map.png"
                        fill
                        objectFit="cover"
                        alt="reach"
                    />
                </div>
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 justify-center pt-4 flex-wrap">
                    {reachInfo.map((prop, i) => {
                        return (
                            <div key={i}>
                                <h1 className="text-[#BFBFBF] md:text-[24px] text-[16px]">{prop.title}</h1>
                                <p className="font-semibold md:text-[34px] text-[24px]">{prop.reach}+</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


function FounderSection() {
    const FounderInfo: FounderType[] = [{
        name: "Ayush Kumar Tiwari - Co-Founder D4",
        title: "Tomorrow should be better than today.",
        description: "We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.",
        link: "https://www.linkedin.com/in/itsayu",
        image: "/founderImg/AyushKumarTiwari.png",
        reverse: true // reverse is for css card reversing (optional)
    }, {
        name: "Sagar Malhotra - Co-Founder D4",
        title: "See how we can help you progress",
        description: "We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, designdigital, comms and social research.",
        link: "https://www.linkedin.com/in/sagar0-0malhotra",
        image: "/founderImg/Sagar.png",
        reverse: false
    }]
    return (
        <div className="py-20">
            <Heading title={"From D4 Founders"} />
            <div className="lg:py-44 py-32 flex flex-col lg:gap-48 gap-32">
                {
                    FounderInfo.map((props, k) => {
                        return (
                            <FounderCard 
                                key={k}
                                name={props.name}
                                title={props.title}
                                description={props.description}
                                link={props.link}
                                src={props.image}
                                reverse={props.reverse}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}