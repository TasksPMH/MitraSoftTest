import { all } from 'redux-saga/effects'
import { fetchPostsSaga } from './postsSagas'
import { fetchUserPostsSaga, fetchUserSaga } from './usersSagas'

export default function* rootSaga() {
    yield all([
        fetchPostsSaga(),
        fetchUserSaga(),
        fetchUserPostsSaga()
    ])
}
