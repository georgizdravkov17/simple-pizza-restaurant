import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({id, img, name, price, description}) => {
  return(
    <Card className="card box-shadow" style={{ width: '15rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p>{description}</p>
         <h3>${price}</h3>
      </Card.Text>
      <button className="btn">Order</button>
    </Card.Body>
  </Card>
  );
}

export default ProductCard;