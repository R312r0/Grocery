import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import './app.css';
const App = () => {
    return (
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
    )
}

export default App;