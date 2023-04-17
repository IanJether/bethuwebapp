import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Footer = () => {


    const otherpages = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "About Us",
            link: ""
        },
        {
            name: "Services",
            link: ""
        },
        {
            name: "Contact",
            link: ""
        },
    ]

    const quicklinks = [
        {
            name: "Privacy Policy",
            link: ""
        },
        {
            name: "Terms of Service",
            link: ""
        },
        {
            name: "Credits",
            link: ""
        },
        {
            name: "FAQs",
            link: ""
        }
    ]


    return (
        <div className="px-[7%] lg:px-[17%] bg-neutral-900 lg:pt-[30px]">


            <div className="Footer  text-white  py-[40px] flex flex-col lg:flex-row gap-[20px] lg:gap-[60px]">

                <div className="flex flex-col gap-[15px] lg:gap-[25px] lg:w-[30%]">
                    {/* Logo and contact info */}
                    <div className="text-primary text-[23px] font-semibold">
                        <h4>LOGO</h4>
                    </div>
                    <div className="text-neutral-400 text-[13px]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti voluptates molestias </p>
                    </div>
                    <div className="flex flex-col gap-[4px] lg:gap-[10px]">

                        <div className="flex gap-[20px]">
                            <div className="text-[13px] text-primary">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="text-[13px] text-neutral-200">
                                <p>(+254)-112516877</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="text-[13px] text-primary">
                                <FontAwesomeIcon icon={faLocationPin} />
                            </div>
                            <div className="text-[13px] text-neutral-200">
                                <p>Tarus Building, Eldoret</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="text-[13px] text-primary">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="text-[13px] text-neutral-200">
                                <p>Jether@fineteklabs.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] lg:gap-[15px] lg:w-[20%]">
                    <div className="text-white font-semibold text-[15px] lg:mb-[25px]"><h3>Other Pages</h3></div>

                    {otherpages.map((items, index) => {

                        return (
                            <div key={index} className="flex gap-[20px]">
                                <div className="text-primary text-[13px]">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <div className="text-[13px] text-neutral-200 ">
                                    <p>{items.name}</p>
                                </div>

                            </div>
                        )
                    })}


                </div>
                <div className="flex flex-col gap-[5px] lg:gap-[15px] lg:w-[20%]">
                    <div className="text-white font-semibold text-[15px] lg:mb-[25px]"><h3>Quick Links</h3></div>
                    {quicklinks.map((items, index) => {

                        return (
                            <div key={index} className="flex gap-[20px]">
                                <div className="text-primary text-[13px]">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <div className="text-[13px] text-neutral-200 ">
                                    <p>{items.name}</p>
                                </div>

                            </div>
                        )
                    })}

                </div>



                <div className="text-neutral-200 text-[12px] flex flex-col gap-[10px] lg:gap-[30px] lg:w-[25%]">
                    <div>
                        <p>Get the latest news and updates</p>
                    </div>
                    <div className="flex gap-[20px]">
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-primary justify-center items-center rounded-full"><FontAwesomeIcon icon={faFacebook} /></div>
                        </div>
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-primary justify-center items-center rounded-full"><FontAwesomeIcon icon={faTwitter} /></div>
                        </div>
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-primary justify-center items-center rounded-full"><FontAwesomeIcon icon={faInstagram} /></div>
                        </div>
                        <div className="text-black text-[17px]">
                            <div className="flex h-[35px] w-[35px] bg-primary justify-center items-center rounded-full"><FontAwesomeIcon icon={faLinkedin} /></div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="text-center text-[12px] text-neutral-500 flex flex-col gap-[5px] bg-neutral-900 border-t-2 border-neutral-400 py-[30px]">
                <div><p>Copyright © 2023 All Rights Reserved</p></div>
                <div><p>Developed by Fineteklabs</p></div>
            </div>
        </div>
    )
}

export default Footer;