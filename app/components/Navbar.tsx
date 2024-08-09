import Image from "next/image";
import d4logo from "../assets/images/d4logo.png"
import MenuIcon from "../assets/icons/menubar.svg"

export default function Navbar() {
    return (
        <div className="bg-[#0E0C15]">
            <div className="px-5 lg:px-[82px] py-2 flex items-center justify-between gap-2">
                <div className="flex gap-10 items-center">
                    <div>
                        <Image
                            className="w-[105px] relative"
                            src={d4logo}
                            alt="d4 logo"
                        />
                    </div>
                    <nav className='items-center gap-10 hidden lg:flex font-light'>
                        <a className='text-white text-opacity-90 hover:text-[#EC5735] transition' href='#'>Home</a>
                        <a className='text-white text-opacity-90 hover:text-[#EC5735] transition' href='#'>Learn</a>
                        <a className='text-white text-opacity-90 hover:text-[#EC5735] transition' href='#'>Members</a>
                        <a className='text-white text-opacity-90 hover:text-[#EC5735] transition' href='#'>About</a>
                        <a className='text-white text-opacity-90 hover:text-[#EC5735] transition' href='#'>Events</a>
                        <a className='text-white text-opacity-90 hover:text-[#EC5735] transition' href='#'>More</a>
                    </nav>
                </div>

                <div>
                    <button className="bg-[#EC5735] hover:bg-[#fc7f66] transition text-white px-8 p-2 rounded-lg text-sm">Join now</button>
                </div>
            </div>
        </div>
    )
}