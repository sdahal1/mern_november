import logo from './logo.svg';
import './App.css';
import Coins from './components/Coins';
import CoinsWithAxios from './components/CoinsWithAxios';
import CoinsWithAxiosAndUseEffect from './components/CoinsWithAxiosAndUseEffect';

function App() {
  return (
    <div className="App">
      <h1>Crypto Coins</h1>
      {/* <Coins></Coins> */} 
      {/* <CoinsWithAxios></CoinsWithAxios> */}
      <CoinsWithAxiosAndUseEffect></CoinsWithAxiosAndUseEffect>
      
    </div>
  );
}

export default App;
