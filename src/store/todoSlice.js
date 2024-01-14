import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [] },
    reducers: {
        setData(state, action) {
            state.todos = action.payload
        }
    }
})

export const todoActions = todoSlice.actions


const store = configureStore({
    reducer: todoSlice.reducer
})


export default store