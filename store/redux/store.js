import { configureStore } from '@reduxjs/toolkit'

import favouriteReducer from './favourite'
import requirementsReducer from './requirements';
export const store = configureStore({
    reducer: {
        favouriteMeals: favouriteReducer,
        requirementsReducer: requirementsReducer,
    },
})
