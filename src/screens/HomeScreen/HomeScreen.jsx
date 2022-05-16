import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderSection, ProductCard, Banner } from '../../components/components.js';
import Service from '../../helpers/ServiceClass';
import { Button } from 'react-bootstrap';
import { pizzasUrl, saladsUrl, drinksUrl } from '../../helpers/constants';
import { printCollection } from '../../helpers/functions';
import './HomeScreen.css';

const HomeScreen = () => {

  const navigate = useNavigate();

   const [pizzas, setPizzas] = useState([]);
   const [salads, setSalads] = useState([]);
   const [drinks, setDrinks] = useState([]);

   const pizzasService = new Service(pizzasUrl);
   const saladService = new Service(saladsUrl);
   const drinksService = new Service(drinksUrl);

   useEffect(() => {
     pizzasService.getLimitedCount(4)
     .then(response => {
       setPizzas(response.data);
     })
     .catch(err => {
       console.log(err.message);
     })

     saladService.getLimitedCount(4)
     .then(response => {
       setSalads(response.data);
     })
     .catch(err => {
       console.log(err.message);
     })

     drinksService.getLimitedCount(4)
     .then(response => {
       setDrinks(response.data);
     })
     .catch(err => {
       console.log(err.message);
     })

   }, [])


  return(
      <div className="home-screen">
        <HeaderSection />
        <Banner />
         <div className="parent">
         <h1 className="heading">Welcome to Domino Pizza Restaurant!</h1>
           <div className="wrapper box-shadow">
             <div className="upper">
                 <h1 className="heading">Pizzas</h1>
                  <Button variant="primary" onClick={() => { navigate("/menu") }}>See more...</Button>
             </div>
           <div className="pizzas-container container">
              {printCollection(pizzas, ProductCard)}
          </div>
           </div>
           <div className="wrapper box-shadow">
             <div className="upper">
                 <h1 className="heading">Salads</h1>
                  <Button variant="primary" onClick={() => { navigate("/menu") }}>See more...</Button>
             </div>
           <div className="salads-container container">
              {printCollection(salads, ProductCard)}
          </div>
           </div>
           <div className="wrapper box-shadow">
             <div className="upper">
                 <h1 className="heading">Drinks</h1>
                  <Button variant="primary" onClick={() => { navigate("/menu") }}>See more...</Button>
             </div>
           <div className="drinks-container container">
              {printCollection(drinks, ProductCard)}
          </div>
           </div>
         </div>
          
      </div>
  );
}

export default HomeScreen;