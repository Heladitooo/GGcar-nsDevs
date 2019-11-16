import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Register from '../containers/Register';
import Layout from '../components/Layout'
import Home from '../containers/Home';
import Maps from '../containers/Maps';
import NewTravel from '../containers/NewTravel';


const App = () =>
{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/new-travel' component={NewTravel}/>
                    <Route exact path='/maps' component={Maps}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;