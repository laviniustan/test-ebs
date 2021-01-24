import React, {useContext} from 'react'
import {CartContext} from '../../providers/data.provider'
import './cart-component-item.css'
const CartComponentItem = ({value}) => {

    const {addItem, removeItems, clearItemFromCart} = useContext(CartContext)

    return (

        <tr className="table__cart__component">
            <td>
                {value.category.name}
            </td>
            <td>
                {value.name}
            </td>
            <td className='quantity'>
                <span onClick={() => removeItems(value)}>-</span>
                {value.quantity}
                <span onClick={() => addItem(value)}>+</span>
            </td>
            <td>
                {value.price}
            </td>
            <td>
                <butto  className='close__button' onClick={() => clearItemFromCart(value)}>X</butto>
            </td>

        </tr>

    )

}

export default CartComponentItem