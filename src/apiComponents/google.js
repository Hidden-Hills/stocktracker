import google from '../logos/Company=Google.svg'
import Loading from '../images/load.svg'
import './Componentcss/card.css';
import React from 'react';
import axios from 'axios';



class GoogleComp extends React.Component{
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
      url: 'https://finnhub.io/api/v1/quote?symbol=GOOGL&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
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
        <img src={google} alt="logo"></img>
         <div class="container">
          <p>Alphabet Inc</p>
          <p>${this.state.quoteStock.c}</p>
          <p>Price High: ${this.state.quoteStock.h}</p>
          <p>Low: ${this.state.quoteStock.l}</p>
          <p><a href="google-info">More Info</a></p>
         </div>
         </div>
       </div>
      )}
  }
}
export default GoogleComp;