import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Details = () => {
       const Details = useLoaderData();
       const { id } = useParams()
       const inInt = parseInt(id)
       console.log(id)
       const Detail = Details.find(detail => detail.id === inInt)
       const { image, estate_title, segment_name, description, price, status, area, location, facilities } = Detail;
       return (
              <div className="font-poppins bg-[#F3FFF4] pb-16">
                     <Header></Header>
                     <h2 className="text-3xl lg:text-5xl text-center font-semibold my-10 lg:my-16 text-[#048853]">House Details</h2>
                     <div className="lg:w-5/6 m-auto flex flex-col lg:flex-row gap-5 px-5 lg:px-0">
                            <div className="flex-1">
                                   <img className="min-h-full" src={image} alt="" />
                            </div>
                            <div className="flex-1 space-y-2">
                                   <p><span className="font-semibold text-green-700">Title: </span>{estate_title}</p>
                                   <p><span className="font-semibold text-green-700">Type: </span>{segment_name}</p>
                                   <p><span className="font-semibold text-green-700">Overview: </span>{description}</p>
                                   <p><span className="font-semibold text-green-700">Price: </span>{price}</p>
                                   <p><span className="font-semibold text-green-700">Status: </span>{status}</p>
                                   <p><span className="font-semibold text-green-700">Area: </span>{area}</p>
                                   <p><span className="font-semibold text-green-700">Location: </span>{location}</p>
                                   <p><span className="font-semibold text-green-700">Living Room: </span>{facilities.living_room}</p>
                                   <p><span className="font-semibold text-green-700">Kitchen: </span>{facilities.modern_kitchen || 'Not available'}</p>
                                   <p><span className="font-semibold text-green-700">Washrooms: </span>{facilities.washrooms}</p>
                                   <p><span className="font-semibold text-green-700">Bedrooms: </span>{facilities.bedrooms}</p>

                            </div>
                     </div>
              </div>
       );
};

export default Details;