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

            <div className="contactboxes px-[17%] flex lg:flex-row lg;justify-between">
                <div className="boxone">
                    <div className="boxloc">
                        {/* <div><FontAwesomeIcon icon={faLocationPin}/></div> */}

                    </div>
                    <div className="phonebox">

                    </div>

                </div>
                <div className="boxtwo">

                </div>
            </div>

        </div>
    )
}

export default Contact;