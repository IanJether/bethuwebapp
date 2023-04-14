import { faAngleRight, faAward, faCheckCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import man1 from "../images/people/man1.jpg"
import man2 from "../images/people/man2.jpg"
import man3 from "../images/people/man3.jpg"



const Aboutus = () => {

    const team = [
        {
            name: "Ian Jether",
            position: "Managing Director",
            image: man1,
        },
        {
            name: "Kimutai Ego",
            position: "Marketing Officer",
            image: man2,
        },
        {
            name: "Denis Omari",
            position: "Accountant",
            image: man3,
        },
    ]


    return (
        <div className=" Aboutus mt-[55px] lg:mt-[105px]">


            <div className="abzeero h-[150px] lg:h-[200px] bg-black overflow-hidden relative">
                <img className="object-cover h-full w-full filter brightness-[44%]" src={require("../images/gworking.jpg")} alt="" />
                <div className="aboutrel absolute text-center top-[30%] w-screen">
                    <h2 className="text-white font-bold text-[19px]">ABOUT US</h2>
                    <p className="text-white mt-[10px] text-[15px]">Home <span className="text-[15px] mx-[10px] text-yellow-400"> <FontAwesomeIcon icon={faAngleRight}/></span> About us </p>
                </div>
            </div>

            <div className="aboutone">
                <div className="three flex flex-col flex-col-reverse gap-[20px] lg:gap-[25px] lg:flex-row lg:gap-[20px] px-[7%] lg:px-[17%] py-[40px]">
                    <div className="threeleft flex flex-col gap-[10px] lg:w-[50%]">
                        <div className="h-250px">
                            <img className="object-cover" src={require("../images/meeting.jpg")} alt="" />
                        </div>
                        <div className="flex flex-col lg:flex-row lg:gap-[10px]">
                            <div className="bg-black lg:w-[50%] flex flex-col gap-[9px] items-center justify-center py-[20px]">
                                <div className="text-[23px] text-yellow-500">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </div>
                                <div className="text-white font-bold">
                                    <h3>20+</h3>
                                </div>
                                <div className="text-neutral-300 text-[12px]">
                                    <p>Years Of Experience</p>
                                </div>
                            </div>
                            <div className="h-[250px] lg:h-full lg:w-[50%]">
                                <img className="object-cover" src={require("../images/laptop.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="threeright flex flex-col gap-[15px] lg:w-[50%]">
                        <div className="text-[13px] font-semibold">
                            <h3>About Us</h3>
                            <div className="border-b-4 border-yellow-400 w-[10%]"></div>
                        </div>
                        <div className="text-[20px] font-semibold">
                            <h3>We Have 20 years of Experience in Accounting & tax Service</h3>
                        </div>
                        <div className="text-[13px] text-neutral-500">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aperiam eum quos repellendus fuga possimus tenetur velit praesentium debitis voluptatibus, dolor porro nihil illo maxime rem delectus error distinctio culpa?</p>
                        </div>
                        <div className="lg:flex">

                            <div className="flex flex-col gap-[5px] lg:w-[50%]">
                                <div className="flex gap-[10px]">
                                    <div className="text-yellow-500 text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>High Standards of integrity</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px]">
                                    <div className="text-yellow-500 text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>High Standards of integrity</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px]">
                                    <div className="text-yellow-500 text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>High Standards of integrity</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px]">
                                    <div className="text-yellow-500 text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>High Standards of integrity</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px]">
                                    <div className="text-yellow-500 text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>High Standards of integrity</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px]">
                                    <div className="text-yellow-500 text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[13px] text-neutral-500">
                                        <p>High Standards of integrity</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[250px] lg:h-full lg:w-[50%] hidden lg:block">
                                <img className="object-cover h-full w-full" src={require("../images/glaptop.jpg")} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* the second div  */}

            <div className="abouttwo flex flex-col lg:flex-row">
                <div className="abtowleft flex flex-col gap-[30px] bg-neutral-900 text-white px-[7%] py-[30px] lg:w-[50%]">
                    <div>
                        <h3 className="text-yellow-300 text-[12px] font-semibold">Why Choose Us</h3>
                        <div className="mt-[3px] border-b-4 w-[10%] border-yellow-300"></div>
                        <h2 className="text-[18px] mt-[10px] font-semibold">We Provide High Quality Accounting and Tax Service</h2>
                        <p className="text-[12px] text-neutral-300 py-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat voluptatum dolorem quidem commodi id. Porro pariatur neque </p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex bg-yellow-300 h-[60px] w-[60px] text-black items-center justify-center text-[28px]"><FontAwesomeIcon icon={faAward}/></div>
                            <div className="font-semibold"><h3>Best Accouting Service</h3></div>
                            <div className="text-[12px] text-neutral-300"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores expedita distinctio officia. Voluptatibus </p></div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex bg-yellow-300 h-[60px] w-[60px] text-black items-center justify-center text-[28px]"><FontAwesomeIcon icon={faAward}/></div>
                            <div className="font-semibold"><h3>Best Accouting Service</h3></div>
                            <div className="text-[12px] text-neutral-300"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores expedita distinctio officia. Voluptatibus </p></div>
                        </div>
                       
                    </div>
                    <div>
                        <button className="bb font-semibold">START CONSULTATION</button>
                    </div>

                </div>
                <div className="abtworight hidden lg:block h-[600px] lg:w-[50%] overflow-hidden">
                    <img className="object-cover h-full w-full" src={require("../images/meeting.jpg")} alt="" />

                    <div className="">
                        {/* ABSOLUTE DIV  */}
                    </div>

                </div>

            </div>

            <div className="aboutthree flex flex-col gap-[20px] px-[7%] lg:px-[17%] pt-[50px] pb-[80px]">

                <div className="flex flex-col gap-[10px] lg:items-center">
                    <div className="text-[12px] font-semibold">
                        <h3>Our Team</h3>
                        <div className="border-t-4 w-[5%] lg:w-[45%] border-yellow-500"></div>    
                    </div>
                    <div className="font-semibold text-[18px]"><h2>Meet With Professional Team</h2></div>
                    <div className="text-[13px] text-neutral-500"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque ex explicabo necessitatibus veniam! Quasi impedit, incidunt dolore veniam consectetur beatae</p></div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-center gap-[50px] items-center">

                    {team.map((items, index)=>{

                        return(
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

            <div className="aboutfour relative text-white h-[300px] lg:h-[400px] mb-[-2px] ">
                <img className=" filter brightness-[44%] object-cover h-full w-full" src={require("../images/meeting.jpg")} alt="" />
                <div className="aboutdet px-[7%] lg:px-[17%] absolute top-[30px] lg:top-[20%] flex flex-col gap-[20px] lg:w-[100%] lg:mx-auto lg:gap-[40px] text-center">
                    <div className="text-[19px] lg:text-[30px] font-semibold lg:w-40% lg:mx-auto"><h2>Contact Us If You Have a Question About Our Service</h2></div>
                    <div className="text-[13px] lg:text-[16px] text-neutral-300 lg:w-[60%] lg:mx-auto"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam unde excepturi reiciendis, quaerat provident accusamus sed omnis nulla natus obcaecati illo, animi officiis, sunt perferendis dicta cum. At, labore.</p></div>
                    <div><button className="bb">CONTACT US</button></div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus;