export function BlurLeft({top}:any) {
    return (
        <div>
            <div className={`text-white max-w-[850px] w-[100%] h-[850px] bg-[#0a2d5a7b] rounded-full absolute blur-[120px] bottom-0 left-[-350px] z-[0] top-[130px]`}>
            </div>
        </div>
    )
}

export function BlurRight({top}: any) {
    return (
        <div>
            <div className={`text-white max-w-[850px] w-[100%] h-[850px] bg-[#0a2d5a7b] rounded-full absolute blur-[120px] bottom-0 left-[1450px] z-[0] top-[1380px]`}>
            </div>
        </div>
    )
}