import { USER_IS_AUTHORIZED, LOG_IN_FETCHING, PROFILE_UPDATED, UPDATE_PROFILE_FETCHING } from '../actions';

const defaultState = {
    authorized: false,
    fetching: false,
    id: -1,
    email: "",
    profile: {

    },
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

        case PROFILE_UPDATED: {
            const { profile } = action.payload;

            return {
                ...state,
                profile,
                updateProfileFetching: false,
            }
        }

        case UPDATE_PROFILE_FETCHING: {
            return {
                ...state,
                updateProfileFetching: true,
            }
        }

        default:
            return state
    }
};