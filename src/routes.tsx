import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Division from './components/Division/Division';
import Multiplication from './components/Multiplication/Multiplication';
import Sum from './components/Sum/Sum';

// Define the Routes of the application
function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Sum} />
            <Route path="/multiplication" component={Multiplication} />
            <Route path="/division" component={Division} />
        </BrowserRouter>
    );
}

export default Routes;