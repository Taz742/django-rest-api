import { combineReducers } from 'redux';
import { SettingsReducer } from './settings';
import { AuthenticationReducer } from './authentication';
import { CarsReducer } from './cars';
import { MyCarsReducer } from './my-cars';
import { CarsAdditionalInformationReducer } from './car-additional-information';

const reducers = combineReducers({
    settingsReducer: SettingsReducer,
    authenticationReducer: AuthenticationReducer,
    carsReducer: CarsReducer,
    myCarsReducer: MyCarsReducer,
    carsAdditionalInformationReducer: CarsAdditionalInformationReducer,
});

export default reducers;
