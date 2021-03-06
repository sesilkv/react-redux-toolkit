//membuat slice
import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    //3 properti
    //name dibuat sama seperti file
    name: 'counter',
    //dibuat objek
    initialState: {
        count: 10
    },
    reducers: {
        //state dapat langsung dirubah seperti JS biasa
        //referensi initialState
        increment: (state) => {
            //properti count
            //seakan akan mengubah state, menggunakan library immer
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        increaseByNumber: (state, action) => {
            state.count += +action.payload
        }
    }
})

export default counterSlice