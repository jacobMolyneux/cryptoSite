import CoinCard from "../components/coinCard.js";
import { useState } from "react";
import { DataTable } from "../components/dataTable";

const Homepage = () => {
  let [tableVisibility, setTableVisibility] = useState(false);
  let [tableData, setTableData] = useState("");

  return (
    <div id="App">
      <div id="siteBanner">
        <h1 id="title">Crypto Tracker</h1>
      </div>
      <p>
        A Note: If the data is not loading there may be an issue with the number
        of requests being made per minute. AlphaVantage only allows 5
        requests/min so you may need to wait a minute before it functions
        properly. This is also why there are only 2 coins that can be used other
        wise the application exceeds the rate limit.
      </p>
      <div id="dataDisplayContainer" className="d-flex">
        <div id="CoinCardsContainer" clasName="d-flex">
          <CoinCard coinCode="BTC" />
          <CoinCard coinCode="ETH" />
          <CoinCard coinCode="XRP" />
          <CoinCard coinCode="LTC" />
        </div>
        <DataTable />
      </div>
    </div>
  );
};
export { Homepage };
