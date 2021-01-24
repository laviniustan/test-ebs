import React, {useContext} from 'react'
import CartIcon from '../cart-icon/cart-icon'
import DropdownCart from '../dropdown-cart/dropdown-cart';
import {CartContext} from '../../providers/data.provider'
import {useLocation} from 'react-router-dom'
import './header.css'

const Header = () => {
    const location = useLocation()
    console.log(location)
    const {hidden, toggleHidden} = useContext(CartContext)

    return (
        <div className='header__component'>
            <div className='header__home'>
                <h2>{
                        (location.pathname) === "/display"
                            ? "Products"
                            : "MyCart"
                    }</h2>

            </div>
            <div onClick={toggleHidden} className='header__cartNr'>
                <CartIcon/>
            </div>
            <div>
                {
                    hidden
                        ? null
                        : <DropdownCart/>
                }
            </div>

        </div>
    )

}

export default Header