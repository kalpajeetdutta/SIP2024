import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 0,
    data:{}
}

const dataSlice = createSlice({
    name: "surveyData",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        updateData: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload
            }
        }
    }
})

export const {setCurrentPage, updateData} = dataSlice.actions;
export default dataSlice.reducer;