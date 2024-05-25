import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../features/ThemeSlice';

const store = configureStore({
    reducer: themeReducer
})

export default store;