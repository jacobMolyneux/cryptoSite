
const removeItem = (portfolio, coin) => {
    const index = portfolio.findIndex(item => item === coin)
    portfolio.splice(index, 1)
    return portfolio
}
const addItem = (portfolio, coin) => {
    portfolio.append(coin)
    return portfolio
}

module.exports = removeItem, addItem