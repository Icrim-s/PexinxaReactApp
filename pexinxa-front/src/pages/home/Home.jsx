import { Navbar } from "../../components/Navbar/NavBar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { StepsSection } from "../../components/HomeSteps/StepsSection.jsx";
import { BannerCarousel } from "../../components/Carousel/BannerCarousel.jsx";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


const backgroundImage = "/background.png";

export const Home = () => {
  
const [showScrollToTop, setShowScrollToTop] = useState(false);
 const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
    className="flex flex-col h-max-screen w-full bg-no-repeat bg-center bg-cover"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center center",
      backgroundSize: "auto",       
    }}
  >
        <Navbar />
        <div>
          <Header />
          <div className="max-w-6xl mx-auto mt-10 rounded-full">
            <BannerCarousel />
          </div>
          <h1 className="text-center text-orange-500 text-4xl font-bold mt-12 font-montserrat">
            Como começar a economizar?
          </h1>
          <StepsSection />
        </div>
        {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
        <Footer />
      </div>
  );
};

export default Home;
