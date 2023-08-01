import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"
import studentReducer from "./student"
export default configureStore({
    reducer:{
        counter: counterReducer,
        student: studentReducer
    }
})