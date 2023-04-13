import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {


    return (
        <div className="Footer bg-neutral-900 text-white px-[7%] py-[30px] flex flex-col gap-[20px]">

            <div className="flex flex-col gap-[15px]">
                {/* Logo and contact info */}
                <div className="text-yellow-400 text-[23px] font-semibold">
                    <h4>LOGO</h4>
                </div>
                <div className="text-neutral-400 text-[12px]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti voluptates molestias </p>
                </div>
                <div className="flex flex-col gap-[4px]">

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

            <div className="flex flex-col gap-[5px]">
                <div className="text-white font-semibold text-[15px]"><h3>Other Pages</h3></div>
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
            <div className="flex flex-col gap-[5px]">
                <div className="text-white font-semibold text-[15px]"><h3>Quick Links</h3></div>
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



            <div className="text-neutral-200 text-[12px] flex flex-col gap-[10px]">
                <div>
                    <p>Get the latest news and updates</p>
                </div>
                <div className="flex gap-[20px]">
                    <div className="text-black text-[17px]">
                        <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faFacebook}/></div>
                    </div>
                    <div className="text-black text-[17px]">
                        <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faTwitter}/></div>
                    </div>
                    <div className="text-black text-[17px]">
                        <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faInstagram}/></div>
                    </div>
                    <div className="text-black text-[17px]">
                        <div className="flex h-[35px] w-[35px] bg-yellow-500 justify-center items-center rounded-full"><FontAwesomeIcon icon={faLinkedin}/></div>
                    </div>
                </div>
            </div>

            <div className="text-[12px] text-neutral-300 text-center">
                <div><p>Copyright &copy; 2023 All Rights Reserved </p></div>
                <div><p>Developed by Fineteklabs </p></div>
            </div>

        </div>
    )
}

export default Footer;