import Image from "next/image";
import { BlurLeft, BlurRight } from "./BlurElement";
import HeroImage from "../assets/images/heroimg.png"
import {OrangeButton} from "./Buttons";

import d4logo from "../assets/images/d4logo.png"

export default function HeroSection() {
    return (
        <div>
            <div className="text-white sm:py-36 py-20">
                <div className="flex items-center justify-center gap-6 container z-10 relative">
                    <div className="flex flex-col lg:text-left lg:items-start text-center items-center gap-10">
                        <h1 className="sm:text-[55px] text-[50px] font-bold leading-[60px] bg-[linear-gradient(to_left,#A46FF2,#E49976)] text-transparent bg-clip-text [-webkit-background-clip:text]">Improve your programming skills significantly.</h1>
                        <h3 className="sm:text-[24px] text-[18px]">With D4 Communities unique learning, practice, and coaching approach, you can master 70 programming languages. Exercising is enjoyable, beneficial, and completely free forever.</h3>

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
                            <p className="max-w-[450px] font-light">is an autonomous, community financed, not-for-profit organisation.</p>
                            <button className="border-[1px] p-2 border-[#67A9FD] rounded-lg text-[#67A9FD] text-[14px] px-4">Learn More</button>
                        </div>
                    </div>
                    <div className=" hidden lg:flex">
                        <Image
                            className="w-[full]"
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

// add hex images