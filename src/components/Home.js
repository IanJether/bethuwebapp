import { faArrowRight, faCheckCircle, faChessKnight, faQuoteRight, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {


    return (
        <div className="Home">


            {/* the first div - PROVIDE BEST  */}

            <div className="one flex flex-col-reverse">
                <div className="oneleft px-[7%] flex flex-col gap-[25px] text-white bg-neutral-900 pt-[50px] pb-[80px] mt-[-2px]">
                    <div className="font-semibold text-[26px]">
                        <h2>We Provide best <span className="bg-yellow-300 text-black"> Accounting </span> & Tax Service For You</h2>
                    </div>
                    <div className="text-[13px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit suscipit recusandae voluptatem officiis culpa veniam quaerat.</p>
                    </div>
                    <div>
                        <button className="bb">GET STARTED</button>
                    </div>

                </div>
                <div className="oneright w-screen h-[250px]">
                    <img className="object-cover h-full w-full" src={require("../images/group.jpg")} alt="" />

                </div>
            </div>

            {/* the second block - KUJISIFU */}

            <div className="two flex flex-col gap-[30px] items-center mt-[-50px]">
                <div className="flex flex-col bg-white gap-[23px] items-center justify-center w-[80%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                    <div className="text-yellow-500 text-[30px]">
                        <FontAwesomeIcon icon={faChessKnight} />
                    </div>
                    <div className="text-[17px] font-semibold">
                        <h3>Saving Strategies</h3>
                    </div>
                    <div className="text-[13px] text-neutral-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white gap-[23px] items-center justify-center w-[80%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                    <div className="text-yellow-500 text-[30px]">
                        <FontAwesomeIcon icon={faChessKnight} />
                    </div>
                    <div className="text-[17px] font-semibold">
                        <h3>Saving Strategies</h3>
                    </div>
                    <div className="text-[13px] text-neutral-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white gap-[23px] items-center justify-center w-[80%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                    <div className="text-yellow-500 text-[30px]">
                        <FontAwesomeIcon icon={faChessKnight} />
                    </div>
                    <div className="text-[17px] font-semibold">
                        <h3>Saving Strategies</h3>
                    </div>
                    <div className="text-[13px] text-neutral-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                    </div>
                </div>

            </div>

            {/* the third block - ABOUT */}

            <div className="three px-[7%] py-[40px]">
                <div className="threeleft flex flex-col gap-[10px]">
                    <div className="h-250px">
                        <img className="object-cover" src={require("../images/meeting.jpg")} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-black flex flex-col gap-[5px] items-center py-[20px]">
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
                        <div className="h-[250px]">
                            <img className="object-cover" src={require("../images/laptop.jpg")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="threeright flex flex-col gap-[15px]">
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
                    <div className="flex flex-col gap-[5px]">
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
                    <div className="h-[250px]">
                        <img className="object-cover" src={require("../images/glaptop.jpg")} alt="" />
                    </div>

                </div>
            </div>

            {/* the fourth block -SERVICES */}

            <div className="four px-[7%] bg-slate-100 py-[50px]">
                <div className="fourone flex flex-col gap-[20px] pb-[40px]">
                    <div className="text-[13px] font-semibold">
                        <h3>Services</h3>
                        <div className="border-b-4 border-yellow-400 w-[10%]"></div>
                    </div>
                    <div>
                        <h2 className="text-[20px] font-semibold mb-[4px]">Services We Offer</h2>
                        <p className="text-[13px] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, laudantium explicabo porro</p>
                    </div>
                    <div>
                        <button className="bb">ALL SERVICES</button>
                    </div>
                </div>
                <div className="fourtwo flex flex-col gap-[30px] ">
                    <div className="flex flex-col items-center">
                        <div>
                            <img src={require("../images/meeting.jpg")} alt="" />
                        </div>
                        <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                            <div className="text-yellow-500 text-[30px]">
                                <FontAwesomeIcon icon={faChessKnight} />
                            </div>
                            <div className="text-[17px] font-semibold">
                                <h3>Saving Strategies</h3>
                            </div>
                            <div className="text-[13px] text-neutral-500">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                            </div>
                            <div className="absolute bottom-[-23px]">
                                <button className="bbs"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <img src={require("../images/meeting.jpg")} alt="" />
                        </div>
                        <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                            <div className="text-yellow-500 text-[30px]">
                                <FontAwesomeIcon icon={faChessKnight} />
                            </div>
                            <div className="text-[17px] font-semibold">
                                <h3>Saving Strategies</h3>
                            </div>
                            <div className="text-[13px] text-neutral-500">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                            </div>
                            <div className="absolute bottom-[-23px]">
                                <button className="bbs"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <img src={require("../images/meeting.jpg")} alt="" />
                        </div>
                        <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-yellow-300">
                            <div className="text-yellow-500 text-[30px]">
                                <FontAwesomeIcon icon={faChessKnight} />
                            </div>
                            <div className="text-[17px] font-semibold">
                                <h3>Saving Strategies</h3>
                            </div>
                            <div className="text-[13px] text-neutral-500">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum repudiandae maiores mollitia.</p>
                            </div>
                            <div className="absolute bottom-[-23px]">
                                <button className="bbs"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            {/* the fifth block - testimonials  */}

            <div className="five relative">
                <div className="h-[400px] overflow-hidden  filter brightness-[44%]">
                    <img className="object-cover w-full h-full" src={require("../images/gworking.jpg")} alt="" />
                </div>
                <div className="absolute flex flex-col gap-[20px] top-[20px] px-[7%]">
                    <div className="flex flex-col gap-[10px] text-white">
                        <div className="text-[13px] font-semibold ">
                            <h2>Testimonials</h2>
                            <div className="border-b-4 border-yellow-400 w-[10%]"></div>
                        </div>
                        <div className="text-[20px] font-semibold "><h3>What They Say About Us</h3></div>
                        <div className="text-[13px] text-neutral-200 "><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatem neque sit impedit eaque natus</p></div>
                    </div>
                    <div>
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
                                <div className="text-yellow-300 text-[30px]">
                                    <FontAwesomeIcon icon={faQuoteRight}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;