import HeroPage from "./(pages)/HeroPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#0E0C15]">
      <Navbar />
      <HeroPage />
    </div>
  );
}
