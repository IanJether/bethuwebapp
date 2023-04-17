import { Link, useParams } from "react-router-dom";
import ServicesList from "../data/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Serviceslist from "./subcomponents/ServicesSlide";



const Servicesdetails = () => {

    const { title } = useParams();



    return (
        <div className="servicesdetails mt-[55px] lg:mt-[105px]">
            {ServicesList.filter((items, index) => items.title === title).map((items) => {

                return (
                    <div className="servicesmapped">
                        <div className="abzeero h-[150px] lg:h-[200px] bg-black overflow-hidden relative">
                            <img className="object-cover h-full w-full filter brightness-[44%]" src={require("../images/gworking.jpg")} alt="" />
                            <div className="aboutrel absolute text-center top-[30%] w-screen">
                                <h2 className="text-white font-bold text-[19px] uppercase">{items.title}</h2>
                                <p className="text-white mt-[10px] text-[15px]">Home <span className="text-[15px] mx-[10px] text-yellow-400"> <FontAwesomeIcon icon={faAngleRight} /></span> Services </p>
                            </div>
                        </div>

                        <div className="servicesgrid flex flex-col lg:flex-row gap-[40px] px-[7%] lg:px-[17%] py-[50px]">
                            <div className="gridleft h-[200px] lg:h-[400px] lg:w-[50%] w-[100%] overflow-hidden">
                                <img className="h-full w-full object-cover" src={items.image} alt="" />
                            </div>
                            <div className="gridright text-[14px] font-semibold text-neutral-700 lg:w-[50%]">
                                <p className=" mb-[30px]">{items.essayintro}</p>
                                <p className=" mb-[30px]">{items.essay}</p>
                                <p className=" mb-[30px]">{items.essayoutro}</p>
                                <button className="bb uppercase">get started now</button>
                            </div>

                        </div>

                    </div>
                )
            })}

            <div className="detslide px-[7%] lg:px-[17%]">
                <Serviceslist/>
            </div>


            {/* <div className="slider lg:hidden px-[7%]">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className=" swipe flex justify-center items-center"
                    data
                >
                    {ServicesList.map((items) => {

                        const address = "/Services/" + items.title;

                        return (
                            <SwiperSlide className="flex bg-white mx-auto justify-center items-center pb-[60px]" key={items.key}>
                                <div className="otherservice mx-auto flex flex-col items-center">
                                    <div className="w-[100%] h-[250px] overflow-hidden">
                                        <img className="h-full w-full object-cover " src={items.image} alt="" />
                                    </div>
                                    <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                                        <div className="text-yellow-500 text-[30px]">
                                            <FontAwesomeIcon icon={items.icon} />
                                        </div>
                                        <div className="text-[17px] font-semibold">
                                            <h3>{items.title}</h3>
                                        </div>
                                        <div className="text-[13px] text-neutral-500">
                                            <p>{items.text}</p>
                                        </div>
                                        <div className="absolute bottom-[-23px]">
                                            <Link to={address}><button className="bbs"><FontAwesomeIcon icon={items.bottomicon} /></button></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className="slider hidden lg:block px-[17%] py-[70px]">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className=" swipe flex justify-center items-center"
                    data
                >
                    {ServicesList.map((items) => {

                        const address = "/Services/" + items.title;

                        return (
                            <SwiperSlide className="flex bg-white mx-auto justify-center items-center pb-[60px]" key={items.key}>
                                <div className="otherservice mx-auto flex flex-col items-center">
                                    <div className="w-[100%] h-[250px] overflow-hidden">
                                        <img className="h-full w-full object-cover " src={items.image} alt="" />
                                    </div>
                                    <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                                        <div className="text-yellow-500 text-[30px]">
                                            <FontAwesomeIcon icon={items.icon} />
                                        </div>
                                        <div className="text-[17px] font-semibold">
                                            <h3>{items.title}</h3>
                                        </div>
                                        <div className="text-[13px] text-neutral-500">
                                            <p>{items.text}</p>
                                        </div>
                                        <div className="absolute bottom-[-23px]">
                                            <Link to={address}><button className="bbs"><FontAwesomeIcon icon={items.bottomicon} /></button></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div> */}


        </div>
    )
}

export default Servicesdetails;
