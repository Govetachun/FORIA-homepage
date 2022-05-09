
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {Link} from 'react-router-dom'
function Product({ id, title, image, price, rating,sold,origin }) {
  const [{basket},dispatch] = useStateValue();
  console.log("this is the basket >>>",basket);
  const addToBastket = ()=> {
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            sold: sold,
            origin: origin,
          },
      });
  };
  return (
    <div className="product">
      
      <img src={image} alt="" />
      <Link to={"/in4"} className = 'clm'>
      <div className="product__info">
        
        <p className="tit">{title}</p>
        
        <p className="product__origin">
          
          {origin}
          <strong>.000</strong>
          <small>đ</small>
        </p>
        <p className="product__price">
          
          <strong>{price}</strong>
          <strong>.000</strong>
          <small>đ</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        
        <p className="product__sold">Đã bán {sold}</p>
        
        
      </div>
      </Link>
      

      <button onClick={addToBastket}>Add to Cart</button>
    </div>
  );
}

export default Product;