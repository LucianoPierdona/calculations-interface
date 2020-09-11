import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import CalculationTemplate from './components/CalculationTemplate/CalculationTemplate';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={App} />
            <Route path="/multiplication" component={CalculationTemplate} />
        </BrowserRouter>
    );
}

export default Routes;