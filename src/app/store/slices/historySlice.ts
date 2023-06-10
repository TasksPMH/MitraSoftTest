import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICommentItem } from 'entities/Comments/types'
import { IPostItem } from 'entities/Posts/types'
import { IUserItem } from 'entities/Users/types'

export interface IUserPostsHistory {
    user: IUserItem
    posts: IPostItem[]
}

export interface IPostCommentsHistory {
    postId: number
    comments: ICommentItem[]
}

interface IHistorySliceInitialState {
    usersPostsHistory: IUserPostsHistory[]
    postsCommentsHistory: IPostCommentsHistory[]
}

const initialState: IHistorySliceInitialState = {
    usersPostsHistory: [],
    postsCommentsHistory: []
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setUserPostsHistory: (state, action: PayloadAction<IUserPostsHistory[]>) => {
            return {
                ...state,
                usersPostsHistory: action.payload
            }
        },
        setPostsCommentsHistory: (state, action: PayloadAction<IPostCommentsHistory[]>) => {
            return {
                ...state,
                postsCommentsHistory: action.payload
            }
        },
    }
})

export const {
    setUserPostsHistory,
    setPostsCommentsHistory
} = historySlice.actions

export default historySlice.reducer
