import { Navbar } from '../../components/Navbar/NavBar.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
import { Header }  from "../../components/Header/Header.jsx";
import { StepsSection } from "../../components/HomeSteps/StepsSection.jsx";
import { BannerCarousel } from "../../components/Carousel/BannerCarousel.jsx";

const backgroundImage = "/background.png";

export const Home = () => {
  return (
    <div
    className="flex flex-col min-h-screen absolute w-full"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "108%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
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
      <Footer />
    </div>
  );
};

export default Home;
