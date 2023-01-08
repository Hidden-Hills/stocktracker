import React from 'react';
import Loading from '../images/load.svg'
import axios from 'axios';
import adobe from '../logos/Company=Adobe.svg'
import { Divider } from '@mui/material';
import { Stack } from '@mui/system';


const Card = {
  width: '500px', 
  height: '280px',
  postion: 'fixed', 
  right: '0', 
  left: '0', 
  padding: '10px',
  marginRight: 'auto', 
  marginLeft: 'auto', 
  textAlign: 'center', 
  borderRadius: '5px', 
  transition: '0.3s', 
  backgroundColor: 'white', 
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
}
const monthCard = {
  width: '50px', 
  postion: 'fixed', 
  right: '0', 
  left: '0', 
  marginRight: 'auto', 
  marginLeft: 'auto', 
  textAlign: 'center', 
  borderRadius: '5px', 
  transition: '0.3s', 
  backgroundColor: 'white', 
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
}

class AdobeGraph extends React.Component{
    render(){
        return(
            <div >
              <p>Graph Here</p>
              <p style={monthCard}>1M</p>
              
              <AdobeProfile/>
              
          </div>
        )
    }
}

class AdobeProfile extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      companyProfile: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://finnhub.io/api/v1/stock/profile2?symbol=ADBE&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
    };
    
    axios.request(options)
    .then(response=>{
      this.setState({
        companyProfile: response.data
      })
      console.log(response.data)
    })
    
  }
  
  render(){
    if(!this.state.companyProfile){
      return(
        <img src={Loading} alt="logo"></img>
      )
    }
    if(this.state.companyProfile){
      return(        
        <div style={Card}>
          <img src={adobe} alt="logo"></img>
          <p>{this.state.companyProfile.name}</p>
          <p>{this.state.companyProfile.exchange}</p>
          <p>{this.state.companyProfile.finnhubIndustry}</p>
          <Divider/>
          <AdobePrices/>
        </div>
      )}
  }
}

class AdobePrices extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      quoteStock: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://finnhub.io/api/v1/quote?symbol=ADBE&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
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
        <div>
          
          <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={1}>
          <p style={{top: '14px', position: 'relative'}}>Open: {this.state.quoteStock.o}</p>
          <p>Close: {this.state.quoteStock.pc}</p>
          <p>Current: {this.state.quoteStock.c}</p>
          </Stack>
          
          
       </div>
      )}
  }
}

export default AdobeGraph;