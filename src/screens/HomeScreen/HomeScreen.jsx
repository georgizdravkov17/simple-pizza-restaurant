import React, { useState, useEffect } from 'react';
import { HeaderSection, ProductCard } from '../../components/components.js';
import Service from '../../helpers/ServiceClass';
import { pizzasUrl, saladsUrl, drinksUrl } from '../../helpers/constants';
import './HomeScreen.css';

const HomeScreen = () => {

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

   const printPizzas = () => {
    return pizzas.map(({id, img, name, price, description}) => <ProductCard key={id} id={id} img={img} name={name} price={price} description={description}/>)
  }

  const printSalads = () => {
    return salads.map(({id, img, name, price, description}) => <ProductCard key={id} id={id} img={img} name={name} price={price} description={description}/>)
  }

  const printDrinks = () => {
    return drinks.map(({id, img, name, price, description}) => <ProductCard key={id} id={id} img={img} name={name} price={price} description={description}/>)
  }

  return(
      <div className="home-screen">
        <HeaderSection />
          <h1 className="heading">Welcome to Domino Pizza Restaurant!</h1>
          <div className="pizzas-container container">
              {printPizzas()}
          </div>
          <div className="salads-container container">
              {printSalads()}
          </div>
          <div className="drinks-container container">
              {printDrinks()}
          </div>
      </div>
  );
}

export default HomeScreen;