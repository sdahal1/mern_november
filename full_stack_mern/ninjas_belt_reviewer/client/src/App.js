import logo from './logo.svg';
import './App.css';
import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';

function App() {
  return (
    <div className="App container">
      <h1>Hello Ninjas Belt Reviewer</h1>
      <NewNinjaForm/>
      <hr />

      <AllNinjas></AllNinjas>
    </div>
  );
}

export default App;
