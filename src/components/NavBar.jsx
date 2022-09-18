import CartWidget from "./CartWidget";
import NavScrollExample from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";

const NavBar=()=>{
    return(

        <div className="NavBar">
            <FontAwesomeIcon style={{fontSize:"5rem"}} icon={faBagShopping} />
            <NavScrollExample />
            <CartWidget />
        </div>
    );
};

export default NavBar;