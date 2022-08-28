import { useState } from "react";
const ItemCount=({Stock,Initial})=>{
    
    const [product, setProduct] = useState(Initial);

    const add=()=>{
        if(product<Stock)
        setProduct(product+1);
        
    }

    const remove=()=>{
        
        if(product>Initial)
        setProduct(product-1);
    }

    return(
        <div >

            <button onClick={add}>Add</button>
            <h3>{product}</h3>
            <button onClick={remove}>Remove</button>

        </div>
    );
};

export default ItemCount;