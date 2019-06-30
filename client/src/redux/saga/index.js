import { all, fork, put } from 'redux-saga/effects';
import { watchLogin } from './authentication';
import { UserIsAuthorized } from '../actions';

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
    ]);
};