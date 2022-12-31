import adobe from '../logos/Company=Adobe.svg'
import Adobe from '../logos/Adobe-logo.png'
import './Componentcss/adobe.css';
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
       <div>
 
       <ImgMediaCard/>
        </div>
      )}
  }
}

function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="5"
        image={adobe}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default AdobeComp;