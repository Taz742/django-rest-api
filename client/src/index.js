import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

const store = configureStore();

const root = document.getElementById('root');

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ThemeProvider>
, root);

serviceWorker.unregister();