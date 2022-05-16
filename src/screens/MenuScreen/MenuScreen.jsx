import React, { useState, useEffect } from 'react';
import Service from '../../helpers/ServiceClass';
import { pizzasUrl, saladsUrl, drinksUrl } from '../../helpers/constants';
import { printCollection } from '../../helpers/functions';
import { ProductCard, HeaderSection } from '../../components/components.js';
import './MenuScreen.css';

const MenuScreen = () => {

  const [pizzas, setPizzas] = useState([]);
  const [salads, setSalads] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const pizzasService = new Service(pizzasUrl);
  const saladsService = new Service(saladsUrl);
  const drinksService = new Service(drinksUrl);

  useEffect(() => {
    pizzasService.getAll()
    .then(response => {
       setPizzas(response.data);
    })
    .catch(err => {
      console.log(err.message);
    })

    saladsService.getAll()
    .then(response => {
      setSalads(response.data);
    })
    .catch(err => {
      console.log(err.message);
    });

    drinksService.getAll()
    .then(response => {
      setDrinks(response.data);
    })
    .catch(err => {
      console.log(err.message);
    })

  }, [])
 

  return(
      <div className="menu-screen">
          <HeaderSection />
           <div className="parent">
           <h1 className="heading">Menu Page</h1>
              <div className="wrapper box-shadow">
                <div className="upper">
                    <h1 className="heading">Pizzas</h1>
                </div>
              <div className="pizzas-container container">
                  {printCollection(pizzas, ProductCard)}
              </div>
             </div> 
              <div className="wrapper box-shadow">
                <div className="upper">
                    <h1 className="heading">Salads</h1>
                </div>
              <div className="salads-container container">
              {printCollection(salads, ProductCard)}
              </div>
            </div>
              <div className="wrapper box-shadow">
                <div className="upper">
                    <h1 className="heading">Drinks</h1>
                </div>
              <div className="drinks-container container">
              {printCollection(drinks, ProductCard)}
              </div>
          </div>
      </div>
      </div>
  );
}

export default MenuScreen;