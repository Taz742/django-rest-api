import { USER_IS_AUTHORIZED, LOG_IN_FETCHING } from '../actions';

const defaultState = {
    authorized: false,
    fetching: false,
    id: -1,
    email: "",
    profile: {

    }
};

export const AuthenticationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_IS_AUTHORIZED: {
            const { user } = action.payload;

            return {
                ...state,
                ...user,
                authorized: true,
                fetching: false,
            }
        }

        case LOG_IN_FETCHING: {
            return {
                ...state,
                fetching: true,
            }
        }

        default:
            return state
    }
}