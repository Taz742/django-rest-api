import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { GET_MY_CARS, MyCarsFetching, MyCarsReceived, MyCarsError } from '../actions';
import { Http } from '../../utils/http';

export function* watchGetMyCars() {
    yield takeLatest(GET_MY_CARS, function*() {
        yield call(function*() {
            yield put(MyCarsFetching());
        });
    
        yield delay(500);
    
        try {
            const { status, data } = yield call(Http.get, '/api/cars/my/');
    
            if (status === 200) {
                yield put(MyCarsReceived(data));
            } else {
                throw new Error("Uncaught error");
            }
        } catch(err) {
            yield put(MyCarsError(err));
        }
    });
};