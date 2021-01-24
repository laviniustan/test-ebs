import React, {createContext, useState, useEffect} from 'react'

import {addItemToCart, removeItemToCart, getCartItemsCount, getCartTotal,filterItemFromCart} from '../others/cart/cart'

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItem: [],
    addItems: () => {},
    removeItems: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cartTotal: 0

})

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    const [cartItem, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);
    const toggleHidden = () => setHidden(!hidden)

    const addItem = item => setCartItems(addItemToCart(cartItem, item))
    const removeItems =item =>setCartItems(removeItemToCart(cartItem,item))
    const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItem, item));
    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItem))
        setCartTotal(getCartTotal(cartItem))
    },[cartItem])

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItem,
                addItem,
                cartItemsCount,
                cartTotal,
                removeItems,
                clearItemFromCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider