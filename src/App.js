import './App.css';
import ReactPlayer from 'react-player'
import logo from './logo.svg';
import stakesmall from './stakesmall.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a target="_blank" rel="noreferrer" href="https://staking.harmony.one/validators/mainnet/one1vcye9qvlgjrpfmsv0k925x3fq2z4c26nhefx9k" className="button stakenow">Stake Now - Earn 12% APY!</a>
        <span className="logo">99.99% Uptime - Harmony One Validator</span>
      </header>
      <div className="Hero">
          <ReactPlayer url='cashcow.mp4' playbackRate={0.6} playing={true} muted={true} loop={true} width='100%' height='auto' />
      </div>
      <h2>Why CashCow?</h2>
      <div className="Features">
        <div className="card">
          <img src={stakesmall} alt="Avatar" className="Avatar" />
          <div className="container">
            <h4><b>Stake Small, Get BIG REWARDS</b></h4>
            <p>Due to Harmony's Effective Proof of Stake system, smaller validators actually get bigger rewards than the average sized ones.</p>
          </div>
        </div>
        <div className="card">
          <img src={logo} alt="Avatar" className="Avatar" />
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img src={logo} alt="Avatar" className="Avatar" />
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img src={logo} alt="Avatar" className="Avatar" />
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
          <img src={logo} alt="Avatar" className="Avatar" />
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
