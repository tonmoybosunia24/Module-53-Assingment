import House from "./House";
import { useLoaderData } from "react-router-dom";

const Houses = () => {

       const houses = useLoaderData()

       return (
              <div id="houses" className="lg:w-5/6 m-auto font-poppins p-5 lg:px-0 pb-20">
                     <h2 className="text-center text-2xl lg:text-5xl mb-10 font-semibold text-[#048853]">Recommended Homes <br />For You</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-5 lg:gap-x-7">
                            {
                                   houses?.map(house => <House house={house}></House>)
                            }
                     </div>
              </div>
       );
};

export default Houses;