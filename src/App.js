import './App.css';
import {useNavigate} from "react-router-dom";

function App() {

    const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello React</h1>
          <button className='btnStart' onClick={()=> navigate('/users')}>Start</button>
      </header>
    </div>
  );
}

export default App;
