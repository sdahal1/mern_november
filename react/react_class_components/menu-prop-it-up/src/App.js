import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem'

function App() {
  return (
    <div className="App">
      <MenuItem 
        dishName = {"Calamari"}
        price = {12.99}
        calories= {300}>
      </MenuItem>
      <MenuItem 
        dishName = {"Bougie Ramen"} 
        price = {25.99}
        calories= {500} >
      </MenuItem>
      <MenuItem 
        dishName = {"Goldfish miso"} 
        price = {99.99}
        calories= {1000}>
        </MenuItem>
      <MenuItem 
        dishName = {"Gyoza"} 
        price = {1.99}
        calories= {1}
        >
      </MenuItem>

    </div>
  );
}

export default App;
