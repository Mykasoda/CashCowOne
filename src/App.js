{/*import logo from './logo.svg';*/}
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button className="button stakenow">Stake Now - Earn 12% APY!</button>
        <span className="logo">99.99% Uptime - Harmony One Validator</span>
      </header>
      <div className="Hero">
          <ReactPlayer url='cashcow.mp4' playing={true} loop={true} width='100%' height='auto' />
      </div>
      <div className="Features">
        <p>Why CashCow?</p>
      </div>
    </div>
  );
}

export default App;
