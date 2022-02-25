import { useState, useEffect } from "react";

import "./stylesheets/dataTable.css";
import { Line } from "react-chartjs-2";

const DataTable = () => {
  const [chartData, setChartData] = useState({});
  let [coinName, setCoinName] = useState("BTC");
  let [currentPrice, setCurrentPrice] = useState(0);

  const keyArray = [
    "8C2R26DMRMVREBOX",
    "M22S93GHXW8SM3TU",
    "BZ7HSU1PYBF9T67U",
    "RWCKW330S2HNET54",
  ];

  const chooseKeyArray = () => {
    let selector = Math.round(Math.random() * 3);
    return keyArray[selector];
  };

  // ohlc is an Open, high, low, close array in that format
  let ohlc = [];
  let timeLabels = [];

  async function getHistoricalData() {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${coinName}&market=USD&apikey=${chooseKeyArray()}`
    );
    const data = await response.json();
    console.log("historical Data is:");
    console.log(data["Time Series (Digital Currency Daily)"]);
    let coinData = data["Time Series (Digital Currency Daily)"];

    for (var time in coinData) {
      var coinInfo = coinData[time];
      timeLabels.push(String(time));
      ohlc.push(
        // Number(coinInfo["1a. open (USD)"]),
        // Number(coinInfo["2a. high (USD)"]),
        // Number(coinInfo["3a. low (USD)"]),
        Number(coinInfo["4a. close (USD)"])
      );
    }
    setCurrentPrice(({ currentPrice } = ohlc.slice(-1)));

    console.log(`the ohlc values are: `);
    console.log(ohlc);
    console.log(" the time labels are: ");
    console.log(timeLabels);
    const Chart = () => {
      setChartData({
        labels: timeLabels.reverse(),
        datasets: [
          {
            label: "CoinPrice",
            data: ohlc.reverse(),
            backgroundColor: ["rgba(245, 99, 132, 0.2)"],
            borderColor: ["rgba(245, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      });
    };
    Chart();
  }

  useEffect(() => {
    getHistoricalData();
  }, []);

  return (
    <div id="DataTableContainer">
      <div id="CoinNameDisplayDiv">
        <h1 id="NameDisplay">
          {" "}
          {coinName} ${currentPrice}{" "}
        </h1>

        <form
          id="coinSelector"
          onChange={(e) => {
            setCoinName((coinName = e.target.value));
            getHistoricalData();
          }}
        >
          <label for="coin">
            <h3>Choose a coin:</h3>
          </label>
          <select id="coins" name="coin">
            <option value="BTC" className="dropDownOption">
              BTC
            </option>
            <option value="ETH" className="dropDownOption">
              ETH
            </option>
            <option value="DOGE" className="dropDownOption">
              DOGE
            </option>
            <option value="XRP" className="dropDownOption">
              XRP
            </option>
          </select>
        </form>
      </div>
      <div id="graphContainer">
        <Line
          id="LineChart"
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                type: "time",
              },
            },
            responsive: true,
            title: "Thiccness Scale",
            display: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export { DataTable };
