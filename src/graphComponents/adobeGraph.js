import React from 'react';
import axios from 'axios';
import Loading from '../images/load.svg'
import Plot from 'react-plotly.js';


class AdobeGraph extends React.Component{
    constructor(props){
      super(props)
      
      this.state = {
        graphPlots: []
      }
    } 
    componentDidMount(){
      var options = {
        method: 'GET',
        url: 'https://finnhub.io/api/v1/stock/candle?symbol=ADBE&resolution=D&from=1670346000&to=1673024400&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
      };
      
      axios.request(options)
      .then(response=>{
        this.setState({
            graphPlots: response.data
        })
        console.log(response.data)
      })
      
    }
    
    render(){
      if(!this.state.graphPlots){
        return(
            <img src={Loading} alt="logo"></img>
        )
      }
      if(this.state.graphPlots){
        
        return(        
            <Plot
            data={[
              {
                text: "Price",
                y: this.state.graphPlots.c,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'black'},
                name: "Price"
            
              },
            ]}
            layout={ {type: 'scatter', width: 720, height: 440, title: 'Adobe Stock Graph'} }
/>
        )}
    }
}

  export default AdobeGraph;