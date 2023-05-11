import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PoketmonListResponseType, fetchPoketmonsAPI } from '../Service/PoketmonService'

export const fetchPoketmons = createAsyncThunk(
    'poketmon/fetchPoketmons',
    async (nextUrl?: string) => {
        const response = await fetchPoketmonsAPI(nextUrl)
        return response
    }
)

interface PoketmonsState {
    poketmons: PoketmonListResponseType
}

const initialState = {
    poketmons: {
        count: 0,
        next: '',
        results: [],
    },
} as PoketmonsState

const poketmonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchPoketmons.fulfilled,
            (state, action: PayloadAction<PoketmonListResponseType>) => {
                if (state.poketmons.results.length > 0) {
                    state.poketmons = {
                        ...action.payload,
                        results: [...state.poketmons.results, ...action.payload.results],
                    }
                } else {
                    state.poketmons = action.payload
                }
            }
        )
    },
})

export const poketmonsReducer = poketmonsSlice.reducer
