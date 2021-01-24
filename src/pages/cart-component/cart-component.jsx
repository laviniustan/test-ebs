import React,{useContext} from 'react'
// import AddProducts from '../../components/add-products/add-products'
import {CartContext} from '../../providers/data.provider'
import CartComponentItem from '../../components/cart-component-item/cart-component-item'
import {Link} from 'react-router-dom'
import './cart-comopnent.css'

const CartComponent=() =>{

    const {cartItem,removeItems,cartTotal } =useContext(CartContext)

    
        return(
            <div>
                <table className='table__cart__component'>
                <th>
                    Category
                </th>
                <th >
                    Name
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Price
                </th>
                <th>
                    Actions
                </th>
                {/* <AddProducts/> */}
                {
                    cartItem.map(item=><CartComponentItem key={item.id} value={item}/>)
                }
                <tr>
                    <td> Price: {cartTotal.toFixed(2)}</td>
                </tr>
                </table>
                <div>
                   
                </div>
                {/* <Link to='/display'>Go to products least</Link> */}
            </div>
        )
    
}

export default CartComponent