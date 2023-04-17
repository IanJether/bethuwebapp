import { faAngleRight, faAward, faCheckCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team from "../data/People";
import Aboutblock from "./subcomponents/Aboutblock";
import Navsection from "./subcomponents/Navsection";
import Contactprompt from "./subcomponents/Contactprompt";
import { Link } from "react-router-dom";



const Aboutus = () => {




    return (
        <div className=" Aboutus mt-[55px] lg:mt-[105px]">


            <Navsection page="About Us" pagehead="About Us"/>

            <Aboutblock />


            {/* the second div  */}

            <div className="abouttwo flex flex-col lg:flex-row">
                <div className="abtowleft flex flex-col gap-[30px] bg-neutral-900 text-white px-[7%] py-[30px] lg:w-[50%]">
                    <div>
                        <h3 className="text-primary text-[12px] font-semibold">Why Choose Us</h3>
                        <div className="mt-[3px] border-b-4 w-[10%] border-primary"></div>
                        <h2 className="text-[18px] mt-[10px] font-semibold">We Provide Access to Quality Education Abroad </h2>
                        <p className="text-[12px] text-neutral-300 py-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat voluptatum dolorem quidem commodi id. Porro pariatur neque </p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex bg-primary h-[60px] w-[60px] text-black items-center justify-center text-[28px]"><FontAwesomeIcon icon={faAward} /></div>
                            <div className="font-semibold"><h3>High Client Turnover</h3></div>
                            <div className="text-[12px] text-neutral-300"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores expedita distinctio officia. Voluptatibus </p></div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex bg-primary h-[60px] w-[60px] text-black items-center justify-center text-[28px]"><FontAwesomeIcon icon={faAward} /></div>
                            <div className="font-semibold"><h3>Best Client experience</h3></div>
                            <div className="text-[12px] text-neutral-300"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores expedita distinctio officia. Voluptatibus </p></div>
                        </div>

                    </div>
                    <div>
                        <Link to="/Contact"><button className="bb font-semibold">START CONSULTATION</button></Link>
                    </div>

                </div>
                <div className="abtworight hidden lg:block h-[600px] lg:w-[50%] overflow-hidden">
                    <img className="object-cover h-full w-full" src={require("../images/Ggrad3.jpg")} alt="" />

                    <div className="">
                        {/* ABSOLUTE DIV  */}
                    </div>

                </div>

            </div>

            <div className="aboutthree flex flex-col gap-[20px] px-[7%] lg:px-[17%] pt-[50px] pb-[80px]">

                <div className="flex flex-col gap-[10px] lg:items-center">
                    <div className="text-[12px] font-semibold">
                        <h3>Our Team</h3>
                        <div className="border-t-4 w-[5%] lg:w-[45%] border-primary"></div>
                    </div>
                    <div className="font-semibold text-[18px]"><h2>Meet With Professional Team</h2></div>
                    <div className="text-[13px] text-neutral-500"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque ex explicabo necessitatibus veniam! Quasi impedit, incidunt dolore veniam consectetur beatae</p></div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-center gap-[50px] items-center">

                    {team.map((items, index) => {

                        return (
                            <div className="abteam h-[360px] w-[280px] relative">
                                <img className="object-cover h-full w-full" src={items.image} alt="" />
                                <div className="abteamdetails absolute bg-white py-[10px] w-[80%] left-[10%] bottom-[-30px] text-center shadow-xl">
                                    <h2 className="text-[16px] font-semibold">{items.name}</h2>
                                    <p className="text-[13px] text-neutral-600">{items.position}</p>
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

export default Aboutus;