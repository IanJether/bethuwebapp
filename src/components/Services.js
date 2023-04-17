import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesList from "../data/Services";
import { Link } from "react-router-dom";
import Navsection from "./subcomponents/Navsection";
import Contactprompt from "./subcomponents/Contactprompt";




const Services = () => {


    return (
        <div className="Services  mt-[55px] lg:mt-[105px]">

            <Navsection page="Services" pagehead="Services" />


            <div className="Servicsone px-[7%] lg:px-[17%] bg-slate-100 py-[50px]">
                <div className="fourone flex flex-col lg:justify-center lg:items-center gap-[20px] pb-[40px]">
                    <div className="text-[13px] font-semibold uppercase">
                        <h3>Services</h3>
                        <div className="border-b-4 border-primary w-[10%] lg:w-[50%]"></div>
                    </div>
                    <div className="lg:text-center">
                        <h2 className="text-[20px] font-semibold mb-[4px]">Services We Offer</h2>
                        <p className="text-[13px] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, laudantium explicabo porro</p>
                    </div>
                </div>
                <div className="Servicsonetwo flex flex-col lg:flex-row gap-[30px] ">


                    {ServicesList.filter((array, index) => index < 3).map((items) => {

                        const address = "/Services/" + items.title;

                        return (
                            <div className="flex flex-col items-center">
                                <div className="w-[100%] h-[250px] overflow-hidden">
                                    <img className="h-full w-full object-cover " src={items.image} alt="" />
                                </div>
                                <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                                    <div className="text-primary text-[30px]">
                                        <FontAwesomeIcon icon={items.icon} />
                                    </div>
                                    <div className="text-[17px] font-semibold">
                                        <h3>{items.title}</h3>
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>{items.text}</p>
                                    </div>
                                    <div className="absolute bottom-[-23px]">
                                        <Link to={address}> <button className="bbs"><FontAwesomeIcon icon={items.bottomicon} /></button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>

                <div className="Servicsonetwo mt-[30px] flex flex-col lg:flex-row gap-[30px] ">


                    {ServicesList.filter((array, index) => index >= 3).map((items) => {

                        const address = "/Services/" + items.title;

                        return (
                            <div className="flex flex-col items-center">
                                <div className="w-[100%] h-[250px] overflow-hidden">
                                    <img className="h-full w-full object-cover " src={items.image} alt="" />
                                </div>
                                <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                                    <div className="text-primary text-[30px]">
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
                        )
                    })}


                </div>

            </div>

            <Contactprompt/>




        </div>
    )
}

export default Services;