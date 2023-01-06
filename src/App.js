import AdobeComp from './apiComponents/adobe';
import AmazonComp from './apiComponents/amazon';
import { Stack } from '@mui/system';
import React from 'react';
import './App.css';
import GoogleComp from './apiComponents/google';
import MicrosoftComp from './apiComponents/microsoft';
import NetflixComp from './apiComponents/netflix';
import TeslaComp from './apiComponents/tesla';
import MondayComp from './apiComponents/monday';
import CoinbaseComp from './apiComponents/coinbase';
import { Route, Routes } from "react-router-dom"
import {TestComp} from './apiComponents/adobeGraph';


function App(){
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<StockComponents/>}/>
        <Route exact path="/adobe-info" element={<TestComp />} />
      </Routes> 
    </div>
  );
}
function StockComponents(){
return(
  <div>
  <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" padding={7}> 
    <AdobeComp/>
    <AmazonComp/>
    <GoogleComp/>
    <MicrosoftComp/>   
  </Stack>
  <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" padding={4}> 
    <NetflixComp/>
    <TeslaComp/>
    <MondayComp/>
    <CoinbaseComp/>
  </Stack>
  </div>
  )
}
export default App;
