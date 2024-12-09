import Image from "next/image"
import d4logo from "../assets/images/d4logo.png"

export default function Footer() {
    return (
        <div className="bottom-0 text-white z-10 relative">
            <footer className="container flex justify-evenly py-8 px-4">
                <div className="flex flex-col justify-center">
                    <div>
                        <Image className="w-[full]" src={d4logo} alt="d4 logo" />
                    </div>
                </div>
                <div className="flex gap-32 justify-center">
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
            </footer>
            <div className="bg-[#091B32]">
                <div className="container text-[18px] font-light py-5 px-4 flex justify-between">
                    <p>D4 Community is a <span>not-for-profit</span> organisation registered In India.</p>
                    <p>Copyright @2023 - {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}

function FooterLinks({ heading, link1, link2, link3, link4, link5 }: any) {
    return (
        <nav>
            <div>
                <h2 className="font-bold text-[20px] pb-4">{heading}</h2>
                <div className="font-light flex flex-col text-[16px] gap-2">
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