import AdobeComp from './apiComponents/adobe';
import AmazonComp from './apiComponents/amazon';
import { Stack } from '@mui/system';
import './App.css';
import GoogleComp from './apiComponents/google';
import MicrosoftComp from './apiComponents/microsoft';
import NetflixComp from './apiComponents/netflix';
import TeslaComp from './apiComponents/tesla';
import MondayComp from './apiComponents/monday';
import CoinbaseComp from './apiComponents/coinbase';


function App() {
  return (
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
  );
}


export default App;
