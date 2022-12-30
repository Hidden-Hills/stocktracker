import adobe from '../logos/Company=Adobe.svg'
import './Componentcss/adobe.css';


function AdobeComp(){
    return(
        <div className="App">
      <header className="App-header">
        <img src={adobe} className="App-logo" alt="logo" />
      </header>
    </div>
    )
}

export default AdobeComp;