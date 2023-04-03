import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from "./UserSlice"
import movieReducer from "./MovieSlice"

export const store = configureStore({
  reducer: { 
        user: userReducer,
        movie: movieReducer,
    },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
})