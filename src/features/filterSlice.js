import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'result',
    initialState: {
        value: '1d',
    },
    reducers: {
        showOneDayResults: (state,payload) => {
            
        }
    }
})