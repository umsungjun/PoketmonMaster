import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PoketmonDetailType, fetchPoketmonDetailApi } from '../Service/PoketmonService'
import { RootState } from '.'

// First, create the thunk
export const fetchPoketmonDetail = createAsyncThunk(
    'poketmon/fetchPoketmonDetail',
    async (name: string) => {
        const response = await fetchPoketmonDetailApi(name)
        return response
    },
    {
        condition: (name, { getState }) => {
            const { poketmonDetail } = getState() as RootState
            const poketmon = poketmonDetail.poketmonDetails[name]
            return !poketmon
        },
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
