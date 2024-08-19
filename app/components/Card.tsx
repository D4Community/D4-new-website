import Image from "next/image";


export default function Card({ src, title, description }: any) {
    return (
        <div className="p-4 flex flex-col gap-3">
            <Image className="w-[72px]" src={src} alt="code icon" />
            <div>
                <h3 className="text-[22px] font-bold">{title}</h3>
                <p className="text-[18px] font-light">{description}</p>
            </div>
        </div>
    )
}