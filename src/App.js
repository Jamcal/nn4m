import './App.css';
import Logo from './riLogo.svg';
import React, {useState, useEffect} from 'react';
import Products from './products.json';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  
  useEffect(() => {
    getProductArray();
  },[]);

  const getProductArray = async () => {
    const response = await fetch('/v1/plp/en_gb/2506/products.json')
    const data = await response.json();
    console.log(data.Products);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={ProductList} />  
          <Route path="/shop/:id" component={ProductDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

//Generate random ID to use for home Image
const randNum = Math.floor(Math.random() * Products.Products.length);
const randId = Products.Products[randNum].prodid;

const Home =() => (
  
  <div className="homePage"> 
  <img src={Logo} alt="River Island Logo" className="logo"/>
  <img src={"http://riverisland.scene7.com/is/image/RiverIsland/" + randId + "_main"} alt="promo" className="altImage" />
  <Link to='/shop'><h2 className="welcomeText">Begin Shopping</h2></Link>
  </div>
)

export default App;
