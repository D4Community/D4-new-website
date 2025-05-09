'use client'
import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";

import teamImg from "@/app/assets/images/teamHeroImg.png"
import { Heading } from "@/app/components/Headings";
import CoreTeamCard from "@/app/components/CoreTeamCard";
import { useState } from "react";
import { TeamType } from "@/types/team";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function TeamPage() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <TeamHeroSection />
                <CoreTeamSection />
                <PartnerSection />
            </div>
            <Background />
        </div>
    )
}

function TeamHeroSection() {
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

function CoreTeamSection() {
    const coreTeam: TeamType[] = [{
        name: "Ayush Anshu",
        bio: "friednly neighbourhood web developer",
        designation: "Web Team Lead",
        image: "/coreTeam/ayush24k.png",
        link: "https://www.linkedin.com/in/ayushanshu"
    }, {
        name: "Devansh Srivastava",
        bio: "Devansh is a passionate and self-motivated individual currently in the final year of graduation, with a strong foundation in Python and experience working with NoSQL databases. Proficient in Python frameworks like Django, with hands-on knowledge of PHP and other backend technologies. Currently serving as the Management Lead at D4 Community, showcasing strong managerial skills and driving initiatives focused on community growth and collaboration. A keen learner with a curiosity to explore and adapt to new technologies, driven to solve problems and build efficient solutions.",
        designation: "Management Lead",
        image: "/coreTeam/DevanshSrivastava.svg",
        link: "https://www.linkedin.com/in/devansh-srivastava-95a343204/"
    }, {
        name: "Bhumika Varshney",
        bio: "A passionate and motivated second-year B.Tech Computer Science student with fundamental skills inprogramming and a keen interest in software engineering, seeking an internship opportunity in Google's STEP program to further develop technical skills and gain hands-on experience in software development",
        designation: "Social Media Team Lead",
        image: "/coreTeam/BhumikaVarshney.svg",
        link: "https://www.linkedin.com/in/bhumika-varshney-90ba64295/"
    }, {
        name: "Devishi Aggarwal",
        bio: "Campus lead of D4 community , CU",
        designation: "Campus Lead CU",
        image: "/coreTeam/DevishiAggarwal.png",
        link: "https://www.linkedin.com/in/devishiaggarwal/"
    }, {
        name: "Dhairya Ahuja",
        bio: "developer",
        designation: "Scoial Media Team Lead",
        image: "/coreTeam/DhairyaAhuja.png",
        link: "https://www.linkedin.com/in/dhairya-ahuja-1b3b74286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }, {
        name: "Qazi Zaid",
        bio: "Graphic Designing Lead @D4 Community | Student Ambassador @ The Esports Club (TEC) | Campus Ambassador @HackwithIndia | UI/UX Designer | Web Developer | Tech Enthusiast | CSE'27",
        designation: "Graphic Team Lead",
        image: "/coreTeam/QaziZaid.png",
        link: "https://www.linkedin.com/in/qazi-zaid/"
    }]

    const [selectedTeamMember, setSelectedTeamMeber] = useState<TeamType | null>(null);

    const openPopUp = (member: TeamType) => {
        setSelectedTeamMeber(member)
    }

    const closePopUp = () => {
        setSelectedTeamMeber(null)
    }

    return (
        <div className="py-20">
            <Heading title={"Core Team"} />
            <div className="py-36">
                <div className="lg:flex hidden flex-wrap justify-center gap-24 ">
                    {
                        coreTeam.map((prop, k) => {
                            return (
                                <div key={k} onClick={() => openPopUp(prop)} className="cursor-pointer">
                                    <CoreTeamCard
                                        name={prop.name}
                                        bio={prop.bio}
                                        designation={prop.designation}
                                        image={prop.image}
                                        link={prop.link}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="lg:hidden flex items-center gap-10 justify-center">
                    <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                            {
                                coreTeam.map((prop, k) => {
                                    return (
                                        <CarouselItem key={k}>
                                            <div key={k} onClick={() => openPopUp(prop)} className="cursor-pointer">
                                                <CoreTeamCard
                                                    name={prop.name}
                                                    bio={prop.bio}
                                                    designation={prop.designation}
                                                    image={prop.image}
                                                    link={prop.link}
                                                />
                                            </div>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious className="bg-[#EC5735]" />
                        <CarouselNext className="bg-[#EC5735]" />
                    </Carousel>
                </div>
            </div>

            {/* // team member card openPopU */}
            {
                selectedTeamMember && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="bg-[#0E0C15]/80 shadow-sm rounded-lg max-w-4xl w-full p-12 backdrop-blur-md border-[1px] border-[#EC5735]">
                            <button
                                className="absolute top-4 right-4 text-white hover:text-[#EC5735]"
                                onClick={closePopUp}
                            >
                                &#x2715;
                            </button>

                            <div className="flex items-center gap-6">
                                <div className="relative md:min-h-24 md:min-w-24 min-h-[100px] min-w-[100px] rounded-full overflow-hidden bg-white border-[#EC5735] border-[1px]">
                                    <Image
                                        src={selectedTeamMember.image}
                                        alt={selectedTeamMember.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="md:text-2xl text-md font-bold">{selectedTeamMember.name}</h3>
                                    <p className="text-white font-light text-sm">{selectedTeamMember.designation}</p>
                                    <a
                                        href={selectedTeamMember.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline inline-flex items-center mt-2 text-sm"
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>

                            <p className="mt-6 text-white text-[16px]">{selectedTeamMember.bio}</p>

                            <button
                                className="mt-6 px-6 py-2 bg-squidPink text-white bg-[#EC5735] rounded-lg hover:bg-[#a3412b]"
                                onClick={closePopUp}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

function PartnerSection () {
    return (
        <div className="pb-20">
            <Heading title={"Our Partners"} />
        </div>
    )
}