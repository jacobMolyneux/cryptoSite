import {createSlice} from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
    name: 'portfolio',
    intialState: {
        value: 0,
    },
    reducers:{
        addToPortfolio: (portfolio, coin) => {
            portfolio.append()
        },
        removeFromPortfolio: (portfolio, coin) => {
            const index = portfolio.findIndex(item => item === coin )
            
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = portfolioSlice.actions

export default portfolioSlice.reducer