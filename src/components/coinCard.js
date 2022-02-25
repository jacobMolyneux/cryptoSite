import "./stylesheets/coincard.css";
import Card from 'react-bootstrap/Card';

import React from "react";
import { useState, useEffect } from "react";

export default function CoinCard(props) {
  const [prices, setPrice] = useState(null);
  const [coinName, setCoinName] = useState(null);
  const key = "8C2R26DMRMVREBOX";

  // useEffect(() => {
  //   getData();

  //   // this will fetch the data
  //   // async function getData() {
  //   //   const response = await fetch(
  //   //     `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${props.coinCode}&to_currency=USD&apikey=${key}`
  //   //   );
  //   //   const data = await response.json();
  //   //   // console.log(data["Realtime Currency Exchange Rate"]);

  //   //   // store the data in the price state
  //   //   setPrice(
  //   //     Number(
  //   //       data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
  //   //     ).toFixed(2)
  //   //   );
  //   //   setCoinName(
  //   //     data["Realtime Currency Exchange Rate"]["2. From_Currency Name"]
  //   //   );
  //   //   console.log(data["Realtime Currency Exchange Rate"]);
  //   }
  // }, []);
  return (
    <Card style = {{width: '300px'}} className = 'm-3'>
      <Card.Header>
      <Card.Title className = 'text-primary'>{props.Name}</Card.Title>
      </Card.Header>
      <Card.Body className = 'text-dark'>
        <Card.Text>$ {props.Price}</Card.Text>
        <Card.Text>Sentiment: .035</Card.Text>
      </Card.Body>
    </Card>
  );
}
