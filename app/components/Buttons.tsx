export function OrangeButton ({label, onClick}:any) {
    return (
        <button 
        className="bg-[#EC5735] hover:bg-[#fc7f66] transition text-white sm:px-14 px-12 py-2 rounded-lg"
        onClick={onClick}
        >{label}</button>
    )
}