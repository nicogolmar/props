import ItemCount from "./ItemCount ";
import { useState,useEffect } from "react";
import{Card} from "react-bootstrap";
import "../Styles/Styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer=( {nameEcomerce})=>{
    
    const [products, setProducts] = useState([]);
    
    const getProduct=async()=>{

        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        setProducts(data);
        console.log(data);
    };
    
    useEffect(()=>
    {
        getProduct();
    },[])//array de dependencias useEffect
    
    
    return(

    <div>
        <h1 className="title" >{nameEcomerce}</h1>
        {
            products.map((product)=>
            {return         <div  className="product" key={product.id}>       <Card style={{ height: '23rem' , width:'18rem' ,alignItems:'center', border:'solid gray 1px'
            }}>
                <Card.Img style={{ height: '10rem' , width:'12rem'}}  variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title  className="title" >{product.title}</Card.Title>
                  <Card.Text >${product.price}
                  </Card.Text>
                 <ItemCount  Stock={15} Initial={1}/>

                </Card.Body>
              </Card>
            </div>            
                
            })
        }
    </div>
);
};

export default ItemListContainer;