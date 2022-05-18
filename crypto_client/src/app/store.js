import {configureStore} from '@reduxjs/toolkit'
import portfolioReducer from '../features/portfolioSlice'


export default configureStore({
    reducer:{
        counter: portfolioReducer
    },
})