import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

import ShopService from '../../services/getGroceries';
import ShopServiceContext from '../shop-service-context';
const App = () => {

    const shopService = new ShopService();

    return (
        <ShopServiceContext.Provider value={shopService}>
            <Router>
                <Switch>
                        <Route path='/' exact> 
                            <Home/>
                        </Route>
                        <Route path='/cart' exact> 
                            <Cart/>
                        </Route>
                </Switch>
            </Router>
        </ShopServiceContext.Provider>
    )
}

export default App;