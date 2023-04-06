import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PoketmonListResponseType, fetchPoketmonsAPI } from '../Service/PoketmonService'

// First, create the thunk
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

// Then, handle actions in your reducers:
const poketmonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
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
