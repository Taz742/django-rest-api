import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

// layout
import { Dashboard as DashboardLayout } from './layouts';

// views
import Cars from './views/Cars';
import Account from './views/Account';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

// redux
import { connect } from 'react-redux';

function App(props) {
    const {
        settingsReducer
    } = props;

    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/dashboard" />}/>
                <Route exavt path="/dashboard" component={Cars}/>
                <Route exact path="/cars" component={Cars}/>
                <Route exact path="/cars/create" render={(props) => {
                    return (
                        <DashboardLayout {...props} title={{en: 'Cars', ge: 'ტრანსპორტი'}[settingsReducer.language]}>
                            <div>create car</div>
                        </DashboardLayout>
                    )
                }} />
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