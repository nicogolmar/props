import ItemCount from "./ItemCount ";

const ItemListContainer=( {nameEcomerce})=>{return(

    <div>
        <h1>{nameEcomerce}</h1>
        <ItemCount Stock={15} Initial={1}/>
    </div>
);
};

export default ItemListContainer;