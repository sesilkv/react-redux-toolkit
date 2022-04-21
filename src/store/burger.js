import {createSlice} from "@reduxjs/toolkit"

const burgerSlice = createSlice({
    //parameter objek
    name: 'burger',
    initialState: {
        //properti
        ingredient: {
            patty: 0,
            lettuce: 0,
            cheese: 0,
            tomato: 0
        },
        totalPrice: 0,
        pricePerItem: {
            patty: 1000,
            lettuce: 500,
            cheese: 700,
            tomato: 200
        }
    },
    reducers: {
        addIngredient: (state, action) => {
            //hasil sebuah string
            state.ingredient[action.payload.ingredient] += 1
            const pattyPrice = state.ingredient.patty * state.pricePerItem.patty
            const lettucePrice = state.ingredient.lettuce * state.pricePerItem.lettuce
            const cheesePrice = state.ingredient.cheese * state.pricePerItem.cheese
            const tomatoPrice = state.ingredient.tomato * state.pricePerItem.tomato
            state.totalPrice = pattyPrice + lettucePrice + cheesePrice + tomatoPrice
        },
        removeIngredient: (state, action) => {
            // ketika 0 tidak bisa dikurangi lagi
            if (state.ingredient[action.payload.ingredient] > 0) {
                state.ingredient[action.payload.ingredient] -= 1
                const pattyPrice = state.ingredient.patty * state.pricePerItem.patty
                const lettucePrice = state.ingredient.lettuce * state.pricePerItem.lettuce
                const cheesePrice = state.ingredient.cheese * state.pricePerItem.cheese
                const tomatoPrice = state.ingredient.tomato * state.pricePerItem.tomato
                state.totalPrice = pattyPrice + lettucePrice + cheesePrice + tomatoPrice
            }
        }
    }
})

export default burgerSlice