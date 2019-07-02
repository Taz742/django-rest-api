import { all, fork, put } from 'redux-saga/effects';

// actions
import { UserIsAuthorized } from '../actions';

// watchers
import { watchLogin, watchUpdateProfile } from './authentication';
import { watchGetCars } from './cars';

function* checkAuthentication() {
    const user = localStorage.getItem("user");

    if (user) {
        yield put(UserIsAuthorized(JSON.parse(user)));
    }
}

export default function* sagas() {
    yield all([
        fork(checkAuthentication),
        fork(watchLogin),
        fork(watchGetCars),
        fork(watchUpdateProfile),
    ]);
};