import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import { getBasketTotal } from './reducer';
import {useNavigate} from 'react-router-dom'
function Subtotal() {
  const history = useNavigate();
  const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Tổng ({basket.length} mặt hàng): <strong>{value}</strong>
              <strong>.000</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Đặt hàng bao gồm cả phần quà
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"đ"}
      />
      <button onClick={e => history('/payment')}>Tiếp đến trang thanh toán</button>
    </div>
  )
}

export default Subtotal