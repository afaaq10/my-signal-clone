import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './slices/reducers'
export const store = configureStore({
    reducer: {
        maps: mapReducer

    },
})