import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { imageTypeReducer } from './imageTypeSlice'
import { themeReducer } from './themeTypeSlice'
import { poketmonsReducer } from './poketmonsSlice'
import { poketmonDetailReducer } from './poketmonDetailSlice'

export const store = configureStore({
    reducer: {
        imageType: imageTypeReducer,
        themeType: themeReducer,
        poketmons: poketmonsReducer,
        poketmonDetail: poketmonDetailReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
