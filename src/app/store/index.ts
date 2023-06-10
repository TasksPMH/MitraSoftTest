import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import mainSlice from './slices/mainSlice'
import historySlice from './slices/historySlice'
import postsSlice from './slices/postsSlice'
import usersSlice from './slices/usersSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        main: mainSlice,
        history: historySlice,
        posts: postsSlice,
        users: usersSlice
    },

    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({ thunk: false }).concat( sagaMiddleware )
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
