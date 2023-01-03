import AdobeComp from './apiComponents/adobe';
import AmazonComp from './apiComponents/amazon';
import SearchBar from './styleComponents/search';
import { Stack } from '@mui/system';
import { LineChart, Line } from 'recharts';
import './App.css';
import GoogleComp from './apiComponents/google';
import MicrosoftComp from './apiComponents/microsoft';
import NetflixComp from './apiComponents/netflix';
import TeslaComp from './apiComponents/tesla';


function App() {
  return (
    <div>
    <SearchBar/>
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center"> 
    <AdobeComp/>
    <AmazonComp/>
    <GoogleComp/>
    <MicrosoftComp/>
    </Stack>
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" padding={4}> 
    <NetflixComp/>
    <TeslaComp/>
    </Stack>
    </div>
  );
}


export default App;
