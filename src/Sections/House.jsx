import { Link } from "react-router-dom";

const House = ({ house }) => {
       const { id, image, description, price, area, location } = house;
       return (
              <Link className="flex flex-col" to={`/details/${id}`}>
                            <div className="border border-green-300 px-5 py-5 shadow-md space-y-2 flex-1 capitalize rounded-xl hover:shadow-2xl  ">
                                   <img className="w-full h-48" src={image} alt="" />
                                   <p><span className="font-semibold ">Overview : </span>{description}</p>
                                   <p><span className="font-semibold ">Price : </span>{price}</p>
                                   <p><span className="font-semibold ">Area : </span>{area}</p>
                                   <p><span className="font-semibold ">Location : </span>{location}</p>
                            </div>
              </Link>
       );
};

export default House;