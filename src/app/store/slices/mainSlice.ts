import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IMainSliceInitialState {
    activePaginationIndex: number,
}

const initialState: IMainSliceInitialState = {
    activePaginationIndex: 0
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeActivePaginationIndex: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                activePaginationIndex: action.payload
            }
        },
        resetActivePaginationIndex: (state) => {
            return {
                ...state,
                activePaginationIndex: 0
            }
        }
    }
})

export const {
    changeActivePaginationIndex,
    resetActivePaginationIndex
} = mainSlice.actions

export default mainSlice.reducer
