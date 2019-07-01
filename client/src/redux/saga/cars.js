import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { GET_CARS, CarsFetching, CarsReceived, CarsError } from '../actions';
import { Http } from '../../utils/http';

function* getCars(action) {
    yield call(function*() {
        yield put(CarsFetching());
    });

    yield delay(500);

    const {
        currentlyLogedUser
    } = action.payload;

    try {
        const { status, data } = yield call(Http.get, `/api/cars/${currentlyLogedUser ? 'my/' : ''}`);

        if (status === 200) {
            yield put(CarsReceived(data));
        } else {
            throw new Error("Uncaught error");
        }
    } catch(err) {
        yield put(CarsError(err));
    }
};

export function* watchGetCars() {
    yield takeLatest(GET_CARS, getCars);
};