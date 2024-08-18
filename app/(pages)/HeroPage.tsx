import Image from "next/image";
import { BlurLeft, BlurRight } from "../components/BlurElement";
import HeroImage from "../assets/images/heroimg.png"
import { BlueButton, OrangeButton } from "../components/Buttons";

import d4logo from "../assets/images/d4logo.png"
import card1 from "../assets/images/heroCard1.png"
import card2 from "../assets/images/heroCard2.png"
import card3 from "../assets/images/heroCard3.png"

export default function HeroPage() {
    return (
        <div className="container">
            <HeroSection />
            <InfoSection />
        </div>
    )
}

// add hex images in hero section

function HeroSection() {
    return (
        <div>
            <div className="text-white md:pt-36 pt-28">
                <div className="flex items-center justify-center gap-6 z-10 relative">
                    <div className="flex flex-col lg:text-left lg:items-start text-center items-center md:gap-10 gap-10">
                        <h1 className="sm:text-[55px] text-[48px] font-bold sm:leading-[60px] leading-[50px] bg-[linear-gradient(to_left,#A46FF2,#E49976)] text-transparent bg-clip-text [-webkit-background-clip:text]">Improve your programming skills significantly.</h1>
                        <h3 className="sm:text-[24px] text-[16px]">With D4 Communities unique learning, practice, and coaching approach, you can master 70 programming languages. Exercising is enjoyable, beneficial, and completely free forever.</h3>

                        <div className="flex gap-5">
                            <OrangeButton label={"Join Now"} />
                            <OrangeButton label={"Explore"} />
                        </div>

                        <div className="flex items-center gap-10 pt-8">
                            <div>
                                <Image
                                    className="sm:w-[85px] min-w-[78px]"
                                    src={d4logo}
                                    alt={"d4 log0"} />
                            </div>
                            <p className="max-w-[450px] font-light sm:text-[16px] text-[14px]">is an autonomous, community financed, not-for-profit organisation.</p>
                            <BlueButton label={"learn more"} />
                        </div>
                    </div>
                    <div className=" hidden lg:flex">
                        <Image
                            className="w-[1020px]"
                            src={HeroImage}
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>
            <BlurLeft />
        </div>
    )
}

function InfoSection() {
    return (
        <div className="text-slate-200 z-10 relative sm:pt-32 pt-24">
            <div className="max-w-[920px]">
                <h1 className="text-[38px] font-bold leading-[48px]">There are over 6404 programming exercises. From "Allergies" to "Zebra Puzzle"</h1>
                <div className="h-[4px] max-w-[320px] rounded-md ml-1 bg-[linear-gradient(to_left,#A46FF2,#E49976)]"></div>
            </div>
            <div className="mt-10 flex items-center gap-12">
                <div className="flex flex-col gap-8">
                    <p className="text-[22px]">Learn by doing. Improve your programming skills by doing interesting coding tasks that help you comprehend the basics.</p>
                    <div className="flex flex-col gap-6">
                        <InfoCard title={"Dog Puzzle"} description={"Which inhabitants drink water? Who owns the dog? Could you solve the Dog."} src={card1} />
                        <InfoCard title={"Dog Puzzle"} description={"Which inhabitants drink water? Who owns the dog? Could you solve the Dog."} src={card2} />
                        <InfoCard title={"Dog Puzzle"} description={"Which inhabitants drink water? Who owns the dog? Could you solve the Dog."} src={card3} />
                    </div>
                </div>
                <div className="bg-blue-400">
                    imgs
                </div>
            </div>

            <div>
                info sections
            </div>
        </div>
    )
}


function InfoCard({src, title, description}:any) {
    return (
        <div className="bg-[#091B32] rounded-lg shadow-sm max-w-[820px]">
            <div className="p-5 flex items-center gap-6">
                <div>
                    <Image className="w-[110px]" src={src} alt="card 1" />
                </div>
                <div className="">
                    <h3 className="text-[25px] font-semibold">{title}</h3>
                    <p className="text-[18px] font-light">{description}</p>
                </div>
            </div>
        </div>
    )
}