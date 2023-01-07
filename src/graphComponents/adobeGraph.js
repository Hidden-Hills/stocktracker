import React from 'react';
import Loading from '../images/load.svg'
import axios from 'axios';
import './Componentcss/card.css';


class AdobeGraph extends React.Component{
    render(){
        return(
            <div>
                <p style={{textAlign: 'center'}}>Graph Here</p>
                <AdobeCompanyNews/>
            </div>
        )
    }
}

class AdobeCompanyNews extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
          companyNews: [0,1,2,3,4,5],
        }
      } 
      componentDidMount(){
        var options = {
          method: 'GET',
          url: 'https://finnhub.io/api/v1/company-news?symbol=ADBE&from=2022-12-31&to=2023-01-01&token=ceqck4qad3i9f7a4s08gceqck4qad3i9f7a4s090',
        };
        
        axios.request(options)
        .then(response=>{
          this.setState({
            companyNews: response.data
          })
          console.log(response.data)
        })
        
      }
      
      render(){
        if(!this.state.companyNews){
          return(
            <img src={Loading} alt="logo"></img>
          )
        }
        if(this.state.companyNews){
            return(
            <div>              
                <p>Adobe Inc</p>
                <p>{this.state.companyNews[0].summary}</p>
            </div>
            )
        }
    }
}
export default AdobeGraph;