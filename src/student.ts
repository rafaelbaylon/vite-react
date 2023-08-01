import {createSlice} from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name : "students",
    initialState:{
        student: "sample"
    },
    reducers: {
        addNewStudent: (state,action) => {
            state.student = action.payload
        }
    }

})

export const {addNewStudent} = studentSlice.actions

export default studentSlice.reducer