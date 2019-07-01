import { combineReducers } from 'redux';
import { SettingsReducer } from './settings';
import { AuthenticationReducer } from './authentication';
import { CarsReducer } from './cars';

const reducers = combineReducers({
    settingsReducer: SettingsReducer,
    authenticationReducer: AuthenticationReducer,
    carsReducer: CarsReducer,
});

export default reducers;