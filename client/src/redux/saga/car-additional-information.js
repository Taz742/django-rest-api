import { takeLatest, call, put, delay } from 'redux-saga/effects';
import {
    GET_CARS_ADDITIONAL_INFORMATION,
    CarsAdditionalInformationFetching,
    CarsAdditionalInformationReceived,
    CarsAdditionalInformationError,
} from '../actions';
import { Http } from '../../utils/http';

export function* watchGetCarsAdditionalInformation() {
    yield takeLatest(GET_CARS_ADDITIONAL_INFORMATION, function*() {
        yield call(function*() {
            yield put(CarsAdditionalInformationFetching());
        });

        yield delay(500);
    
        try {
            const { status, data } = yield call(Http.get, '/api/cars/additional-information/');
    
            if (status === 200) {
                yield put(CarsAdditionalInformationReceived(data));
            } else {
                throw new Error("Uncaught error");
            }
        } catch(err) {
            yield put(CarsAdditionalInformationError(err));
        }
    });
};