import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type CounterState = {
    count : number,
}

const initialState : CounterState = ({
   count : 0,
})
const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
         state.count += 1;
        },
        decrement : (state) => {
            state.count -= 1;
        },
        incrementByValue : (state, action : PayloadAction<number> ) => {
          state.count = state.count + action.payload;
        }

    }
})

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;