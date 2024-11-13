import Navber from "../../../Sections/Navber";
import banner from '../../../assets/Rectangle 12.jpg'
import layer from '../../../assets/Layer_x0020_1.png'
import house from '../../../assets/Group 7.png'
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {

       return (
              <div className="w-full lg:min-h-screen font-poppins" style={{ backgroundImage: `url(${layer}) ,url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain, cover' }}>
                     <Navber></Navber>
                     <div className="relative  flex flex-col  lg:flex-row lg:items-center mt-0 min-h-[calc(100vh-120px)] lg:min-h-[calc(100vh-64px)] md:mt-14 lg:mt-0">
                            <div className="text-white flex flex-col justify-center lg:w-3/6 lg:ml-[96.970px] mt-12  lg:mt-0 space-y-3 px-5 lg:px-0">
                                   <h2 className="text-5xl font-bold hidden lg:block" style={{ whiteSpace: 'pre-line' }}>
                                          <Typewriter
                                                 words={['Healping You To \n Find Your New Property.', 'Healping You To \n Find Your Rental \n Home.', 'Healping You To \n Find Your Dream \n Home.']}
                                                 loop={5}
                                                 typeSpeed={70}
                                                 deleteSpeed={50}
                                          ></Typewriter>
                                   </h2>
                                   <h2 className="text-4xl font-bold lg:hidden" style={{ whiteSpace: 'pre-line' }}>
                                          <Typewriter
                                                 words={['Healping You To Find Your New Property.', 'Healping You To Find Your Rental Home.', 'Healping You To Find Your Dream Home.']}
                                                 loop={5}
                                                 typeSpeed={70}
                                                 deleteSpeed={50}
                                          ></Typewriter>
                                   </h2>
                                   <p className="hidden lg:block"><span className="font-bold">Dream Home</span> Is Here To Help You Find The Best Home, <br />Whether For Sale Or Rent, With Trusted <br />Sources.</p>
                                   <p className="lg:hidden"><span className="font-bold">Dream Home</span> Is Here To Help You Find The Best Home, Whether For Sale Or Rent, With Trusted Sources.</p>
                                   <div>
                                          <button className="btn bg-white rounded-none text-green-800 px-6"><a href="#houses">Find Your Home</a><FaArrowRight /></button>
                                   </div>
                            </div>
                            <div className="lg:w-3/6 absolute lg:relative bottom-0 w-full">
                                   <img className="w-full lg:min-h-[calc(100vh-64px)]" src={`${house}`} alt="" />
                            </div>
                     </div>
              </div>
       );
};

export default Header;