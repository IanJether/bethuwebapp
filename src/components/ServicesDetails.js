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
import Navsection from "./subcomponents/Navsection";
import { useEffect } from "react";



const Servicesdetails = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      }, [])

    const { title } = useParams();



    return (
        <div className="servicesdetails mt-[55px] lg:mt-[105px]">
            {ServicesList.filter((items, index) => items.title === title).map((items) => {

                return (
                    <div className="servicesmapped">
                        <Navsection pagehead={items.title} page="Services" />
                        <div className="servicesgrid flex flex-col lg:flex-row gap-[40px] px-[7%] lg:px-[17%] py-[50px]">
                            <div className="gridleft h-[200px] lg:h-[400px] lg:w-[50%] w-[100%] overflow-hidden">
                                <img className="h-full w-full object-cover" src={items.image} alt="" />
                            </div>
                            <div className="gridright text-[14px] font-semibold text-neutral-700 lg:w-[50%]">
                                <p className=" mb-[30px]">{items.essayintro}</p>
                                <p className=" mb-[30px]">{items.essay}</p>
                                <p className=" mb-[30px]">{items.essayoutro}</p>
                                <Link to="/Contact"><button className="bb uppercase">get started now</button></Link>
                            </div>

                        </div>

                    </div>
                )
            })}

            <div className="detslide px-[7%] lg:px-[17%]">
                <Serviceslist />
            </div>





        </div>
    )
}

export default Servicesdetails;
