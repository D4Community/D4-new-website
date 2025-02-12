import { TeamType } from "@/types/team";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function CoreTeamCard ({name, bio, designation, link, image}: TeamType) {
    return (
        <div>
            <div className="relative min-h-[420px] min-w-[320px] rounded-3xl bg-gray-400 overflow-hidden ">
            <Image
                src={image}
                fill
                quality={100}
                objectFit="cover"
                alt="default"
            />
            <div className="bg-[#091B32] absolute z-10 bottom-[-12px] left-[-8px] text-center p-6 pb-9 rounded-xl">
                <h1 className="text-[16px] font-bold">{name}</h1>
                <p className="font-light text-[16px]">{designation}</p>
            </div>
            </div>
        </div>
    )
}