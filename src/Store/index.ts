import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { imageTypeReducer } from './imageTypeSlice'
import { themeReducer } from './themeTypeSlice'

export const store = configureStore({
    reducer: {
        imageType: imageTypeReducer,
        themeType: themeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
