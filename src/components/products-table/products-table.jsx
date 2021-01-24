import React, {useState} from 'react'
import {useFetch} from '../../others/fetch-data/fetch_data'

import ProductItem from '../product-item/product-item'
import './products-table.css'
const ProductsTable = () => {

    // const [query, setQuery] = useState('')
    const [dataSort, setDataSort] = useState(false)
    const [dataSortCat, setDataSortCat] = useState(false)

    const url = `http://localhost:3001/api/products/`;
    const {status, data} = useFetch(url);
    let sortDataPrice = () => {

        if (dataSort) {
            data.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })

        } else {
            data.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })

        }
        setDataSort(!dataSort)

    }

    let sortDataCategory = () => {

        if (dataSortCat) {
            data.sort((a, b) => {
                if (a.category.name < b.category.name) {
                    return -1;
                }
                if (a.category.name > b.category.name) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })

        } else {
            data.sort((a, b) => {
                if (a.category.name > b.category.name) {
                    return -1;
                }
                if (a.category.name < b.category.name) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })

        }
        setDataSortCat(!dataSortCat)

    }

    return (

        <table className='table__display__component '>
            <th onClick={sortDataCategory} className="sort">
                Category{
                    dataSortCat === true
                        ? <span>
                                &#8897;</span>
                        : <span>
                                &#8896;</span>
                }
            </th>
            <th >
                Name
            </th>
            <th onClick={sortDataPrice} className="sort">
                Price {
                    dataSort === true
                        ? <span>
                                &#8896;</span>
                        : <span>
                                &#8897;</span>
                }
            </th>
            <th>
                Actions
            </th>

            {

                data.map((item, idx) => {

                    return <ProductItem key={item.id} value={item}/>

                })
            }

        </table>

    )

}

export default ProductsTable