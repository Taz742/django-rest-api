import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './products';
import CreateProduct from './products/create';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/products/create" component={CreateProduct} />
                </Switch>
            </div>
        )
    }
};

export default Content;