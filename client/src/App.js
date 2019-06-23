import React from 'react';
import { withRouter } from 'react-router-dom';
import PrimarySearchAppBar from './components/appBar';
import Content from './views/content';

const App = (props) => {
    return (
        <div>
            <PrimarySearchAppBar />
            <Content />
        </div>
    )
};

export default withRouter(App);