import { Link } from "react-router-dom";


const Contactprompt = () => {


    return (
        <div className="aboutfour relative text-white h-[300px] lg:h-[400px] mb-[-2px] ">
            <img className=" filter brightness-[44%] object-cover h-full w-full" src={require("../../images/buil4.jpg")} alt="" />
            <div className="aboutdet px-[7%] lg:px-[17%] absolute top-[30px] lg:top-[20%] flex flex-col gap-[20px] lg:w-[100%] lg:mx-auto lg:gap-[40px] text-center">
                <div className="text-[19px] lg:text-[30px] font-semibold lg:w-40% lg:mx-auto"><h2>Contact Us If You Have a Question About Our Service</h2></div>
                <div className="text-[13px] lg:text-[16px] text-neutral-300 lg:w-[60%] lg:mx-auto"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam unde excepturi reiciendis, quaerat provident accusamus sed omnis nulla natus obcaecati illo, animi officiis, sunt perferendis dicta cum. At, labore.</p></div>
                <div><Link to="/Contact"><button className="bb">CONTACT US</button></Link></div>
            </div>
        </div>
    )
}

export default Contactprompt;