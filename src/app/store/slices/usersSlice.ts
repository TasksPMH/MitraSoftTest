import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { IPostItem } from 'entities/Posts/types'
import { IUserItem } from 'entities/Users/types'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export interface IUsersSliceInitialState {
    isUserFetching?: boolean
    userFetchingError?: string

    isUserPostsFetching?: boolean
    userPostsFetchingError?: string

    activeUser?: IUserItem
    activeUserPosts?: IPostItem[]

    splitedPosts?: IPostItem[][]
}

const initialState: IUsersSliceInitialState = {}

const name = 'users'

export const fetchUserAsync = createAction<number>(`${name}/fetchUserAsync`)
export const fetchUserPostsAsync = createAction<number>(`${name}/fetchUserPostsAsync`)

const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        setActiveUser: (state, action: PayloadAction<IUserItem>) => {
            return {
                ...state,
                activeUser: action.payload,
                isUserFetching: false,
                userFetchingError: ''
            }
        },
        fetchUser: (state) => {
            return {
                ...state,
                isUserFetching: true,
                userFetchingError: '',
                activeUser: undefined
            }
        },
        fetchUserFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload || DEFAULT_ERROR_MESSAGE

            return {
                ...state,
                isUserFetching: false,
                userFetchingError: message,
                activeUser: undefined
            }
        },
        setActiveUserPosts: (state, action: PayloadAction<IPostItem[]>) => {
            return {
                ...state,
                activeUserPosts: action.payload,
                isUserPostsFetching: false,
                userPostsFetchingError: ''
            }
        },
        fetchUserPosts: (state) => {
            return {
                ...state,
                isUserPostsFetching: true,
                userPostsFetchingError: '',
                activeUserPosts: undefined
            }
        },
        fetchUserPostsFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload || DEFAULT_ERROR_MESSAGE

            return {
                ...state,
                isUserPostsFetching: false,
                userPostsFetchingError: message
            }
        }
    }
})

export const {
    setActiveUser,
    fetchUser,
    fetchUserFailed,
    setActiveUserPosts,
    fetchUserPosts,
    fetchUserPostsFailed,
} = userSlice.actions

export default userSlice.reducer
