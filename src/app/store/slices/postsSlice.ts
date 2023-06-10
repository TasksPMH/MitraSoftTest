import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { splitPosts } from 'entities/Posts/helpers/splitPosts'
import { IPostItem } from 'entities/Posts/types'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export interface IPostsSliceInitialState {
    isPostFetching?: boolean
    postFetchingError?: string

    posts?: IPostItem[]

    splitedPosts?: IPostItem[][]

    displayedPostsCount: number
}

const initialState: IPostsSliceInitialState = {
    displayedPostsCount: 10
}

const name = 'posts'

export const fetchPostsAsync = createAction(`${name}/fetchPostsAsync`)

const postsSlice = createSlice({
    name,
    initialState,
    reducers: {
        changeSplitedPosts: (state, action: PayloadAction<IPostItem[][]>) => {
            return {
                ...state,
                splitedPosts: action.payload
            }
        },
        fetchPosts: (state) => {
            return {
                ...state,
                isPostFetching: true,
                postFetchingError: '',
            }
        },
        fetchPostsSucceeded: (state, action: PayloadAction<IPostItem[]>) => {
            const splitedPosts = splitPosts(action.payload, state.displayedPostsCount)

            return {
                ...state,
                posts: action.payload,
                splitedPosts,
                isPostFetching: false,
                postFetchingError: '',
            }
        },
        fetchPostsFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload || DEFAULT_ERROR_MESSAGE

            return {
                ...state,
                isPostFetching: false,
                postFetchingError: message
            }
        }
    }
})

export const {
    changeSplitedPosts,
    fetchPosts,
    fetchPostsSucceeded,
    fetchPostsFailed
} = postsSlice.actions

export default postsSlice.reducer
