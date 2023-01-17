import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState = {
    origin: null,
    destination: null,
    travelTime: null

}

export const myReducer = createSlice({
    name: 'maps',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload

        },
        setDestination: (state, action) => {
            state.destination = action.payload

        },
        setTraveltime: (state, action) => {
            state.travelTime = action.payload

        },
    }
})

export const { setOrigin, setDestination, setTraveltime } = myReducer.actions
export default myReducer.reducer

export const selectOrigin = (select) => (select.maps.origin)
export const selectDestination = (select) => (select.maps.destination)
export const selectTraveltime = (select) => (select.maps.travelTime)
