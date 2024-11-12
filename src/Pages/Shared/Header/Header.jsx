import Navber from "../../../Sections/Navber";
import banner from '../../../assets/Rectangle 12.jpg'
import layer from '../../../assets/Layer_x0020_1.png'
import house from '../../../assets/Group 7.png'
import { FaArrowRight } from "react-icons/fa";

const Header = () => {

       return (
              <div className="w-full lg:min-h-screen font-poppins" style={{ backgroundImage: `url(${layer}) ,url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain, cover' }}>
                     <Navber></Navber>
                     <div className="flex flex-col gap-10 lg:flex-row lg:items-center mt-0 md:mt-14 lg:mt-0">
                            <div className="text-white flex flex-col justify-center lg:w-3/6 lg:ml-[96.970px] mt-7 space-y-3 px-5 lg:px-0">
                                   <h2 className="text-5xl font-bold hidden lg:block">Healping You To <br /> Find Your Dream Home.</h2>
                                   <h2 className="text-4xl font-bold lg:hidden">Healping You To Find Your Dream Job.</h2>
                                   <p className="hidden lg:block"><span className="font-bold">Dream Home</span> Is Here To Help You Find The Best Home, <br />Whether For Sale Or Rent, With Trusted <br />Sources.</p>
                                   <p className="lg:hidden"><span className="font-bold">Dream Home</span> Is Here To Help You Find The Best Home, Whether For Sale Or Rent, With Trusted Sources.</p>
                                   <div>
                                          <button className="btn bg-white rounded-none text-green-800 px-6"><a href="#houses">Find Your Home</a><FaArrowRight /></button>
                                   </div>
                            </div>
                            <div className=" lg:w-3/6">
                                   <img className="w-full lg:min-h-[calc(100vh-64px)]" src={`${house}`} alt="" />
                            </div>
                     </div>
              </div>
       );
};

export default Header;