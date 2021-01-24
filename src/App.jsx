import React from 'react'
import CartComponent from './pages/cart-component/cart-component'
import DisplayPage from './pages/display-page/display-page'
import Home from './pages/home/home'
import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header'
import './app.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: {}

        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className='home__component'>
                    <Home/>
                    <div className='content__component'>
                        <Switch>

                            <Route exact="exact" path='/display' component={DisplayPage}/>

                            <Route exact="exact" path='/cart'>
                                <CartComponent/>
                            </Route>

                        </Switch>
                    </div>

                </div>

            </div>
        )
    }
}

export default App