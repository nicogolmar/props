import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget =()=>{
    return(
        <div style={{fontSize:"3rem"}}>
            
            <FontAwesomeIcon icon={faCartShopping} /> 
            </div>
    );
};

export default CartWidget;