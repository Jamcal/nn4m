import './App.css';

import React, {useState, useEffect} from 'react';
import searchIcon from './Search_Icon.svg';
import Products from './products.json';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

function ProductList(){

    const[query, setQuery] = useState('');
    const[search, setSearch] = useState('');

    useEffect(() =>{
        
    }, [query]);



    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search.toLowerCase());
    }

    return(
        <div>
            <form onSubmit={getSearch} className="listForm">
                <div className="searchDiv">
                    <img src={searchIcon} alt="search" className="searchIcon"/>
                    <input type="text" className="searchBar" placeholder="Search" value={search} onChange={updateSearch}/>
                </div>
                {Products.Products.filter( ( {name}) => name.toLowerCase().includes(query)).map((product, key) => {
                    return(
                        <Link to={`/shop/${product.prodid}`} key={product.prodid}>
                            <div className="container">
                                <LazyLoad width="400" height="400">
                                    <img src={"http://riverisland.scene7.com/is/image/RiverIsland/" + product.prodid + "_main"} alt={product.name} className="imgContainer" />
                                </LazyLoad>
                                <div className="details">
                                    <p key={product.prodid} className="productName">{product.name}</p>
                                    <h3 >£{product.cost}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </form>
        </div>
    )
}

export default ProductList;