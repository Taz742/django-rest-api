import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

// layout
import { Dashboard as DashboardLayout } from './layouts';

// views
import Cars from './views/Cars';
import MyCars from './views/Cars/My';
import Account from './views/Account';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import AddOrUpdateCar from './views/Cars/AddOrUpdate';

// redux
import { connect } from 'react-redux';

function App(props) {
    const {
        settingsReducer
    } = props;

    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                <Route exavt path="/dashboard" component={Cars} />
                <Route exact path="/cars" component={Cars} />
                <Route exact path="/cars/my" component={MyCars} />
                <Route exact path="/cars/my/create" component={AddOrUpdateCar} />
                <Route exact path="/cars/my/edit/:id" component={AddOrUpdateCar} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp}  />
            </Switch>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        settingsReducer: state.settingsReducer,
    }
}

export default connect(mapStateToProps)(withRouter(App));