import { useState } from "react";
import { Button } from "react-bootstrap";
const ItemCount=({Stock,Initial})=>{
    
    const [product, setProduct] = useState(Initial);

    const add=()=>{
        const newValue= product+1;
        if(product<Stock)
        setProduct(newValue);
        
    }

    const remove=()=>{
        const newValue= product-1;
        if(product>Initial)
        setProduct(newValue);
    }

    return(
        <div className="botones" >
            <Button size="sm" variant="success" onClick={add}>Add</Button>
            <h3 className="count">{product}</h3>
            <Button size="sm" variant="danger" onClick={remove}>Remove</Button>
            <Button size="sm" variant="primary">Add to Cart</Button>
        </div>
    );
};

export default ItemCount;