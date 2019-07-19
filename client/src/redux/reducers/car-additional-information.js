import {
    CARS_ADDITIONAL_INFORMATION_FETCHING,
    CARS_ADDITIONAL_INFORMATION_RECEIVED,
    CARS_ADDITIONAL_INFORMATION_ERROR
} from '../actions';

const defaultState = {
    fetching: false,
    categories: [],
    manufacturers: [],
};

export const CarsAdditionalInformationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CARS_ADDITIONAL_INFORMATION_FETCHING: {
            return {
                ...state,
                fetching: true,
                error: null,
            }
        }

        case CARS_ADDITIONAL_INFORMATION_RECEIVED: {
            return {
                ...state,
                fetching: false,
                error: null,
                ...action.payload
            }
        }

        case CARS_ADDITIONAL_INFORMATION_ERROR: {
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