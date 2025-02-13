import { RecentEventCardType } from "@/types/cards";
import Image from "next/image";
import Link from "next/link";

export default function RecentEventCard({ eventName, date, image, link }: RecentEventCardType) {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden bg-slate-500 w-[260px] h-[280px] rounded-xl shadow-md">
                    <Link href={link}>
                        <Image
                            src={image}
                            fill
                            quality={100}
                            alt={eventName}
                            objectFit="cover"
                        />
                    </Link>
                </div>
                <div className="text-left">
                    <p className="font-mono">{date}</p>
                    <h1 className="text-[22px] font-bold">{eventName}</h1>
                </div>
            </div>
        </div>
    )
}