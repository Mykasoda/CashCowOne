import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://staking.harmony.one/validators/mainnet/one1vcye9qvlgjrpfmsv0k925x3fq2z4c26nhefx9k" className="button stakenow">Stake Now - Earn 12% APY!</a>
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
