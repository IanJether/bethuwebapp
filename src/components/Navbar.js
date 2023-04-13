import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navbar = () =>{


    return(
        <div className="Navbar flex fixed top-[1px] w-screen justify-between h-[50px] px-[7%] lg:px-[17%] items-center bg-white">
            <div className="font-bold">
                <h2>LOGO</h2>
            </div>
            <div className="text-[20px] text-yellow-500">
                <FontAwesomeIcon icon={faBars}/>
            </div>

    
        </div>
    )
    }
    
    export default Navbar;