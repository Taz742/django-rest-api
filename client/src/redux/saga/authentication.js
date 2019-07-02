import { takeLatest, call, put, delay } from 'redux-saga/effects';

// actions
import {
    LOG_IN,
    UserIsAuthorized,
    UserLoginFetching,
    UPDATE_PROFILE,
    ProfileUpdated,
    UpdateProfileFetching,
} from '../actions';

// utils
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
};

export function* watchLogin() {
    yield takeLatest(LOG_IN, login);
};


function* updateProfile(action) {
    try {
        yield call(function*() {
            yield put(UpdateProfileFetching());
        });

        yield delay(500);

        const { profile } = action.payload;

        const { status, data } = yield call(Http.put, `/api/users/profile/${profile.id}`, profile);

        if (status === 200) {
            yield put(ProfileUpdated(data));
        }
    } catch(err) {

    }
};

export function* watchUpdateProfile() {
    yield takeLatest(UPDATE_PROFILE, updateProfile);
};