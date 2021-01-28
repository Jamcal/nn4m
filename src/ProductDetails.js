import './App.css';
import React, {useState, useEffect} from 'react';
import Products from './products.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ProductDetails({match}){

    const [item, setItem] = useState({});
    const [imageArray, setImageArray] = useState([]);

    

    useEffect(() => {
        const productDetails=() => {
            const result = Products.Products.find( ({ prodid }) => prodid === match.params.id );
            setItem(result);
            if(typeof result !=="undefined"){
                setImageArray(result.allImages);
            }
        }
        productDetails();
    },[match]);
    
    if (typeof item == "undefined"){
        return(
            <div className="productDetails">
                <h1>Product id does not exist</h1>
            </div>
        )
    } else{
    return(
        <div className="productDetails">
            <Carousel>
                {imageArray.map((image, key) => <div key={item.prodid}className="carouselImage"> <img src={image} alt={item.name} /></div>)}
            </Carousel>
            <h2> {item.name}</h2>
            <h4> Price: £{item.cost} </h4>
            <h4> Category: {item.category} </h4>
            <h4> Colour: {item.colour} </h4>
            <h4> Design: {item.design} </h4>
            <h4> Fit: {item.fit} </h4>
            <h4> Sizes: {item.sizes}</h4>

        </div>
    )
    }
}

export default ProductDetails;