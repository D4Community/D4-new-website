import Image from "next/image"
import hexbg from "../assets/images/hexbg.png"

export default function Background() {
    // have to make the element dynamic (dynamic inputing css is breaking the app so going with hard coded for now will refactor later)
    return (
        <div>
            <HexBg />
            <Blur1 />
            <Blur2 />
            <Blur3 />
            <Blur4 />
        </div>
    )
}


function HexBg() {
    return (
        <div>
            <div className="absolute left-[150px] z-0 top-[100px] right-[40px] shrink-0 sm:inline hidden">
                <Image src={hexbg} alt="hex background" />
            </div>
        </div>
    )
}


function Blur1({ top }: any) {
    return (
        <div>
            <div className={`text-white max-w-[850px] w-[100%] h-[850px] bg-[#0a2d5a7b] rounded-full absolute blur-[120px] bottom-0 left-[-350px] z-[0] top-[130px]`}>
            </div>
        </div>
    )
}

function Blur2({ top }: any) {
    return (
        <div>
            <div className={`text-white max-w-[850px] w-[100%] h-[850px] bg-[#0a2d5a7b] rounded-full absolute blur-[120px] bottom-0 left-[1450px] z-[0] top-[1380px]`}>
            </div>
        </div>
    )
}

function Blur3({ top }: any) {
    return (
        <div>
            <div className={`text-white max-w-[850px] w-[100%] h-[850px] bg-[#0a2d5a7b] rounded-full absolute blur-[120px] bottom-0 left-[-350px] z-[0] top-[2680px]`}>
            </div>
        </div>
    )
}

function Blur4({ top }: any) {
    return (
        <div>
            <div className={`text-white max-w-[850px] w-[100%] h-[850px] bg-[#0a2d5a7b] rounded-full absolute blur-[120px] bottom-0 left-[1450px] z-[0] top-[3980px]`}>
            </div>
        </div>
    )
}