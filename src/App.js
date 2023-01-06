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
import AdobeGraph from './graphComponents/adobeGraph';
import Testing from './graphComponents/amazon';
import Testing2 from './graphComponents/coinbase';
import Testing3 from './graphComponents/google';
import Testing4 from './graphComponents/microsoft';
import Testing5 from './graphComponents/monday';
import Testing6 from './graphComponents/netflix';
import Testing7 from './graphComponents/tesla';


function App(){
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<StockComponents/>}/>
        <Route exact path="/adobe-info" element={<AdobeGraph />} />
        <Route exact path='/amazon-info' element={<Testing/>}/>
        <Route exact path='/google-info' element={<Testing2/>}/>
        <Route exact path='/microsoft-info' element={<Testing3/>}/>
        <Route exact path='/netflix-info' element={<Testing4/>}/>
        <Route exact path='/tesla-info' element={<Testing5/>}/>
        <Route exact path='/monday-info' element={<Testing6/>}/>
        <Route exact path='/coinbase-info' element={<Testing7/>}/>
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
