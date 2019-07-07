import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { GET_CARS, CarsFetching, CarsReceived, CarsError } from '../actions';
import { Http } from '../../utils/http';

export function* watchGetCars() {
    yield takeLatest(GET_CARS, function*() {
        yield call(function*() {
            yield put(CarsFetching());
        });
    
        yield delay(500);
    
        try {
            const { status, data } = yield call(Http.get, '/api/cars/');
    
            if (status === 200) {
                yield put(CarsReceived(data));
            } else {
                throw new Error("Uncaught error");
            }
        } catch(err) {
            yield put(CarsError(err));
        }
    });
};