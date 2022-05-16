export const printCollection = (collection, Component) => {
    return collection.map(({id, img, name, price, description}) => <Component key={id} id={id} img={img} name={name} price={price} description={description}/> )
  }
