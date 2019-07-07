import {
    MY_CARS_FETCHING,
    MY_CARS_RECEIVED,
    MY_CARS_ERROR
} from '../actions';

const defaultState = {
    fetching: false,
    error: null,
    links: {
        next: null,
        previous: null,
    },
    count: 0,
    cars: [],
};

export const MyCarsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MY_CARS_FETCHING: {
            return {
                ...state,
                fetching: true,
                error: null,
            }
        }

        case MY_CARS_RECEIVED: {
            return {
                ...state,
                fetching: false,
                error: null,
                ...action.payload
            }
        }

        case MY_CARS_ERROR: {
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        }

        default:
            return state;
    }
};