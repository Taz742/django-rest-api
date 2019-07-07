import { all, fork, put } from 'redux-saga/effects';

// actions
import { UserIsAuthorized } from '../actions';

// watchers
import { watchLogin, watchUpdateProfile } from './authentication';
import { watchGetCars } from './cars';
import { watchGetMyCars } from './my-cars';

function* checkAuthentication() {
    const user = localStorage.getItem("user");
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (user) {
        yield put(UserIsAuthorized({
            user: JSON.parse(user),
            access_token,
            refresh_token
        }));
    }
}

export default function* sagas() {
    yield all([
        fork(checkAuthentication),
        fork(watchLogin),
        fork(watchGetCars),
        fork(watchUpdateProfile),
        fork(watchGetMyCars),
    ]);
};