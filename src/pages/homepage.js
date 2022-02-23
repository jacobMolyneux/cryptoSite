import CoinCard from "../components/coinCard.js";
import { useState } from "react";
import { DataTable } from "../components/dataTable";
import { getCBData } from "../connect.js";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
const Homepage = () => {
  let [tableVisibility, setTableVisibility] = useState(false);
  let [tableData, setTableData] = useState("");
  let [portfolio, setPortfolio] = useState(['BTC', "ETH", "LTC", "SOL","ADA"])
  const mapPortfolio = portfolio.map((coin) => {
    return (
      <CoinCard Name= {coin}/>
    )
  })
  return (
    <div id="App" className = 'bg-dark text-white' >
      <div id="siteBanner">
        <h1 id="title">Crypto Tracker</h1>
      </div>
      
      <div id="dataDisplayContainer" className="d-flex-column align-items-between">
        <DataTable />
        <h1>Portfolio</h1>
        <Container id="CoinCardsContainer" className="d-flex">
          
          {mapPortfolio}
        </Container>
        
      </div>
      <Button onClick = {getCBData}>Get Data</Button>
    </div>
  );
};
export { Homepage };
