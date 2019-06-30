import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { LOG_IN, UserIsAuthorized, UserLoginFetching } from '../actions';
import { Http } from '../../utils/http';

function* login(action) {
    const {
        email,
        password
    } = action.payload;

    yield call(function*() {
        yield put(UserLoginFetching());
    });

    try {
        const { status, data } = yield call(Http.post, '/api/login/', { email, password });

        if (status === 200) {
            yield delay(500);

            const {
                user,
                access_token,
                refresh_token
            } = data;

            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
            localStorage.setItem("user", JSON.stringify(user));

            yield put(UserIsAuthorized(user));
        }
    } catch(err) {

    }
}

export function* watchLogin() {
    yield takeLatest(LOG_IN, login);
}