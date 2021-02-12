import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import ShopService from '../../services/getGroceries';
import ShopServiceContext from '../shop-service-context';

import './app.css';
const App = () => {

    const shopService = new ShopService();

    return (
        <ShopServiceContext.Provider value={shopService}>
            <Router>
                <Switch>
                    <Container>
                        <Route path='/' exact> 
                            <Home/>
                        </Route>
                        <Route path='/cart' exact> 
                            <Cart/>
                        </Route>
                    </Container>
                </Switch>
            </Router>
        </ShopServiceContext.Provider>
    )
}

export default App;