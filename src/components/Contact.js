import { faAngleRight, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Contact = () => {


    return (
        <div className="Contact mt-[55px] lg:mt-[105px] ">
            <div className="abzeero h-[150px] lg:h-[200px] bg-black overflow-hidden relative">
                <img className="object-cover h-full w-full filter brightness-[44%]" src={require("../images/gworking.jpg")} alt="" />
                <div className="aboutrel absolute text-center top-[30%] w-screen">
                    <h2 className="text-white font-bold text-[19px]">CONTACT</h2>
                    <p className="text-white mt-[10px] text-[15px]">Home <span className="text-[15px] mx-[10px] text-yellow-400"> <FontAwesomeIcon icon={faAngleRight} /></span> Contact Us </p>
                </div>
            </div>

            <div className="fourone flex flex-col lg:justify-center px-[7%] lg:px-[17%] lg:items-center gap-[20px] pb-[40px] py-[50px]">
                <div className="text-[13px] font-semibold uppercase">
                    <h3>Contact Us</h3>
                    <div className="border-b-4 border-yellow-400 w-[10%] lg:w-[50%]"></div>
                </div>
                <div className="lg:text-center">
                    <h2 className="text-[20px] font-semibold mb-[4px]">Get In Touch With Us</h2>
                    <p className="text-[13px] text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, laudantium explicabo porro</p>
                </div>
            </div>

            <div className="contactboxes px-[7%] flex flex-col">
                <div className="boxone flex gap-[7px] w-[100%]">
                    <div className="boxloc flex flex-col gap-[10px] text-center items-center justify-center shadow-xl w-[50%] h-[130px]">
                        <div className="text-[25px] text-yellow-300"><FontAwesomeIcon icon={faLocationPin} /></div>
                        <div className="text-[15px] font-semibold"><h3>Our Location</h3></div>
                        <div className="text-[12px] text-neutral-400"><p>Chandaria Innovation Center</p></div>
                    </div>
                    <div className="phonebox flex flex-col gap-[10px] text-center items-center justify-center shadow-xl w-[50%] h-[130px]">
                        <div className="text-[25px] text-yellow-300"><FontAwesomeIcon icon={faLocationPin} /></div>
                        <div className="text-[15px] font-semibold"><h3>Our Location</h3></div>
                        <div className="text-[12px] text-neutral-400"><p>Chandaria Innovation Center</p></div>
                    </div>

                </div>
                <div className="boxtwo flex gap-[7px] w-[100%]">
                    <div className="boxloc flex flex-col gap-[10px] text-center items-center justify-center shadow-xl w-[50%] h-[130px]">
                        <div className="text-[25px] text-yellow-300"><FontAwesomeIcon icon={faLocationPin} /></div>
                        <div className="text-[15px] font-semibold"><h3>Our Location</h3></div>
                        <div className="text-[12px] text-neutral-400"><p>Chandaria Innovation Center</p></div>
                    </div>
                    <div className="phonebox flex flex-col gap-[10px] text-center items-center justify-center shadow-xl w-[50%] h-[130px]">
                        <div className="text-[25px] text-yellow-300"><FontAwesomeIcon icon={faLocationPin} /></div>
                        <div className="text-[15px] font-semibold"><h3>Our Location</h3></div>
                        <div className="text-[12px] text-neutral-400"><p>Chandaria Innovation Center</p></div>
                    </div>

                </div>
            </div>


            <form action="">
                <div className="form px-[7%] flex flex-col gap-[30px] pt-[70px] pb-[50px]">
                    <div><input className="border border-neutral-200 w-[100%] h-[45px] px-[10px] text-[12px] outline-none hover:border-yellow-500" placeholder="Enter Name" type="text" /></div>
                    <div><input className="border border-neutral-200 w-[100%] h-[45px] px-[10px] text-[12px] outline-none hover:border-yellow-500" placeholder="Enter Email" type="text" /></div>
                    <div><input className="border border-neutral-200 w-[100%] h-[45px] px-[10px] text-[12px] outline-none hover:border-yellow-500" placeholder="Enter Subject" type="text" /></div>
                    <div><textarea className="border border-neutral-200 w-[100%] h-[130px] p-[10px] text-[12px] outline-none hover:border-yelllow-500" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea></div>
                    <div> <button className="bb uppercase">Send message</button></div>
                </div>
            </form>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9152.595129544488!2d35.26275755377199!3d0.5180220349639866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0xe2db337df0fc0820!2sEldoret!5e0!3m2!1sen!2ske!4v1681620604847!5m2!1sen!2ske"
                    width="100%"
                    height="350"
                    style={{border: "0"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

        </div>
    )
}

export default Contact;