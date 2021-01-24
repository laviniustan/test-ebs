import React, {useContext} from 'react'
import {CartContext} from '../../providers/data.provider'
import './product-item.css'
const ProductItem = ({value}) => {
    const {name, price, category} = value
    const {addItem} = useContext(CartContext);
    // console.log(value)
    return (
        <tr className="table__display__element" >
  
            <td >
                {category.name}
             
            </td>
         
            <td>
                {name}
              
            </td>

            <td>
                {price}
             
            </td>
            <td>
                <input className="input__button" value="add to card" type="button" onClick={() => addItem(value) }
                    // onClick={()=>console.log(value)}
                />
               
            </td>
       
        </tr>
    )
}
export default ProductItem