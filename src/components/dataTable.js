import { useState, useEffect } from "react";

import "./stylesheets/dataTable.css";
import { Line } from "react-chartjs-2";

const DataTable = () => {
  const [chartData, setChartData] = useState({});

  const key = "8C2R26DMRMVREBOX";

  // ohlc is an Open, high, low, close array in that format
  let ohlc = [];
  let timeLabels = [];

  useEffect(() => {
    getHistoricalData();
    async function getHistoricalData() {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${key}`
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

      console.log(`the ohlc values are: `);
      console.log(ohlc);
      console.log(" the time labels are: ");
      console.log(timeLabels);
      const Chart = () => {
        setChartData({
          labels: timeLabels,
          datasets: [
            {
              label: "CoinPrice",
              data: ohlc.reverse(),
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        });
      };
      Chart();
    }
  }, []);

  return (
    <div id="DataTableContainer">
      <h1 id="NameDisplay"> Bitcoin </h1>
      <div id="graphContainer">
        <Line
          data={chartData}
          options={{
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
