import {
    USER_IS_AUTHORIZED,
    LOG_IN_FETCHING,
    PROFILE_UPDATED,
    UPDATE_PROFILE_FETCHING,
    USER_IS_UNAUTHORIZED
} from '../actions';

const defaultState = {
    authorized: false,
    fetching: false,
    updateProfileFetching: false,
    user: {
        id: -1,
        email: "",
        profile: {}
    },
};

export const AuthenticationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_IS_AUTHORIZED: {
            const {
                user,
                access_token,
                refresh_token
            } = action.payload;

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);

            return {
                ...state,
                user,
                access_token,
                refresh_token,
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
                updateProfileFetching: false,
                user: {
                    ...state.user,
                    profile
                }
            }
        }

        case UPDATE_PROFILE_FETCHING: {
            return {
                ...state,
                updateProfileFetching: true,
            }
        }

        case USER_IS_UNAUTHORIZED: {
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");

            return {
                ...defaultState
            }
        }

        default:
            return state
    }
};