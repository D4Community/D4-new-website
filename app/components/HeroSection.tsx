import Image from "next/image";
import aboutImg from "../assets/images/abouthero.png"

export default function HeroSection() {
    return (
        <div>
            <div className="md:pt-36 pt-28">
                <div>
                    <h1>About</h1>
                    <p>lsknxsk</p>
                </div>
                <div>
                    <Image className="w-[820px]" src={aboutImg} alt="About" />
                </div>
            </div>
        </div>
    )
}