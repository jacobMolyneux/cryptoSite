import CoinCard from "../components/coinCard.js";
import { useState } from "react";
import { DataTable } from "../components/dataTable";
import { getCurrentPrice } from "../connect.js";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import  Modal from "react-bootstrap/Modal";
import  ListGroup from "react-bootstrap/ListGroup";
import { ChartDisplay } from "../components/chartDisplay.js";
const Homepage = () => {
  let [tableVisibility, setTableVisibility] = useState(false);
  let [tableData, setTableData] = useState("");
  let [portfolio, setPortfolio] = useState(['BTC', "ETH", "SOL", "USDT", "DOGE"])
  let [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  
  const mapPortfolio = portfolio.map((coinCode) => {
    return (
      <CoinCard Name= {coinCode} />
    )
  })
  return (
    <div id="App"  >
      <div id="siteBanner">
        <h1 id="title">Crypto Tracker</h1>
      </div>

      <Modal show = {show} onClick = {handleClose} size = "lg">
        <Modal.Header closeButton> 
          <Modal.Title>Add to Portfolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>There will be a list of stocks to add to portfolio</p>
          <ListGroup>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>Bitcoin</h1>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>Ethereum</h1>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>Solana</h1>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>Tether</h1>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>Cardano</h1>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>XRP</h1>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            <ListGroup.Item className = 'd-flex justify-content-between'>
              <h1>USD Coin</h1>
              <p>Price: $</p>
              <Button variant = 'outline-primary'>Add to Portfolio</Button>
            </ListGroup.Item>
            
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant ='Secondary' onClick = {handleClose}>Close</Button>
          <Button variant = 'primary' onClick = {handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
      <div id="dataDisplayContainer" className="d-flex-column">
        <Container className = 'justify-content-center border'>
          <DataTable/>
        </Container>
        <div className = 'd-flex justify-content-center border-bottom'>
        <h1>Portfolio</h1>
        </div>
        <Container id="CoinCardsContainer" className="d-flex">
          {mapPortfolio}
          <Button className ='m-3 p-4' onClick = {handleShow}>Add</Button>
        </Container>
      </div>
      <Button onClick = {getCurrentPrice}>Price</Button>
    </div>
  );
};
export { Homepage };
