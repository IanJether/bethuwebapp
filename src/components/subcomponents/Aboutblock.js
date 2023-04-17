import { faCheckCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Aboutblock = () => {


    const countries = [
        {
            country: "Australia"
        },
        {
            country: "Canada"
        },
        {
            country: "UK"
        },
        {
            country: "USA"
        },
        {
            country: "Sweden"
        },
        {
            country: "Spain"
        },
        {
            country: "Germany"
        },
    ]

    return (
        <div className="three flex flex-col gap-[10px] lg:flex-row  lg:gap-[20px] px-[7%] lg:px-[17%] py-[60px]">
            <div className="threeleft flex flex-col gap-[10px] lg:w-[50%]">
                <div className="h-[400px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={require("../../images/buil3.jpg")} alt="" />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-[10px]">
                    <div className="bg-black lg:w-[50%] flex flex-col gap-[9px] items-center justify-center py-[20px]">
                        <div className="text-[23px] text-primary">
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="text-white font-bold">
                            <h3>10+</h3>
                        </div>
                        <div className="text-neutral-300 text-[13px]">
                            <p>Years Of Experience</p>
                        </div>
                    </div>
                    <div className="h-[270px] lg:h-full lg:w-[50%] hidden lg:block">
                        <img className="object-cover" src={require("../../images/study.jpg")} alt="" />
                    </div>
                </div>
            </div>
            <div className="threeright flex flex-col gap-[15px] lg:w-[50%]">
                <div className="text-[14px] font-semibold">
                    <h3>About Us</h3>
                    <div className="border-b-4 border-primary w-[10%]"></div>
                </div>
                <div className="text-[22px] font-semibold">
                    <h3>We Have over 10 years of Experience in Helping Students Study Abroad</h3>
                </div>
                <div className="text-[14px] text-neutral-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aperiam eum quos repellendus fuga possimus tenetur velit praesentium debitis voluptatibus, dolor porro nihil illo maxime rem delectus error distinctio culpa?</p>
                </div>
                <div className="lg:flex">

                    <div className="flex flex-col gap-[5px] lg:w-[30%]">

                        {countries.map((items, index) => {

                            return (
                                <div key={index} className="flex gap-[10px]">
                                    <div className="text-primary text-[15px]">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </div>
                                    <div className="text-[14px] text-neutral-500">
                                        <p>{items.country}</p>
                                    </div>

                                </div>

                            )
                        })}

                    </div>
                    <div className="h-[250px] lg:h-[190px] lg:w-[70%] mt-[15px] lg:mt-[0] overflow-hidden">
                        <img className="object-cover h-full w-full" src={require("../../images/Buil1.jpg")} alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Aboutblock;