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
        image: "/coreTeam/default.png",
        link: ""
    }, {
        name: "KaliaNag",
        bio: "kalu",
        designation: "Nig ra",
        image: "/coreTeam/default.png",
        link: ""
    }, {
        name: "KaliaNag",
        bio: "kalu",
        designation: "Nig ra",
        image: "/coreTeam/default.png",
        link: ""
    }, {
        name: "KaliaNag",
        bio: "kalu",
        designation: "Nig ra",
        image: "/coreTeam/default.png",
        link: ""
    }, {
        name: "KaliaNag",
        bio: "kalu",
        designation: "Nig ra",
        image: "/coreTeam/default.png",
        link: ""
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
                <div className="lg:hidden flex items-center justify-center">
                    <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                            {
                                coreTeam.map((prop, k) => {
                                    return (
                                        <CarouselItem key={k} >
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
                                <div className="relative md:min-h-24 md:min-w-24 min-h-[100px] min-w-[100px] rounded-full overflow-hidden bg-slate-400 border-[#EC5735] border-[1px]">
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