import { combineReducers } from 'redux';
import { SettingsReducer } from './settings';
import { AuthenticationReducer } from './authentication';
import { CarsReducer } from './cars';
import { MyCarsReducer } from './my-cars';

const reducers = combineReducers({
    settingsReducer: SettingsReducer,
    authenticationReducer: AuthenticationReducer,
    carsReducer: CarsReducer,
    myCarsReducer: MyCarsReducer,
});

export default reducers;