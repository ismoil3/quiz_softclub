import { createSlice } from "@reduxjs/toolkit";


export const home = createSlice(
    {
        name:"home",
        initialState:
        {
            count:0,
            testLenght:0
        },
        reducers:
        {
            setCount: (state , action) =>
            {
                state.count = action.payload
            },
            setTestLenght: (state , action) =>
            {
                state.testLenght = action.payload
            }
        }
    }
)

export const {setCount , setTestLenght} = home.actions 
export default home.reducer