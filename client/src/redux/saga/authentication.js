import { takeLatest, call, put, delay } from 'redux-saga/effects';

// actions
import {
    LOG_IN,
    UserIsAuthorized,
    UserIsUnauthorized,
    UserLoginFetching,
    UPDATE_PROFILE,
    ProfileUpdated,
    UpdateProfileFetching,
} from '../actions';

// utils
import { Http } from '../../utils/http';

export function* watchLogin() {
    yield takeLatest(LOG_IN, function*(action) {
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
                yield put(UserIsAuthorized(data));
            }
        } catch(err) {
    
        }
    });
};

export function* watchUpdateProfile() {
    yield takeLatest(UPDATE_PROFILE, function*(action) {
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
            const {
                response: {
                    status = -1,
                    data = {}
                } = {},
            } = err;
    
            if (status === 401) {
                yield put(UserIsUnauthorized());
            } else {
                
            }
        } 
    });
};