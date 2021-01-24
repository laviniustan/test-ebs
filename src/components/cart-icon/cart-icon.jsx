import React, { useContext } from 'react';

import {CartContext} from '../../providers/data.provider'

export const CartIcon = () => {
    
    const { cartItemsCount}= useContext(CartContext)
    return(
    <div>
        <span>{cartItemsCount}</span>
    </div>
)};


export default CartIcon;
