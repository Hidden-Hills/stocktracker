import google from '../logos/Company=Google.svg'
import Loading from '../images/load.svg'
import './Componentcss/card.css';
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



class GoogleComp extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      optChain: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/ws/insights/v1/finance/insights?symbol=GOOGL',
      params: {modules: 'defaultKeyStatistics,assetProfile'},
      headers: {
        'x-api-key': 'taaVnR4AqU2jfPSB1JzWM2ZuCJsl3qnw2l8pvKqv'
      }
    };
    axios.request(options)
    .then(response=>{
      this.setState({
          optChain: response.data
      })
      console.log(response.data)
    })
  }
  render(){
    if(!this.state.optChain.finance){
      return(
        <img src={Loading} alt="load"/>
      )
    }
    if(this.state.optChain.finance){
      return(
        <div style={{ display:'flex', justifyContent:'center' }}>
        <div class="card">
        <img src={google} alt="logo"></img>
         <div class="container">
          <p>Google LLC.</p>
          <p>${this.state.optChain.finance.result.symbol}</p>
          <p>Price High: </p>
          <p>Low: </p>
          <a href='example.com'>More Info</a>
         </div>
         </div>
       </div>
      )}
  }
}
export default GoogleComp;