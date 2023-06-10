import { call, put, takeLatest } from 'redux-saga/effects'
import { IGetAllPostsResponse, getAllPosts } from 'app/api/getAllPosts'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'
import { fetchPosts, fetchPostsAsync, fetchPostsFailed, fetchPostsSucceeded } from '../slices/postsSlice'

function* asyncFetchPosts() {
    try {
        yield put(fetchPosts())
        const response: IGetAllPostsResponse = yield call(getAllPosts)
        if (response.isSucceeded) {
            yield put(fetchPostsSucceeded(response.data || []))
        } else {
            yield put(fetchPostsFailed(response.message || DEFAULT_ERROR_MESSAGE))
        }

    } catch (e) {
        yield put(fetchPostsFailed(DEFAULT_ERROR_MESSAGE))
    }
}

export function* fetchPostsSaga() {
    yield takeLatest(fetchPostsAsync, asyncFetchPosts)
}
