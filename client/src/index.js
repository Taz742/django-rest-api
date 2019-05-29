// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavbarHeader from './components/navbar';
import SimpleSlider from './components/slick-slider';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = document.getElementById('root');

if (root !== null) {
    ReactDOM.render(
        <Router>
            <NavbarHeader />
            <SimpleSlider />
            <Route exact path="/" component={App} />
            <Route exact path="/foo" component={(props) => {
                return (
                    <div>
                        fooo
                    </div>
                )
            }} />
        </Router>, root);
    
    serviceWorker.unregister();    
}
