import { faAngleRight, faClock, faContactBook, faContactCard, faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navsection from "./subcomponents/Navsection";
import { useEffect } from "react";




const Contact = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      }, [])


    return (
        <div className="Contact mt-[55px] lg:mt-[105px] ">

            <Navsection page="Contact" pagehead="Contact" />

            <div className="fourone flex flex-col lg:justify-center px-[7%] lg:px-[17%] lg:items-center gap-[20px] pb-[40px] py-[50px]">
                <div className="text-[13px] font-semibold uppercase">
                    <h3>Contact Us</h3>
                    <div className="border-b-4 border-primary w-[10%] lg:w-[50%]"></div>
                </div>
                <div className="lg:text-center">
                    <h2 className="text-[20px] font-semibold mb-[4px]">Get In Touch With Us</h2>
                    <p className="text-[13px] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, laudantium explicabo porro</p>
                </div>
            </div>

            <div className="contactboxes px-[7%] lg:px-[17%] flex flex-col gap-[13px] lg:gap-[7px] lg:flex-row">
                <div className="boxone flex gap-[10px] w-[100%]">
                    <div className="boxloc flex flex-col gap-[7px] text-center items-center justify-center border shadow-md border-neutral-200 w-[50%] h-[130px]">
                        <div className="text-[26px] text-primary"><FontAwesomeIcon icon={faLocationPin} /></div>
                        <div className="text-[16px] font-semibold"><h3>Visit Us</h3></div>
                        <div className="text-[14px] text-neutral-400"><p>Tarus Building, Eldoret</p></div>
                    </div>
                    <div className="phonebox flex flex-col gap-[7px] text-center items-center justify-center border shadow-md border-neutral-200 w-[50%] h-[130px]">
                        <div className="text-[26px] text-primary"><FontAwesomeIcon icon={faContactCard} /></div>
                        <div className="text-[16px] font-semibold"><h3>Call Us</h3></div>
                        <div className="text-[14px] text-neutral-400"><p>(+254) - 112516877</p></div>
                    </div>

                </div>
                <div className="boxtwo flex gap-[10px] w-[100%]">
                    <div className="boxloc flex flex-col gap-[7px] text-center items-center justify-center border shadow-md border-neutral-200 w-[50%] h-[130px]">
                        <div className="text-[26px] text-primary"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className="text-[16px] font-semibold"><h3>Email Us</h3></div>
                        <div className="text-[14px] text-neutral-400"><p>info@otc.com</p></div>
                    </div>
                    <div className="phonebox flex flex-col gap-[7px] text-center items-center justify-center border shadow-md border-neutral-200 w-[50%] h-[130px]">
                        <div className="text-[26px] text-primary"><FontAwesomeIcon icon={faClock} /></div>
                        <div className="text-[16px] font-semibold"><h3>Working Hours</h3></div>
                        <div className="text-[14px] text-neutral-400"><p>8:00 AM - 5:00 PM</p></div>
                    </div>

                </div>
            </div>


            <form action="">
                <div className="form flex flex-col flex-col-reverse lg:flex-row px-[7%] lg:px-[17%] pt-[30px] lg:pt-[70px] pb-[50px]">
                    <div className="flex lg:w-[50%] flex-col lg:items-center gap-[30px]  p-[20px] lg:p-[40px] shadow-pxl">
                        <div><input className="border border-neutral-300 w-[100%] lg:w-[400px] h-[45px] px-[10px] text-[12px] outline-none hover:border-primary focus:border-primary" placeholder="Enter Name" type="text" /></div>
                        <div><input className="border border-neutral-300 w-[100%] lg:w-[400px] h-[45px] px-[10px] text-[12px] outline-none hover:border-primary focus:border-primary" placeholder="Enter Email" type="text" /></div>
                        <div><input className="border border-neutral-300 w-[100%] lg:w-[400px] h-[45px] px-[10px] text-[12px] outline-none hover:border-primary focus:border-primary" placeholder="Enter Subject" type="text" /></div>
                        <div><textarea className="border border-neutral-300 w-[100%] lg:w-[400px] h-[130px] p-[10px] text-[12px] outline-none hover:border-primary focus:border-primary" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea></div>
                        <div> <button className="bb uppercase">Send message</button></div>
                    </div>
                    <div className="h-[200px] lg:h-[540px] lg:w-[50%] overflow-hidden">
                        <img className="h-full w-full object-cover filter brightness-[100%]" src={require("../images/buil4.jpg")} alt="" />
                    </div>
                </div>
            </form>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9152.595129544488!2d35.26275755377199!3d0.5180220349639866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0xe2db337df0fc0820!2sEldoret!5e0!3m2!1sen!2ske!4v1681620604847!5m2!1sen!2ske"
                    width="100%"
                    height="350"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

        </div>
    )
}

export default Contact;