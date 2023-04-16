import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesList from "../data/Services";
import { Link } from "react-router-dom";




const Services = () => {


    return (
        <div className="Services  mt-[55px] lg:mt-[105px]">

            <div className="abzeero h-[150px] lg:h-[200px] bg-black overflow-hidden relative">
                <img className="object-cover h-full w-full filter brightness-[44%]" src={require("../images/gworking.jpg")} alt="" />
                <div className="aboutrel absolute text-center top-[30%] w-screen">
                    <h2 className="text-white font-bold text-[19px]">SERVICES</h2>
                    <p className="text-white mt-[10px] text-[15px]">Home <span className="text-[15px] mx-[10px] text-yellow-400"> <FontAwesomeIcon icon={faAngleRight} /></span> Services </p>
                </div>
            </div>


            <div className="Servicsone px-[7%] lg:px-[17%] bg-slate-100 py-[50px]">
                <div className="fourone flex flex-col lg:justify-center lg:items-center gap-[20px] pb-[40px]">
                    <div className="text-[13px] font-semibold uppercase">
                        <h3>Services</h3>
                        <div className="border-b-4 border-yellow-400 w-[10%] lg:w-[50%]"></div>
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
                        )
                    })}


                </div>

            </div>




        </div>
    )
}

export default Services;