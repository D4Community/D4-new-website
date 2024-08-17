import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#0E0C15]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
