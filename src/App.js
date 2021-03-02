import logo from './logo.png';
import './App.css';
import axios from 'axios'

function App() {

  axios.get('http://localhost:1337/restaurants')
  .then(response => {console.log(response)})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.cinquewd.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Cinque Web Development
        </a>
      </header>
    </div>
  );
}

export default App;
