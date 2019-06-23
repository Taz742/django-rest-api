import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

const root = document.getElementById('root');

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>
, root);

serviceWorker.unregister();