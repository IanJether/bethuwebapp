import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {


    return (
        <div className="px-[7%] lg:px-[17%] bg-neutral-900">


            <div className="Footer  text-white  py-[30px] flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]">

                <div className="flex flex-col gap-[15px] lg:gap-[20px] lg:w-[30%]">
                    {/* Logo and contact info */}
                    <div className="text-yellow-400 text-[23px] font-semibold">
                        <h4>LOGO</h4>
                    </div>
                    <div className="text-neutral-400 text-[12px]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti voluptates molestias </p>
                    </div>
                    <div className="flex flex-col gap-[4px] lg:gap-[10px]">

                        <div className="flex gap-[20px]">
                            <div className="text-[13px] text-yellow-500">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="text-[12px] text-neutral-200">
                                <p>(+254)-112516877</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="text-[13px] text-yellow-500">
                                <FontAwesomeIcon icon={faLocationPin} />
                            </div>
                            <div className="text-[12px] text-neutral-200">
                                <p>Chandaria Innpvation Center</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="text-[13px] text-yellow-500">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="text-[12px] text-neutral-200">
                                <p>Jether@fineteklabs.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] lg:gap-[10px] lg:w-[20%]">
                    <div className="text-white font-semibold text-[15px] lg:mb-[25px]"><h3>Other Pages</h3></div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>Home</p>
                        </div>

                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>About Us</p>
                        </div>

                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>Services</p>
                        </div>

                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>Contact</p>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col gap-[5px] lg:gap-[10px] lg:w-[20%]">
                    <div className="text-white font-semibold text-[15px] lg:mb-[25px]"><h3>Quick Links</h3></div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>Privacy Policy</p>
                        </div>

                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>Terms of Service</p>
                        </div>

                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>Credits</p>
                        </div>

                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-yellow-500 text-[13px]">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="text-[12px] text-neutral-200 ">
                            <p>FAQs</p>
                        </div>

                    </div>

                </div>



                <div className="text-neutral-200 text-[12px] flex flex-col gap-[10px] lg:gap-[30px] lg:w-[25%]">
                    <div>
                        <p>Get the latest news and updates</p>
                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faFacebook} /></div>
                        </div>
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faTwitter} /></div>
                        </div>
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faInstagram} /></div>
                        </div>
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faLinkedin} /></div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="text-center text-[12px] text-neutral-500 flex flex-col gap-[5px] bg-neutral-900 border-t-2 border-neutral-400 py-[20px]">
                <div><p>Copyright © 2023 All Rights Reserved</p></div>
                <div><p>Developed by Fineteklabs</p></div>
            </div>
        </div>
    )
}

export default Footer;