import Image from "next/image";
import Background from "../components/Background";
import HeroImage from "../assets/images/heroimg.png"
import { BlueButton, OrangeButton } from "@/app/components/Buttons";

import d4logo from "../assets/images/d4logo.png"
import card1 from "../assets/images/heroCard1.png"
import card2 from "../assets/images/heroCard2.png"
import card3 from "../assets/images/heroCard3.png"

import bracketIcon from "../assets/icons/bracketIcon.png"
import chatIcon from "../assets/icons/chatIcon.png"
import terminalIcon from "../assets/icons/terminalIcon.png"
import mentoringImg from "../assets/images/mentoringImg.png"
import mentoring1 from "../assets/icons/mentoring1.png"
import mentoring2 from "../assets/icons/mentoring2.png"
import mentoring3 from "../assets/icons/mentoring3.png"

import Card from "../components/Card";
import { BigHeading, Heading } from "../components/Headings";
import Footer from "../components/Footer";

export default function HeroPage() {
    return (
        <div className="relative overflow-hidden text-white">
            <div className="container z-10 relative">
                <HeroSection />
                <InfoSection />
                <MentorSection />
                <FooterCall />
            </div>
            <Footer />
            <Background />
        </div>
    )
}

function HeroSection() {
    return (
        <div>
            <div className="md:pt-52 pt-[190px]">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex flex-col lg:text-left lg:items-start text-center items-center md:gap-10 gap-10">
                        <h1 className="sm:text-[55px] text-[41px] font-bold sm:leading-[60px] leading-[50px] bg-[linear-gradient(to_left,#A46FF2,#E49976)] text-transparent bg-clip-text [-webkit-background-clip:text]">Improve your programming skills significantly.</h1>
                        <h3 className="sm:text-[24px] text-[14px]">With D4 Communities unique learning, practice, and coaching approach, you can master 70 programming languages. Exercising is enjoyable, beneficial, and completely free forever.</h3>

                        <div className="flex gap-5">
                            <OrangeButton label={"Join Now"} />
                            <OrangeButton label={"Explore"} />
                        </div>

                        <div className="flex items-center sm:gap-10 gap-8 pt-8">
                            <div>
                                <Image
                                    className="sm:w-[85px] min-w-[78px]"
                                    src={d4logo}
                                    alt={"d4 log0"} />
                            </div>
                            <p className="max-w-[450px] font-light sm:text-[16px] text-[11px]">is an autonomous, community financed, not-for-profit organisation.</p>
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
            {/* <BlurLeft top={380} /> */}
        </div>
    )
}

function InfoSection() {
    return (
        <div className="">
            <div className="sm:pt-32 pt-24">
                <div className="max-w-[920px]">
                    <BigHeading title={`There are over 6404 programming exercises. From "Allergies" to "Zebra Puzzle"`} />
                </div>
                <div className="mt-10 flex lg:flex-row-reverse md:flex-col items-center gap-12">
                    <div className="bg-blue-400 hidden md:block">
                        imgs
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="sm:text-[22px] text-[16px]">Learn by doing. Improve your programming skills by doing interesting coding tasks that help you comprehend the basics.</p>
                        <div className="flex flex-col gap-6">
                            <InfoCard title={"Dog Puzzle"} description={"Which inhabitants drink water? Who owns the dog? Could you solve the Dog."} src={card1} />
                            <InfoCard title={"Dog Puzzle"} description={"Which inhabitants drink water? Who owns the dog? Could you solve the Dog."} src={card2} />
                            <InfoCard title={"Dog Puzzle"} description={"Which inhabitants drink water? Who owns the dog? Could you solve the Dog."} src={card3} />
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex sm:flex-row flex-col sm:gap-4 gap-1">
                    <Card src={bracketIcon} title={"Write code locally, in your own space"} description={"Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal."} />
                    <Card src={terminalIcon} title={"Use the Exercism in-browser editor"} description={"Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal."} />
                    <Card src={chatIcon} title={"Get automated analysis on your code"} description={"Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal."} />
                </div>
            </div>
            {/* <BlurRight top={2350} /> */}
        </div>
    )
}


function InfoCard({ src, title, description }: any) {
    return (
        <div className="bg-[#091B32] rounded-lg shadow-sm max-w-[820px]">
            <div className="p-5 flex items-center gap-6">
                <div>
                    <Image className="w-[110px] min-w-[40px]" src={src} alt="card 1" />
                </div>
                <div className="">
                    <h3 className="sm:text-[25px] text-[20px] font-semibold">{title}</h3>
                    <p className="sm:text-[18px] text-[15px] font-light">{description}</p>
                </div>
            </div>
        </div>
    )
}


function MentorSection() {
    return (
        <div>
            <div className="sm:pt-32 pt-28">
                <div className="flex items-center justify-center gap-24">
                    <div className="flex md:flex-row flex-col md:items-center gap-10">
                        <div className="">
                            <Image className="lg:max-w-[520px] max-w-[320px]" src={mentoringImg} alt="img" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div>
                                <BigHeading title={"Deepen your knowledge with human mentoring, for free."} />
                            </div>
                            <p className="sm:text-[26px] md:text-[20px] text-[16px]">Discover new and exciting ways to approach an exercise by getting mentored on it. Become more familiar with the conventions, idioms and opinions of a particular programming language.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div>
                        <Heading title={"Why mentoring?"} />
                    </div>
                    <div className="flex md:flex-row flex-col sm:gap-7 gap-4 pt-8">
                        <Card src={mentoring1} title={"You don't know what you don't know"} description={"The most difficult aspect of learning a new language is failing to recognise your own knowledge deficiencies. Our mentors can look at your code and quickly identify concepts you're unfamiliar with, allowing you to advance by gaining new information."} />
                        <Card src={mentoring2} title={"Learn language-specific conventions"} description={"Being fluent in a language is more than just being able to write code in it; it also means being able to think in that language. Our mentors will help you change your thinking so that you can produce idiomatic code."} />
                        <Card src={mentoring3} title={"Learning with others is fun"} description={"Receiving input from real people is a really interesting method to learn. Becoming a mentor and providing feedback yourself is an even greater step forward. So complete the circle—be mentored and mentor "} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function FooterCall() {
    return (
        <div>
            <div className="py-24">
                <div className="flex lg:flex-row flex-col sm:items-center gap-14">
                    <div className="flex flex-col gap-3">
                        <div>
                            <Image className="w-[120px]" src={d4logo} alt="d4 logo" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-[28px]">Code practice and mentorship for everyone</h3>
                            <p className="font-light">Develop fluency in 70 programming languages with our unique blend of learning, practice and mentoring. Exercism is fun, effective and 100% free, forever.</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <OrangeButton label={"Join"} />
                        <OrangeButton label={"Explore"} />
                    </div>
                </div>
            </div>
        </div>
    )
}