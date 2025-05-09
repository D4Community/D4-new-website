import Image from "next/image"
import d4logo from "../assets/images/d4logo.png"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Footer() {
    return (
        <footer className="bottom-0 z-[5] relative border-t-[1px] bg-[#0E0C15]/80 border-[#EC5735] backdrop-blur-md">
            <div className="container py-8 px-4">
                {/*
                todo:
                 have to work on footer keeping it hidden in mobile view for now 
                 take refrence from appwrite website
                 */}
                <div className="xl:flex justify-center hidden">
                    <div className="flex gap-32 items-start flex-shrink">
                        <div className="flex justify-center items-center gap-2">
                            <Image className="max-w-[60px]" src={d4logo} alt="d4 logo" />
                            <p className="font-bold pt-[4px] text-[22px]">D4 Community</p>
                        </div>
                        <FooterLinks
                            heading={"Legal & Policies"}
                            link1={"Terms Of Usage"}
                            link2={"Privacy Policy"}
                            link3={"Cookie Policy"}
                            link4={"Code of Conduct"}
                            link5={"Accessibility Statement"} />

                        <FooterLinks
                            heading={"Get Involved"}
                            link1={"D4 Insider"}
                            link2={"Contribute"}
                            link3={"Mentor"}
                            link4={"Donate"} />

                        <FooterLinks
                            heading={"About D4"}
                            link1={"About D4 Community"}
                            link2={"Our Team"}
                            link3={"Contribute"}
                            link4={"Partners"}
                            link5={"Individual Support"} />

                        <FooterLinks
                            heading={"Get Help"}
                            link1={"Getting Started"}
                            link2={"D4's Docs"}
                            link3={"FAQs"} />

                    </div>
                </div>

                <div className="xl:hidden">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-center items-center gap-2 self-start">
                            <Image className="max-w-[60px]" src={d4logo} alt="d4 logo" />
                            <p className="font-semibold pt-[4px] text-[22px]">D4 Community</p>
                        </div>
                        <div className="px-4">
                            <Accordion type="single" collapsible className="">

                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Legal & Policies</AccordionTrigger>
                                    <AccordionContent>
                                        <FooterLinks
                                            link1={"Terms Of Usage"}
                                            link2={"Privacy Policy"}
                                            link3={"Cookie Policy"}
                                            link4={"Code of Conduct"}
                                            link5={"Accessibility Statement"} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Get Involved</AccordionTrigger>
                                    <AccordionContent>
                                        <FooterLinks
                                            link1={"D4 Insider"}
                                            link2={"Contribute"}
                                            link3={"Mentor"}
                                            link4={"Donate"} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>About D4</AccordionTrigger>
                                    <AccordionContent>
                                        <FooterLinks
                                            link1={"About D4 Community"}
                                            link2={"Our Team"}
                                            link3={"Contribute"}
                                            link4={"Partners"}
                                            link5={"Individual Support"} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Get Help</AccordionTrigger>
                                    <AccordionContent>
                                        <FooterLinks
                                            link1={"Getting Started"}
                                            link2={"D4's Docs"}
                                            link3={"FAQs"} />
                                    </AccordionContent>
                                </AccordionItem>


                            </Accordion>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-[#091B32]">
                <div className="container sm:text-[18px] text-[16px] font-light py-5 px-4 flex lg:flex-row flex-col lg:justify-between lg:items-center gap-8 self-start">
                    <div className="flex gap-3">

                        {/* //discord */}
                        <Link href={"https://discord.com/invite/RPpYB8JpUQ"} target="_blank">
                            <Button variant={'secondary'} className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                                </svg>
                            </Button>
                        </Link>

                        {/* github */}
                        <Link href={"https://github.com/D4Community"} target="_blank">
                            <Button variant={'secondary'} className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg>
                            </Button>
                        </Link>

                        {/* twitter */}
                        <Link href={"https://x.com/D4community"} target="_blank">
                            <Button variant={'secondary'} className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                </svg>
                            </Button>
                        </Link>

                        {/* whatsapp */}
                        <Link href={"https://chat.whatsapp.com/Khwy3LEyjdX4Kx8VJ1MXmW"} target="_blank">
                            <Button variant={'secondary'} className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                                </svg>
                            </Button>
                        </Link>

                        {/* linkedin */}
                        <Link href={"https://www.linkedin.com/company/d4community/"} target="_blank">
                            <Button variant={'secondary'} className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </Button>
                        </Link>

                        {/* instagram */}
                        <Link href={"https://www.instagram.com/d4community"} target="_blank">
                            <Button variant={'secondary'} className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                                </svg>
                            </Button>
                        </Link>
                    </div>
                    <p>Copyright © {new Date().getFullYear()} D4 Community</p>
                </div>
            </div>
        </footer>
    )
}

function FooterLinks({ heading, link1, link2, link3, link4, link5 }: any) {
    return (
        <nav>
            <div>
                {heading ? <h2 className="font-medium text-[20px] pb-4">{heading}</h2> : null}
                <div className="font-light flex flex-col sm:text-[16px] text-[14px] gap-2">
                    <a>{link1}</a>
                    <a>{link2}</a>
                    <a>{link3}</a>
                    <a>{link4}</a>
                    <a>{link5}</a>
                </div>
            </div>
        </nav>
    )
}