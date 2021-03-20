import './App.css';
import ReactPlayer from 'react-player'
import logo from './logo.svg';
import stakesmall from './img/stakesmall.png';
import threeservers from './img/threeservers.png';
import expert from './img/expert.jpg';
import community from './img/community.jpg';

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
          <img src={stakesmall} alt="Stake SMALL, Earn BIG" className="Avatar" />
          <div className="container">
            <h4><b>Stake Small, EARN BIG</b></h4>
            <p>Due to Harmony's Effective Proof of Stake system, smaller validators actually get bigger rewards than the average sized ones.</p>
          </div>
        </div>
        <div className="card">
          <img src={threeservers} alt="3 Servers" className="Avatar" />
          <div className="container">
            <h4><b>3 Servers</b></h4>
            <p>CashCow.ONE runs three independent servers at 3 locations around the globe for maximum uptime, speed and backup power</p>
          </div>
        </div>
        <div className="card">
          <img src={expert} alt="Expert" className="Avatar" />
          <div className="container">
            <h4><b>14 Years Of Experience</b></h4>
            <p>Our Validator servers are maintained by a software engineer with over 14 years of experience.</p>
          </div>
        </div>
        <div className="card">
          <img src={community} alt="Online Community" className="Avatar" />
          <div className="container">
            <h4><b>Strong Community</b></h4>
            <p>You will have a say in the future of Harmony ONE by staking with an elected Validator. You can reach us on Telegram @CashCowOne</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
