import React,{useContext} from 'react';
import './cart-item.css'
const CartItem = ({value, del}) => {

    return (

        <tr className='cart__item__tr'>
            <td>
                {value.name}
            </td>
            <td>
                {value.quantity}
                x ${value.price}
            </td>
            <td>
                <button  onClick={() => del(value)}>x</button>
      
            </td>
        </tr>

    );
}

export default CartItem;
