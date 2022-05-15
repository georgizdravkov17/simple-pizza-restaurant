import React, { useState, useEffect } from 'react';
import Service from '../../helpers/ServiceClass';
import { pizzasUrl, saladsUrl, drinksUrl } from '../../helpers/constants';
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

  const printPizzas = () => {
    return pizzas.map(({id, img, name, price, description}) => <ProductCard key={id} id={id} img={img} name={name} price={price} description={description}/>)
  }

  const printSalads = () => {
    return salads.map(({id, img, name, price, description}) => <ProductCard key={id} id={id} img={img} name={name} price={price} description={description}/> )
  }

  const printDrinks = () => {
    return drinks.map(({id, img, name, price, description}) => <ProductCard key={id} id={id} img={img} name={name} price={price} description={description}/> )
  }



  return(
      <div className="menu-screen">
          <HeaderSection />
          <h1 className="heading">Menu Page</h1>
          <button onClick={() => { console.log(salads); }}>Show salads</button>
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

export default MenuScreen;