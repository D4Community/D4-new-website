'use client'

import Image from "next/image";
import d4logo from "../assets/images/d4logo.png"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const NavLinks = [{
        url: "/",
        title: "Home",
    }, {
        url: "/",
        title: "Learn",
    }, {
        url: "/team",
        title: "Team",
    }, {
        url: "/about",
        title: "About",
    }, {
        url: "/events",
        title: "Events",
    }, {
        url: "/",
        title: "More",
    }]

    return (
        <nav className="bg-[#0E0C15]/80 shadow-sm shadow-white/10 top-0 z-20 fixed w-[100%] backdrop-blur-md">
            <div className="">
                <div className="px-5 lg:px-[82px] py-2 flex items-center justify-between gap-2">
                    <div className="flex gap-10 items-center">
                        <div>
                            <Image
                                className="w-[78px] sm:w-[85px]"
                                src={d4logo}
                                alt="d4 logo"
                            />
                        </div>
                        <div className='items-center gap-10 hidden lg:flex font-light text-[18px]'>
                            {NavLinks.map((prop, i) => {
                                return (
                                    <Link key={i} className='text-white hover:text-[#EC5735] transition' href={prop.url}>{prop.title}</Link>
                                )
                            })}
                        </div>
                    </div>


                    <div className="flex items-center gap-3">
                        <div>
                            <button className="bg-[#EC5735] hover:bg-[#fc7f66] transition text-white px-6 py-1 rounded-lg sm:text-sm text-[13px]">Join now</button>
                        </div>

                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                                className="text-white p-2 hover:text-[#fc7f66] transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isBurgerMenuOpen
                                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    }
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isBurgerMenuOpen && (
                    <div className="lg:hidden border-t-[1px] border-[#ec5735]">
                        <div className="px-8 py-8 space-y-1 flex flex-col gap-10 font-light justify-center items-center h-screen">
                            {NavLinks.map((prop, i) => {
                                return (
                                    <Link key={i} className='text-white hover:text-[#EC5735] transition' href={prop.url}>{prop.title}</Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}