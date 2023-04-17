import { faArrowRight, faCheckCircle, faChessKnight, faQuoteRight, faSchool, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesList from "../data/Services";
import { Link } from "react-router-dom";

import Aboutblock from "./subcomponents/Aboutblock";
import Serviceslist from "./subcomponents/ServicesSlide";

const Home = () => {


    return (
        <div className="Home">


            {/* the first div - PROVIDE BEST  */}

            <div className="one mt-[55px] lg:mt-[100px] flex flex-col-reverse lg:flex-row">
                <div className="oneleft lg:w-[50%] px-[7%] lg:pl-[17%] lg:justify-center flex flex-col gap-[25px] text-white bg-neutral-900 pt-[50px] pb-[100px] mt-[-2px]">
                    <div className="font-semibold text-[31px]">
                        <h2>We Help You <span className=" ">Study Abroad</span> In The UK, US and Europe</h2>
                    </div>
                    <div className="text-[15px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit suscipit recusandae voluptatem officiis culpa veniam quaerat.</p>
                    </div>
                    <div>
                        <button className="bb">GET STARTED</button>
                    </div>

                </div>
                <div className="oneright w-screen h-[250px] lg:h-[80vh] lg:w-[50%]">
                    <img className="object-cover h-full w-full" src={require("../images/Ggrad4.jpg")} alt="" />

                </div>
            </div>

            {/* the second block - KUJISIFU */}

            <div className="two lg:px-[17%] flex flex-col lg:flex-row gap-[30px] items-center mt-[-50px]">
                <div className="flex flex-col bg-white gap-[23px] items-center justify-center w-[80%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                    <div className="text-primary text-[30px]">
                        <FontAwesomeIcon icon={faSchool} />
                    </div>
                    <div className="text-[18px] font-semibold">
                        <h3>Good Universities</h3>
                    </div>
                    <div className="text-[14px] text-neutral-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white gap-[23px] items-center justify-center w-[80%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                    <div className="text-primary text-[30px]">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="text-[18px] font-semibold">
                        <h3>Experienced Staff</h3>
                    </div>
                    <div className="text-[14px] text-neutral-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white gap-[23px] items-center justify-center w-[80%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                    <div className="text-primary text-[30px]">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="text-[18px] font-semibold">
                        <h3>Competent Advisory</h3>
                    </div>
                    <div className="text-[14px] text-neutral-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                    </div>
                </div>

            </div>

            {/* the third block - ABOUT */}

            <Aboutblock />

            {/* the fourth block -SERVICES */}

            <div className="four px-[7%] lg:px-[17%] bg-slate-100 py-[60px]">
                <div className="fourone flex flex-col lg:flex-row lg:justify-between gap-[20px] pb-[40px]">
                    <div className="text-[13px] font-semibold uppercase">
                        <h3>Services</h3>
                        <div className="border-b-4 border-primary w-[10%] lg:w-[50%]"></div>
                    </div>
                    <div className="lg:text-center">
                        <h2 className="text-[20px] font-semibold mb-[4px]">Services We Offer</h2>
                        <p className="text-[13px] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, laudantium explicabo porro</p>
                    </div>
                    <div>
                        <button className="bb">ALL SERVICES</button>
                    </div>
                </div>

                <div className="foutwo pt-[20px]">
                    <Serviceslist />
                </div>


            </div>



            {/* the fifth block - testimonials  */}

            <div className="five relative">
                <div className="h-[400px] overflow-hidden  filter brightness-[44%]">
                    <img className="object-cover w-full h-full" src={require("../images/gworking.jpg")} alt="" />
                </div>
                <div className="absolute flex flex-col  gap-[20px] top-[20px] px-[7%] lg:w-[70%] lg:px-[17%]">
                    <div className="flex flex-col gap-[10px] text-white">
                        <div className="text-[13px] font-semibold ">
                            <h2>Testimonials</h2>
                            <div className="border-b-4 border-primary w-[4%]"></div>
                        </div>
                        <div className="text-[20px] font-semibold "><h3>What They Say About Us</h3></div>
                        <div className="text-[13px] text-neutral-200 "><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatem neque sit impedit eaque natus</p></div>
                    </div>
                    <div className="lg:flex lg:gap-[10px]">
                        <div className="flex flex-col justify-between h-[200px] bg-white py-[10px] px-[5%]">
                            <div className="text-neutral-500 text-[13px]">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut provident odio at dolorum nobis architecto </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-[10px]">
                                    <div className="bg-gray-600 h-[50px] w-[50px] rounded-full">
                                        {/* picture  */}
                                    </div>
                                    <div>
                                        <div className="text-[15px] font-semibold"><p>Steve Kombo</p></div>
                                        <div className="text-[13px] text-neutral-500"><p>MD, Fineteklabs</p></div>
                                    </div>
                                </div>
                                <div className="text-primary text-[30px]">
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* block 6 - CONTACT US */}

            <div className="six px-[7%] py-[30px] hidden">
                <div className="flex flex-col gap-[10px] text-black">
                    <div className="text-[13px] font-semibold ">
                        <h2>Testimonials</h2>
                        <div className="border-b-4 border-yellow-400 w-[4%]"></div>
                    </div>
                    <div className="text-[20px] font-semibold "><h3>What They Say About Us</h3></div>
                    <div className="text-[13px] text-neutral-700 "><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatem neque sit impedit eaque natus</p></div>
                </div>

                <form action="">
                    <div className="form px-[7%] lg:px-[17%] flex flex-col lg:items-center gap-[30px]  pt-[70px] pb-[50px]">
                        <div><input className="border border-neutral-300 w-[100%] lg:w-[400px] h-[45px] px-[10px] text-[12px] outline-none hover:border-yellow-500" placeholder="Enter Name" type="text" /></div>
                        <div><input className="border border-neutral-300 w-[100%] lg:w-[400px] h-[45px] px-[10px] text-[12px] outline-none hover:border-yellow-500" placeholder="Enter Email" type="text" /></div>
                        <div><input className="border border-neutral-300 w-[100%] lg:w-[400px] h-[45px] px-[10px] text-[12px] outline-none hover:border-yellow-500" placeholder="Enter Subject" type="text" /></div>
                        <div><textarea className="border border-neutral-300 w-[100%] lg:w-[400px] h-[130px] p-[10px] text-[12px] outline-none hover:border-yelllow-500" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea></div>
                        <div> <button className="bb uppercase">Send message</button></div>
                    </div>
                </form>
            </div>




        </div>
    )
}

export default Home;