import "./stylesheets/coincard.css";
import Card from 'react-bootstrap/Card';

import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function CoinCard(props) {
  let [price, setPrice] = useState(null);
  let [coinName, setCoinName] = useState(null);
  
  const key = "8C2R26DMRMVREBOX";
  const ticker = props.Name.toLowerCase()
  useEffect(() => {
    axios.get(`https://api.coinbase.com/v2/prices/${props.Name.toLowerCase()}-usd/buy`)
    .then(function(response) {
      console.log(response.data.data.amount)
      setPrice(price = response.data.data.amount )
    })
  }, [])
  return (
    <Card style = {{width: '300px'}} className = 'm-3'>
      <Card.Header>
      <Card.Title className = 'text-primary'>{props.Name}</Card.Title>
      </Card.Header>
      <Card.Body className = 'text-dark'>
        <Card.Text className = 'fw-bold'> Price: ${price}</Card.Text>
        <Card.Text>Sentiment: .035</Card.Text>
      </Card.Body>
    </Card>
  );
}
