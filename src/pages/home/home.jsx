import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import './home.css'
const Home = () => {

    return (
        <div className='component__home__left'>
            <Link to="/display">Products</Link>
            <Link to="/cart">My Cart</Link>

        </div>
    )

}

export default Home