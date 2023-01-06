import coinbase from '../logos/Company=Coinbase.svg'
import Loading from '../images/load.svg'
import './Componentcss/card.css';
import React from 'react';
import axios from 'axios';



class CoinbaseComp extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      quoteStock: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      params: {modules: 'symbol'},
      url: 'https://finnhub.io/api/v1/quote?symbol=COIN&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
    };
    
    axios.request(options)
    .then(response=>{
      this.setState({
        quoteStock: response.data
      })
      console.log(response.data)
    })
    
  }
  render(){
    if(!this.state.quoteStock){
      return(
        <img src={Loading} alt="logo"></img>
      )
    }
    if(this.state.quoteStock){
      return(
        <div style={{ display:'flex', justifyContent:'center' }}>
        <div class="card">
        <img src={coinbase} alt="logo"></img>
         <div class="container">
          <p>Coinbase Global, Inc</p>
          <p>${this.state.quoteStock.c}</p>
          <p>Price High: ${this.state.quoteStock.h}</p>
          <p>Low: ${this.state.quoteStock.l}</p>
          <p><a href="coinbase-info">More Info</a></p>
         </div>
         </div>
       </div>
      )}
  }
}

export default CoinbaseComp;