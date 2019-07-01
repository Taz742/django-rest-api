import { CARS_FETCHING, CARS_RECEIVED, CARS_ERROR } from '../actions';

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

export const CarsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CARS_FETCHING: {
            return {
                ...state,
                fetching: true,
                error: null,
            }
        }

        case CARS_RECEIVED: {
            return {
                ...state,
                fetching: false,
                error: null,
                ...action.payload
            }
        }

        case CARS_ERROR: {
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