// import Swiper core and required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import SLider Images
import slider1 from '../assets/slider(1).jpg'
import slider2 from '../assets/slider(2).jpg'
import slider3 from '../assets/slider(3).jpg'
import slider4 from '../assets/slider(4).jpg'
import slider5 from '../assets/slider(5).jpg'

const Slider = () => {
       return (
              <div className='px-5 lg:px-0 pb-10 lg:pb-24'>
                     <div className='text-center space-y-2 mb-5 font-poppins'> 
                            <h2 className='font-semibold text-3xl lg:text-5xl text-[#048853]'>Our Projects</h2>
                            <p className='lg:text-base hidden lg:block'>Explore Our Premium Real Estate Projects, Where Quality Meets Innovation.From <br /> Residential To Commercial Properties, Find Your Perfect Space With Us.</p>
                            <p className='text-xs lg:hidden'>Explore Our Premium Real Estate Projects, Where Quality Meets Innovation.From Residential To Commercial Properties, Find Your Perfect Space With Us.</p>
                     </div>
                     <Swiper
                            className='lg:w-5/6 lg:h-[500px] lg:px-0'
                            // install Swiper modules
                            modules={[Pagination, Mousewheel, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            mousewheel={true}
                            autoplay={{
                                   delay: 5000,
                                   disableOnInteraction: true
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                     >
                            <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
                     </Swiper>
              </div>
       );
};

export default Slider;