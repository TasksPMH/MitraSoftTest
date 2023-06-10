import {  call, put, takeLatest } from 'redux-saga/effects'
import { DEFAULT_ERROR_MESSAGE, REQUEST_FAILED_MESSAGE } from 'shared/consts'
import { IGetUserPostsResponse, getUserPosts } from 'app/api/getUserPosts'
import { PayloadAction } from '@reduxjs/toolkit'
import { IGetUserResponse, getUser } from 'app/api/getUser'
import { fetchUser, fetchUserAsync, fetchUserFailed, fetchUserPosts, fetchUserPostsAsync, fetchUserPostsFailed, setActiveUser, setActiveUserPosts } from '../slices/usersSlice'

function* asyncFetchUser(action: PayloadAction<number>) {
    let response: IGetUserResponse = {
        isSucceeded: false,
        message: DEFAULT_ERROR_MESSAGE
    }
    try {
        yield put(fetchUser())
        response = yield call(getUser, action.payload)
        if (response.isSucceeded && response.data) {
            yield put(setActiveUser( response.data ))
        } else {
            yield put(fetchUserFailed(response.message || REQUEST_FAILED_MESSAGE))
        }

    } catch (e) {
        yield put(fetchUserFailed(DEFAULT_ERROR_MESSAGE))
    }
    return response
}

function* asyncFetchUserPosts(action: PayloadAction<number>){
    let response: IGetUserPostsResponse = {
        isSucceeded: false,
        message: DEFAULT_ERROR_MESSAGE
    }
    try {
        yield put(fetchUserPosts())
        response = yield call(getUserPosts, action.payload)
        if (response.isSucceeded) {
            yield put(setActiveUserPosts( response.data || []))
        } else {
            yield put(fetchUserPostsFailed(response.message || REQUEST_FAILED_MESSAGE))
        }

    } catch (e) {
        yield put(fetchUserPostsFailed(DEFAULT_ERROR_MESSAGE))
    }
    return response
}

export function* fetchUserPostsSaga() {
    yield takeLatest(fetchUserPostsAsync, asyncFetchUserPosts)
}

export function* fetchUserSaga() {
    yield takeLatest(fetchUserAsync, asyncFetchUser)
}
