const key = "8C2R26DMRMVREBOX";
let baseUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${key}`;
async function getExchangeRate() {
  await fetch(baseUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data["Realtime Currency Exchange Rate"]);
      return data["Realtime Currency Exchange Rate"];
    });
}

async function getHistoricalData(symbol, exchange) {
  await fetch(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${exchange}&apikey=${key}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Historical Data:");
      console.log(data);
    });
}
async function  getCurrentPrice(symbol){
  await fetch(`https://api.coinbase.com/v2/prices/btc-usd/buy`, {
    method: "GET",
  }).then((res) => {
    return res.json().then((data) => {
      return data
    })
    })
  
}

async function getPossibleCoins(symbols){
  let prices = []
  for(let i = 0; i < symbols.length; i++){
    await fetch(`https://api.coinbase.com/v2/prices/${i}-usd/buy`, {
      method: 'GET',
    }).then((res) => {
      return res.json().then((data) => {
        prices.push(data)
      })
    })
  }
  return prices
}
export { getExchangeRate, getHistoricalData, getCurrentPrice };
