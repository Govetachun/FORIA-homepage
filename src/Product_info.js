import React from 'react'
import './Product_info.css'
import { useStateValue } from './StateProvider';
import Information from './Information';
function Product_info() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div class="heading-section">
              <h2>Thông tin sản phẩm</h2>
              {basket.map(item => (
            <Information
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              origin = {item.origin}
            />
          ))}
          </div>
          
  )
}

export default Product_info