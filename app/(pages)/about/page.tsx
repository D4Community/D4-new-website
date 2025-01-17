import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import aboutImg from "@/app/assets/images/abouthero.png"
import { Heading } from "@/app/components/Headings";
import Card from "@/app/components/Card";

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
            <Footer />
            <Background />
        </div>
    )
}

function AboutHeroSection() {
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
                    <Card
                        title={"Descite"}
                        description={"Develop Skills!! This is the first step in your journey. Learn the basics of programming and get a solid foundation."}
                    />

                    <Card
                        title={"Develop"}
                        description={"Build it!! Time to turn your dreams and ideas into reality by writing the code and creating your tech masterpiece."}
                    />

                    <Card
                        title={"Debug"}
                        description={"Fix it!! When things inevitably go haywire, you identify errors, issues and finally hunt down and fix those bugs."}
                    />

                    <Card
                        title={"Deploy"}
                        description={"Share it!! After your creation is polished and perfected, deploy it to the world, making it accessible to users."}
                    />
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
                <div className="bg-slate-400 w-[1280px] h-[720px] rounded-md shadow-md mx-10"></div>
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 justify-center pt-4 flex-wrap">
                    {reachInfo.map((prop, i) => {
                        return (
                            <div key={i}>
                                <h1 className="text-[#BFBFBF] text-[24px]">{prop.title}</h1>
                                <p className="font-semibold text-[34px]">{prop.reach}+</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


function FounderSection () {
    return (
        <div className="py-20">
            <Heading title={"From D4 Founders"} />
        </div>
    )
}