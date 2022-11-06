import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';

const info = {
  sid: 101340403,
  name: "Nisarg Patel",
  college: {
    name: "George Brown College",
    location: "Toronto"
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfo info = {info}/>
      </header>
    </div>
  );
}

export default App;
