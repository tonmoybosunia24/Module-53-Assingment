import Features from "../../Sections/Features";
import Houses from "../../Sections/Houses";
import Services from "../../Sections/Services";
import Slider from "../../Sections/Slider";
import Header from "../Shared/Header/Header";

const Home = () => {
       return (
              <div className="bg-[#F3FFF4]">
                     <Header></Header>
                     <Services></Services>
                     <Slider></Slider>
                     <Houses></Houses>
                     <Features></Features>
              </div>
       );
};

export default Home;