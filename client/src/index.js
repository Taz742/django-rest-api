// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

const root = document.getElementById('root');

if (root !== null) {
    ReactDOM.render(
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/foo" component={(props) => {
                return (
                    <div>
                        fooo
                    </div>
                )
            }} />
        </BrowserRouter>, root);
    
    serviceWorker.unregister();    
}
