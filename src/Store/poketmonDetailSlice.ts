import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PoketmonDetailType, fetchPoketmonDetailApi } from '../Service/PoketmonService'

// First, create the thunk
export const fetchPoketmonDetail = createAsyncThunk(
    'poketmon/fetchPoketmonDetail',
    async (name: string) => {
        const response = await fetchPoketmonDetailApi(name)
        return response
    }
)

interface PoketmonDetailState {
    poketmonDetails: Record<string, PoketmonDetailType>
}

const initialState = {
    poketmonDetails: {},
} as PoketmonDetailState

// Then, handle actions in your reducers:
const poketmonDetailSlice = createSlice({
    name: 'pokemonDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(
            fetchPoketmonDetail.fulfilled,
            (state, action: PayloadAction<PoketmonDetailType>) => {
                state.poketmonDetails = {
                    ...state.poketmonDetails,
                    [action.payload.name]: action.payload,
                }
            }
        )
    },
})

export const poketmonDetailReducer = poketmonDetailSlice.reducer
