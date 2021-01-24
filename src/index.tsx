import React from 'react';
import {render} from 'react-dom';
import App from './App'
import {BrowserRouter as Router} from "react-router-dom";
import CartProvider from './providers/data.provider';

render(
     
    <Router>
    <CartProvider>
       <App/>
       </CartProvider>
    </Router>

    ,
    document.getElementById(
        'root'
    )
);
