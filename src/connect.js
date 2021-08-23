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
      methond: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Historical Data:");
      console.log(data);
    });
}
export { getExchangeRate, getHistoricalData };
