import Marquee from "react-fast-marquee";
import house0 from '../assets/houseFeatures (0).jpg'
import house1 from '../assets/houseFeatures (1).jpg'
import house2 from '../assets/houseFeatures (2).jpg'
import house3 from '../assets/houseFeatures (3).jpg'
import house4 from '../assets/houseFeatures (4).jpg'
import house5 from '../assets/houseFeatures (5).jpg'

import { FaArrowRight } from "react-icons/fa";


const Features = () => {
       return (
              <div className="px-5 lg:w-5/6 m-auto pb-20">
                     <h2 className="text-center font-semibold text-5xl text-[#048853] mb-20">House Features</h2>
                     <Marquee
                            autoFill
                            pauseOnHover
                            speed={100}
                     >
                            <div className="flex gap-5 ml-5 font-poppins">
                                   
                                   <div
                                          className="relative border-2 border-green-400 w-72 h-96 bg-cover bg-center bg-no-repeat"
                                          style={{
                                                 backgroundImage: `url("${house0}")`,
                                          }}
                                   >
                                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex gap-2 flex-col items-center justify-center text-white font-bold text-lg">
                                                 <div>
                                                        <p className="text-2xl">Bed Room</p>
                                                 </div>
                                                 {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                 <button className="bg-[#00985B] px-5 py-2 font-semibold" onClick={() => document.getElementById('bedroom_modal').showModal()}>View Room</button>
                                                 <dialog id="bedroom_modal" className="modal">
                                                        <div className="modal-box bg-[#F3FFF4] py-12">
                                                               <form method="dialog">
                                                                      {/* if there is a button in form, it will close the modal */}
                                                                      <button className="btn btn-sm text-xl btn-circle text-black btn-ghost absolute right-4 top-2 bg-gray-300">✕</button>
                                                               </form>
                                                               <div className="flex flex-wrap gap-3 lg:gap-5">
                                                                      <div className="lg:flex-1"><img className="w-[310px] h-[195.14px] lg:h-[304px]" src={house0} alt="" /></div>
                                                                      <div className="lg:flex-1 text-black space-y-2">
                                                                             <h2 className="text-xl font-bold text-green-800">Bed Room Features</h2>
                                                                             <ul className="text-base text-green-600 font-normal">
                                                                                    <li><FaArrowRight className="inline mr-2" /> Cozy king-size bed with premium mattress</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Large wardrobe with ample storage space</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Elegant bedside tables and reading lamps</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Full-length mirror and dressing area</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Soft lighting with dimmable options</li>
                                                                             </ul>

                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </dialog>
                                          </div>
                                   </div>

                                   <div
                                          className="relative border-2 border-green-400 w-72 h-96 bg-cover bg-center bg-no-repeat"
                                          style={{
                                                 backgroundImage: `url("${house1}")`,
                                          }}
                                   >
                                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex gap-2 flex-col items-center justify-center text-white font-bold text-lg">
                                                 <div>
                                                        <p className="text-2xl">Office Room</p>
                                                 </div>
                                                 {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                 <button className="bg-[#00985B] px-5 py-2 font-semibold" onClick={() => document.getElementById('Office-Room').showModal()}>View Room</button>
                                                 <dialog id="Office-Room" className="modal">
                                                        <div className="modal-box bg-[#F3FFF4] py-12">
                                                               <form method="dialog">
                                                                      {/* if there is a button in form, it will close the modal */}
                                                                      <button className="btn btn-sm text-xl btn-circle text-black btn-ghost absolute right-4 top-2 bg-gray-300">✕</button>
                                                               </form>
                                                               <div className="flex flex-wrap gap-3 lg:gap-5">
                                                                      <div className="lg:flex-1"><img className="w-[310px] h-[195.14px] lg:h-[304px]" src={house1} alt="" /></div>
                                                                      <div className="lg:flex-1 text-black space-y-2">
                                                                             <h2 className="text-xl font-bold text-green-800">Office Room Features</h2>
                                                                             <ul className="text-base text-green-600 font-normal">
                                                                                    <li> <FaArrowRight className="inline mr-2" />
                                                                                           Spacious and well-lit environment</li>
                                                                                    <li> <FaArrowRight className="inline mr-2" />
                                                                                           Modern furniture and ergonomic design</li>
                                                                                    <li> <FaArrowRight className="inline mr-2" />
                                                                                           High-speed internet connectivity</li>
                                                                                    <li> <FaArrowRight className="inline mr-2" />
                                                                                           Air-conditioned for comfort</li>
                                                                                    <li> <FaArrowRight className="inline mr-2" />
                                                                                           Ample storage and shelving</li>
                                                                             </ul>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </dialog>
                                          </div>
                                   </div>

                                   <div
                                          className="relative border-2 border-green-400 w-72 h-96 bg-cover bg-center bg-no-repeat"
                                          style={{
                                                 backgroundImage: `url("${house2}")`,
                                          }}
                                   >
                                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex gap-2 flex-col items-center justify-center text-white font-bold text-lg">
                                                 <div>
                                                        <p className="text-2xl">Open Kitchen</p>
                                                 </div>
                                                 {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                 <button className="bg-[#00985B] px-5 py-2 font-semibold" onClick={() => document.getElementById('Open-Kitchen').showModal()}>View Room</button>
                                                 <dialog id="Open-Kitchen" className="modal">
                                                        <div className="modal-box bg-[#F3FFF4] py-12">
                                                               <form method="dialog">
                                                                      {/* if there is a button in form, it will close the modal */}
                                                                      <button className="btn btn-sm text-xl btn-circle text-black btn-ghost absolute right-4 top-2 bg-gray-300">✕</button>
                                                               </form>
                                                               <div className="flex flex-wrap gap-3 lg:gap-5">
                                                                      <div className="lg:flex-1"><img className="w-[310px] h-[195.14px] lg:h-[304px]" src={house2} alt="" /></div>
                                                                      <div className="lg:flex-1 text-black space-y-2">
                                                                             <h2 className="text-xl font-bold text-green-800">Open Kitchen Features</h2>
                                                                             <ul className="text-base text-green-600 font-normal">
                                                                                    <li><FaArrowRight className="inline mr-2" /> Spacious and well-lit cooking area</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Modern appliances with sleek design</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Efficient ventilation and air-conditioning system</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Ample storage space with custom cabinets</li>
                                                                             </ul>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </dialog>
                                          </div>
                                   </div>

                                   <div
                                          className="relative border-2 border-green-400 w-72 h-96 bg-cover bg-center bg-no-repeat"
                                          style={{
                                                 backgroundImage: `url("${house3}")`,
                                          }}
                                   >
                                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex gap-2 flex-col items-center justify-center text-white font-bold text-lg">
                                                 <div>
                                                        <p className="text-2xl">Dining Room</p>
                                                 </div>
                                                 {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                 <button className="bg-[#00985B] px-5 py-2 font-semibold" onClick={() => document.getElementById('Dining-Room').showModal()}>View Room</button>
                                                 <dialog id="Dining-Room" className="modal">
                                                        <div className="modal-box bg-[#F3FFF4] py-12">
                                                               <form method="dialog">
                                                                      {/* if there is a button in form, it will close the modal */}
                                                                      <button className="btn btn-sm text-xl btn-circle text-black btn-ghost absolute right-4 top-2 bg-gray-300">✕</button>
                                                               </form>
                                                               <div className="flex flex-wrap gap-3 lg:gap-5">
                                                                      <div className="lg:flex-1"><img className="w-[310px] h-[195.14px] lg:h-[304px]" src={house3} alt="" /></div>
                                                                      <div className="lg:flex-1 text-black space-y-2">
                                                                             <h2 className="text-xl font-bold text-green-800">Dining Features</h2>
                                                                             <ul className="text-base text-green-600 font-normal">
                                                                                    <li><FaArrowRight className="inline mr-2" /> Spacious dining area with comfortable seating</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Large windows for natural light and ventilation</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Modern dining table with stylish chairs</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Elegant lighting with adjustable brightness</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Decorative accents for a warm and inviting atmosphere</li>
                                                                             </ul>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </dialog>
                                          </div>
                                   </div>

                                   <div
                                          className="relative border-2 border-green-400 w-72 h-96 bg-cover bg-center bg-no-repeat"
                                          style={{
                                                 backgroundImage: `url("${house4}")`,
                                          }}
                                   >
                                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex gap-2 flex-col items-center justify-center text-white font-bold text-lg">
                                                 <div>
                                                        <p className="text-2xl">Living Room</p>
                                                 </div>
                                                 {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                 <button className="bg-[#00985B] px-5 py-2 font-semibold" onClick={() => document.getElementById('Living-Room').showModal()}>View Room</button>
                                                 <dialog id="Living-Room" className="modal">
                                                        <div className="modal-box bg-[#F3FFF4] py-12">
                                                               <form method="dialog">
                                                                      {/* if there is a button in form, it will close the modal */}
                                                                      <button className="btn btn-sm text-xl btn-circle text-black btn-ghost absolute right-4 top-2 bg-gray-300">✕</button>
                                                               </form>
                                                               <div className="flex flex-wrap gap-3 lg:gap-5">
                                                                      <div className="lg:flex-1"><img className="w-[310px] h-[195.14px] lg:h-[304px]" src={house4} alt="" /></div>
                                                                      <div className="lg:flex-1 text-black space-y-2">
                                                                             <h2 className="text-xl font-bold text-green-800">Living Room Features</h2>
                                                                             <ul className="text-base text-green-600 font-normal">
                                                                                    <li><FaArrowRight className="inline mr-2" /> Spacious and comfortable seating area</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Large windows for natural light and scenic views</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Smart TV and entertainment center</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Modern lighting with adjustable brightness</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Elegant décor and cozy ambiance</li>
                                                                             </ul>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </dialog>
                                          </div>
                                   </div>

                                   <div
                                          className="relative border-2 border-green-400 w-72 h-96 bg-cover bg-center bg-no-repeat"
                                          style={{
                                                 backgroundImage: `url("${house5}")`,
                                          }}
                                   >
                                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex gap-2 flex-col items-center justify-center text-white font-bold text-lg">
                                                 <div>
                                                        <p className="text-2xl">Wash Room</p>
                                                 </div>
                                                 {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                 <button className="bg-[#00985B] px-5 py-2 font-semibold" onClick={() => document.getElementById('Wash-Room').showModal()}>View Room</button>
                                                 <dialog id="Wash-Room" className="modal">
                                                        <div className="modal-box bg-[#F3FFF4] py-12">
                                                               <form method="dialog">
                                                                      {/* if there is a button in form, it will close the modal */}
                                                                      <button className="btn btn-sm text-xl btn-circle text-black btn-ghost absolute right-4 top-2 bg-gray-300">✕</button>
                                                               </form>
                                                               <div className="flex flex-wrap gap-3 lg:gap-5">
                                                                      <div className="lg:flex-1"><img className="w-[310px] h-[195.14px] lg:h-[304px]" src={house5} alt="" /></div>
                                                                      <div className="lg:flex-1 text-black space-y-2">
                                                                             <h2 className="text-xl font-bold text-green-800">Wash Room Features</h2>
                                                                             <ul className="text-base text-green-600 font-normal">
                                                                                    <li><FaArrowRight className="inline mr-2" /> Spacious layout with modern design</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Large mirrors with ample lighting</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> High-quality fixtures and fittings</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Hot and cold water system with adjustable temperature</li>
                                                                                    <li><FaArrowRight className="inline mr-2" /> Elegant tiles and stylish décor for a clean look</li>
                                                                             </ul>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </dialog>
                                          </div>
                                   </div>

                            </div>
                     </Marquee>
              </div>
       );
};

export default Features;