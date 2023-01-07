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
import AmazonGraph from './graphComponents/amazonGraph';
import CoinbaseGraph from './graphComponents/coinbaseGraph';
import GoogleGraph from './graphComponents/googleGraph';
import MicrosoftGraph from './graphComponents/microsoftGraph';
import MondayGraph from './graphComponents/mondayGraph';
import NetflixGraph from './graphComponents/netflixGraph';
import TeslaGraph from './graphComponents/teslaGraph';


function App(){
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<StockComponents/>}/>
        <Route exact path="/adobe-info" element={<AdobeGraph />} />
        <Route exact path='/amazon-info' element={<AmazonGraph/>}/>
        <Route exact path='/google-info' element={<GoogleGraph/>}/>
        <Route exact path='/microsoft-info' element={<MicrosoftGraph/>}/>
        <Route exact path='/netflix-info' element={<NetflixGraph/>}/>
        <Route exact path='/tesla-info' element={<TeslaGraph/>}/>
        <Route exact path='/monday-info' element={<MondayGraph/>}/>
        <Route exact path='/coinbase-info' element={<CoinbaseGraph/>}/>
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
