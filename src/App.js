import AdobeComp from './apiComponents/adobe';
import SearchBar from './styleComponents/search';
import { LineChart, Line } from 'recharts';
import './App.css';


function App() {
  return (
    <div>
    <SearchBar/>
    <AdobeComp/>
    </div>
  );
}


export default App;
