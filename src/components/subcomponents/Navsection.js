import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navsection = ({page,pagehead}) => {


    return (
        <div className="abzeero h-[150px] lg:h-[200px] bg-black overflow-hidden relative">
            <img className="object-cover h-full w-full filter brightness-[44%]" src={require("../../images/Buil6.jpg")} alt="" />
            <div className="aboutrel absolute text-center top-[30%] w-screen">
                <h2 className="text-white font-bold text-[19px] uppercase">{pagehead}</h2>
                <p className="text-white mt-[10px] text-[15px]">Home <span className="text-[15px] mx-[10px] text-primary"> <FontAwesomeIcon icon={faAngleRight} /></span> {page} </p>
            </div>
        </div>
    )
}

export default Navsection;