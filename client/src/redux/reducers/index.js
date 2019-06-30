import { combineReducers } from 'redux';
import { SettingsReducer } from './settings';
import { AuthenticationReducer } from './authentication';

const reducers = combineReducers({
    settingsReducer: SettingsReducer,
    authenticationReducer: AuthenticationReducer
});

export default reducers;