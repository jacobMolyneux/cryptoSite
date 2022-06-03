import { useState, useEffect } from "react";


import { Line } from "react-chartjs-2";

import Col from 'react-bootstrap/Col'

const DataTable = () => {
  const [chartData, setChartData] = useState({});
  let [coinName, setCoinName] = useState("BTC");
  let [currentPrice, setCurrentPrice] = useState(0);
  let [high, setHigh] = useState(10000)
  let [low, setLow] = useState(7000)
  let [sentiment, setSentiment] = useState(0.36)

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
    let coinData = data["Time Series (Digital Currency Daily)"];
    console.log(coinData)
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

  // this could be brought out to a different page to make code cleaner

  const setDataRange = (range) => {
    if (range === '1d'){
      //select one day range might need to change the api?
    }
    else if (range === '7day'){
      //select 7 day range
    }
    else if (range === '1m'){
      //select past 30 days
    }
    else if (range === '3m'){
      //select past 90 days
    }
    else if (range === '6m'){
      // select past 180 days
    }
    else if (range === '1y'){
      //select past 360 days
    }
    else if (range === 'max'){
      //select all data
    }

  }
  return (
    <div id="DataTableContainer" style = {{width: '100%', height: 'auto'}} className = 'd-flex-column align-items-center'>
     {/* this is the display for the selected coin that is charted */}
      <div className = 'border border-primary m-3' >
        <h1>{coinName}: ${currentPrice}</h1>
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
          <select id="coins" name="coin" className = 'm-3'>
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
        <h3>High: ${high}</h3>
        <h3>Low: ${low}</h3>
        
        </div>
        {/* end of the display for the selected coin that is charted */}
        {/* this is the chart that will be shown */}
        <div id = 'chart diagram' className = 'border border-secondary' style = {{width: '85%'}}>
          <div>
            
          </div>
          <div id="graphContainer" className = 'border border-primary' style = {{ height: 'auto'}} >
          <Line
            id="LineChart"
          data={chartData}
          style = {{width: '100%', height: '100%'}}
          options={{
            maintainAspectRatio: true,
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
                    beginAtZero: false,
                  },
                },
              ],
            },
            }}
            />

          </div>
      
      </div>
      {/* this is the end of the chart */}
      
    </div>
  );
};

export { DataTable };
