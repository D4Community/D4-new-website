import Image from "next/image";

import { BlueButton } from "./Buttons";

import d4logo from "../assets/images/d4logo.png"

export default function HeroSection({ title, description, description2, description3, img }: any) {
    return (
        <div className="md:py-40 py-28 flex justify-center items-center gap-20">
            <div className="flex lg:flex-row flex-col-reverse gap-14">
                <div>
                    <h1 className="sm:text-[55px] text-[42px] font-semibold sm:leading-[60px] leading-[50px] bg-[linear-gradient(to_left,#E49976,#A46FF2)] text-transparent bg-clip-text [-webkit-background-clip:text]">{title}</h1>
                    <div className="flex flex-col gap-5 pt-5 max-w-[1780px] font-light md:text-[22px] text-[16px]">
                        <p>{description}</p>
                        <p>{description2}</p>
                        <p>{description3}</p>
                    </div>
                    <div className="flex items-center gap-10 pt-11">
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
                <div>
                    <Image className="lg:max-w-[360px] max-w-[260px]" src={img} alt="About" />
                </div>
            </div>
        </div>
    )
}