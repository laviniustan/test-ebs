import React, { useContext } from 'react'

import {useHistory,withRouter} from 'react-router-dom'
import './dropdown-cart.css'
import CartItem from '../cart-item/cart-item'
import {CartContext} from '../../providers/data.provider'
const DropdownCart =()=>{

    // let history=useHistory()
    const {cartItem,clearItemFromCart}=useContext(CartContext)
    console.log(cartItem)
    let history= useHistory()

        return(
            <table className='cart-dropdown'>
            {
                cartItem.map(item=><CartItem key={item.id} value={item} del={clearItemFromCart}/>)
            }

                  <div className='cart-items'>
                      <button onClick={()=>{
                             history.push('/cart')
              
                      }}>
                          Go to Shoppage
                      </button>
                  </div>
            </table>
        )
    
}

export default  DropdownCart 