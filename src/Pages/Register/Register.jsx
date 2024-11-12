import Navber from "../../Sections/Navber";
import banner from '../../assets/Rectangle 12.jpg'
import layer from '../../assets/Layer_x0020_1.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {

       const handleRegister = e =>{
              e.preventDefault();
              const name = e.target.name.value;
              const url = e.target.Url.value;
              const email = e.target.email.value;
              const password = e.target.password.value;
              console.log(name, url, email, password)
       }

       return (
              <div>
                     <div className="w-full min-h-screen font-poppins" style={{ backgroundImage: `url(${layer}) ,url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain, cover' }}>
                            <Navber></Navber>
                            <div className="flex flex-col gap-5 lg:w-5/6 m-auto justify-between lg:flex-row lg:items-center mt-0 md:mt-14 lg:mt-0 px-5 lg:px-0 lg:min-h-[calc(100vh-64px)] pb-7 lg:pb-0">
                                   <div className="text-white  flex flex-col justify-center lg:w-3/6  space-y-3">
                                          <h2 className="text-5xl font-bold hidden lg:block">Healping You To <br /> Find Your Dream Home.</h2>
                                          <h2 className="text-4xl font-bold lg:hidden">Healping You To Find Your Dream Job.</h2>
                                          <p className="hidden lg:block"><span className="font-bold">Dream Home</span> Is Here To Help You Find The Best Home, <br />Whether For Sale Or Rent, With Trusted <br />Sources.</p>
                                          <p className="lg:hidden"><span className="font-bold">Dream Home</span> Is Here To Help You Find The Best Home, Whether For Sale Or Rent, With Trusted Sources.</p>
                                          <div>
                                                 <button className="btn bg-white rounded-none text-green-800 px-6"><a href="#houses">Find Your Home</a><FaArrowRight /></button>
                                          </div>
                                   </div>
                                   <div className="card bg-base-100 w-full max-w-sm md:max-w-full lg:max-w-sm  shrink-0 shadow-2xl">
                                          <form onSubmit={handleRegister} className="card-body">
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Your Name</span>
                                                        </label>
                                                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Your Photo Url</span>
                                                        </label>
                                                        <input type="text" name="Url" placeholder="Your Photo Url" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Password</span>
                                                        </label>
                                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                                        <label className="label">
                                                               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                        </label>
                                                 </div>
                                                 <div className="form-control">
                                                        <button className="btn bg-green-800 text-white">Register Now</button>
                                                 </div>
                                                 <p className="text-xs text-center mt-2">Already Have An Account ? Please <Link className="link-success font-semibold" to='/login'>Login Now</Link></p>
                                          </form>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Register;