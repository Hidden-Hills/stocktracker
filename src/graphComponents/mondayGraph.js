import React from 'react';
import Loading from '../images/load.svg'
import axios from 'axios';
import monday from '../logos/Company=Monday.com.svg'
import { Stack } from '@mui/system';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'


const Card = { 
  width: '730px', 
  height: '300px',
  postion: 'fixed', 
  right: '0', 
  left: '0', 
  padding: '10px',
  marginRight: 'auto', 
  marginLeft: 'auto', 
  textAlign: 'center', 
  borderRadius: '5px', 
  transition: '0.3s', 
  backgroundColor: '#1d1d1d', 
  color: "#dfdfdf",
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
}
const Divider = {
  borderTop: '1px solid #dfdfdf',
  position: 'relative',
  top: '24px'
}

class MondayGraph extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center', padding: '20px'}} >
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
              <MondayProfile/>
              <div style={{padding: '15px'}}>
              <MondayGraphData/>
              </div>
              </Stack>
              
          </div>
        )
    }
}

class MondayGraphData extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      graphData: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://finnhub.io/api/v1/stock/candle?symbol=MNDY&resolution=D&from=1670518800&to=1673188219&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
    };
    
    axios.request(options)
    .then(response=>{
      this.setState({
        graphData: response.data
      })
      console.log(response.data)
    })
    
  }
  
  render(){
    const Options = {

      xAxis: {
        labels: {
          enabled: false
        },
        crosshair: true
    },
    
      tooltip: {
        headerFormat: '',
        useHTML:true,
        backgroundColor: '#ffffff',
        color: '#ffffff',
        borderColor: 'black',
        borderRadius: 10,
        valueDecimals: 2
    },
      chart: {
        // Explicitly tell the width and height of a chart
        width: 750,
        height: null,
        backgroundColor: "#1d1d1d"
      },
    
      title:{
        text: "Monday Stock Chart",
        style:{
          color: '#dfdfdf'
        }
      },
      subtitle:{
        text: 'Past Month'
      },
    
      series: [
      {
        name: '$',
        data: this.state.graphData.c,
        color: '#dfdfdf'
      }
    
      
      ]
    }
    if(!this.state.graphData){
      return(
        <img src={Loading} alt="logo"></img>
      )
    }
    if(this.state.graphData){
      return(        
        <div style={{textAlign: 'center'}}>
            <HighchartsReact highcharts={Highcharts} options={Options}></HighchartsReact>
        </div>
      )}
  }
}

class MondayProfile extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      companyProfile: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://finnhub.io/api/v1/stock/profile2?symbol=MNDY&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
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
          <img src={monday} alt="logo"></img>
          <p>{this.state.companyProfile.name}</p>
          <p>{this.state.companyProfile.exchange}</p>
          <p>{this.state.companyProfile.finnhubIndustry}</p>
          <p style={Divider}></p>
          <MondayMarket/>
        </div>
      )}
  }
}
class MondayMarket extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      marketValues: []
    }
  } 
  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://finnhub.io/api/v1/stock/metric?symbol=MNDY&metric=all&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
    };
    
    axios.request(options)
    .then(response=>{
      this.setState({
        marketValues: response.data
      })
      console.log(response.data)
    })
    
  }
  
  render(){
    if(!this.state.marketValues){
      return(
        <img src={Loading} alt="logo"></img>
      )
    }
    if(this.state.marketValues){
      return(        
        <div>
          <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
          <p style={{position: 'relative', top: '14px'}}>52W High: {this.state.marketValues.metric ? this.state.marketValues.metric['52WeekHigh'] : <span></span>}</p>
          <p>52W Low: {this.state.marketValues.metric ? this.state.marketValues.metric['52WeekLow'] : <span></span>}</p>
          </Stack>
          </Stack>  
       </div>
      )}
  }
}
export default MondayGraph;