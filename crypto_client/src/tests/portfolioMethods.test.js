const removeItem = require('../features/removeItem')
const addItem = require('../features/addItem')

let testArray = ['BTC', "ETH", "SOL", "LTC", "MON", "USDT"]

test("remove [SOL] from test array", () => {
    expect(removeItem(testArray, 'SOL')).toStrictEqual(['BTC', "ETH", "LTC", "MON", "USDT"])
})

test('remove [BTC] from test array', () => {
    expect(removeItem(testArray, 'BTC')).toStrictEqual(["ETH", "LTC", "MON", "USDT"])
})

test('add [SOL] to test array', () => {
    expect(addItem(testArray, 'SOL')).toStrictEqual(["ETH", "LTC", "MON", "USDT","SOL"])
})