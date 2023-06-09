import { faFacebook, faInstagram, faLinkedin, faPage4, faPagelines, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown, faAngleDown, faBars, faContactCard, faHome, faInfo, faInfoCircle, faLocationPin, faNewspaper, faPaperPlane, faPeopleGroup, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {


    const [menu, setMenu] = useState("true");

    const menucl = () => {
        if (menu == "true") {
            document.querySelector(".navbars").classList.add('hidden');
            document.querySelector(".navx").classList.remove('hidden');
            document.querySelector(".navbarcontent").classList.remove('hidden');
            setMenu("false");
        } else {
            document.querySelector(".navbars").classList.remove('hidden');
            document.querySelector(".navx").classList.add('hidden');
            document.querySelector(".navbarcontent").classList.add('hidden');
            setMenu("true");
        }
    }


    return (
        <div className="Navbar flex flex-col fixed top-[-1px] w-screen px-[7%] lg:px-[0px] bg-white z-10">

            <div className="flex hidden lg:flex justify-between bg-neutral-900 h-[50px] lg:px-[17%] text-white">
                <div className="flex items-center gap-[10px] text-[12px]">
                    <div>
                        <p> <span className="text-primary mr-[5px]"> <FontAwesomeIcon icon={faLocationPin}/> </span> Tarus Building, Eldoret CBD</p>
                    </div>
                    <div>
                        <p> <span className="text-primary mr-[5px]"> <FontAwesomeIcon icon={faPhone}/> </span> ( +254 ) - 794949822</p>                        
                    </div>

                </div>
                <div className="flex gap-[20px] items-center text-[13px]">
                    <div>
                        <p>Follow Us:</p>
                    </div>
                    <div className="flex gap-[20px] text-[16px] text-primary">
                        <div><FontAwesomeIcon icon={faFacebook}/></div>
                        <div><FontAwesomeIcon icon={faTwitter}/></div>
                        <div><FontAwesomeIcon icon={faInstagram}/></div>
                        <div><FontAwesomeIcon icon={faLinkedin}/></div>
                    </div>

                </div>

            </div>

            <div className="flex justify-between h-[60px] lg:px-[17%] items-center">

                <div className="font-bold lg:text-primary flex items-end gap-[20px]">
                    <Link to="/"> <div><img className="h-[45px] lg:h-[54px] lg:w-[130px]" src={require("../images/logo/logo1.png")} alt="" /></div></Link>
                        {/* <div><img className="h-[35px] w-[390px]" src={require("../images/logo/logoc.png")} alt="" /> </div>  */}
                   
                </div>

                <div className="navbarcontent hidden lg:flex lg:items-center lg:justify-center absolute lg:relative h-screen lg:h-[0] w-[80%] lg:w-[100%] mt-[56px] lg:mt-[0] bg-white top-[1px] lg:top-[0] left-[-1px] lg:left-[0] px-[7%] lg:px-[0]">
                    <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[35px] text-[14px] font-semibold mt-[20px] lg:mt-[0]">
                        <Link to="/"><li onClick={menucl}><span className="lg:hidden text-primary mr-[9px]"><FontAwesomeIcon icon={faHome}/></span> HOME</li></Link>
                       <Link to="/Aboutus" ><li onClick={menucl}><span className="lg:hidden text-primary mr-[9px]"><FontAwesomeIcon icon={faInfoCircle}/></span> ABOUT US</li></Link>
                        <Link to="/Services"> <li onClick={menucl}><span className="lg:hidden text-primary mr-[11px]"><FontAwesomeIcon icon={faNewspaper}/></span> SERVICES <span className="ml-[2px] hidden lg:inline"> <FontAwesomeIcon icon={faAngleDown}/> </span></li></Link>
                        {/* <li onClick={menucl}><span className="lg:hidden text-yellow-400 mr-[13px]"><FontAwesomeIcon icon={faPage4}/></span> PAGES</li> */}
                        <Link to="/Contact"><li onClick={menucl}><span className="lg:hidden text-primary mr-[13px]"><FontAwesomeIcon icon={faPaperPlane}/></span>CONTACT</li></Link>
                        <Link to="/Contact"><li onClick={menucl} className="border-t pt-[30px] lg:hidden lg:border-0 lg:pt-[0]"><span className="lg:hidden text-primary mr-[10px]"><FontAwesomeIcon icon={faContactCard}/></span> CONTACT US</li></Link>
                    </ul>
                </div>

                <div className="navbarbbutton hidden lg:flex lg:w-[250px] justify-end">
                   <Link to="/Contact"> <button className="bb uppercase">Contact Us</button> </Link>

                </div>



                <div onClick={menucl} className="text-[20px] lg:hidden text-primary">
                    <span className="navbars"> <FontAwesomeIcon icon={faBars} /> </span>
                    <span className="navx hidden"> <FontAwesomeIcon icon={faX} /> </span>
                </div>
            </div>


        </div>
    )
}

export default Navbar;