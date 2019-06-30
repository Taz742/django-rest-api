import { SETTINGS_CHANGED } from '../actions';

const defaultState = {
    language: 'en',
};

export const SettingsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SETTINGS_CHANGED: {
            const { key, value } = action.payload;

            return {
                ...state,
                [key]: value,
            }
        }

        default: 
            return state;
    }
}