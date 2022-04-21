//basic setting redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'

const store = configureStore({
    //parameter dengan sebuah objek
    reducer: {
        counter: counterSlice.reducer
    }  //1 properti dengan value objek
})

export default store

//redux normal harus create store
//combine reducer dengan create store

/*
sekaligus mendapatkan 2 objek:
counterSlice.reducer
counterSlice.action
*/