import adobe from '../logos/Company=Adobe.svg'
import './Componentcss/adobe.css';
import React from 'react';
import axios from 'axios';


class AdobeComp extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      optChain: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/ws/insights/v1/finance/insights?symbol=ADBE',
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
        <h1>Loading</h1>
      )
    }
    if(this.state.optChain.finance){
      return(
       <div className="App">
        <header className="App-header">
        <img src={adobe} className="App-logo" alt="logo" /> 
        </header>
        </div>
      )}
  }
}

export default AdobeComp;