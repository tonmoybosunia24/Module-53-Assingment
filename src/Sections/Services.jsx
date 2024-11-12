import React from 'react';
import house from '../assets/house 1.png'
import assets from '../assets/assets 1.png'
import town from '../assets/town 1.png'

const Services = () => {
       return (
              <div className='lg:w-5/6 px-5 lg:px-0 m-auto py-24 space-y-3 font-poppins'>
                     <h2 className='text-center font-semibold text-5xl text-[#048853]'>Our Services</h2>
                     <p className='text-center text-lg'>Dream Home Is Here To Be The Solution For You</p>
                     <div className='flex flex-col lg:flex-row gap-8'>
                            <div className=' flex-1 drop-shadow-2xl px-8 py-7 text-center space-y-2 bg-[#FFFFFF] hover:bg-gradient-to-b from-green-600 to-green-800 hover:text-white group'>
                                   <img className='m-auto bg-green-700 group-hover:bg-white rounded-full p-3' src={house} alt="" />
                                   <h4 className='font-semibold text-xl text-green-700 group-hover:text-white'>New Property</h4>
                                   <p>Dream Home is now a reality. Buy a new home with the best facilities in a comfortable environment.</p>
                            </div>
                            <div className=' flex-1 drop-shadow-2xl px-8 py-7 text-center space-y-2 bg-[#FFFFFF] hover:bg-gradient-to-b from-green-600 to-green-800 hover:text-white group'>
                                   <img className='m-auto bg-green-700 group-hover:bg-white rounded-full p-3' src={assets} alt="" />
                                   <h4 className='font-semibold text-xl text-green-700 group-hover:text-white'>Rent a Home</h4>
                                   <p>Rent a beautiful home for your family, the best choice for your family's living space.</p>
                            </div>
                            <div className=' flex-1 drop-shadow-2xl px-8 py-7 text-center space-y-2 bg-[#FFFFFF] hover:bg-gradient-to-b from-green-600 to-green-800 hover:text-white group'>
                                   <img className='m-auto bg-green-700 group-hover:bg-white rounded-full p-3' src={town} alt="" />
                                   <h4 className='font-semibold text-xl text-green-700 group-hover:text-white'>Buy a Home</h4>
                                   <p>Buy the perfect home at the best price, with guaranteed quality from trusted sources.</p>
                            </div>
                     </div>
              </div>
       );
};

export default Services;