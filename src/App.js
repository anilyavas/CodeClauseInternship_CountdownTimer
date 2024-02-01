import CountdownTimer from './components/CountdownTimer';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>
        Anil Yavas Countdown Timer Project with React JS Component
      </h1>
      <CountdownTimer initialSeconds={600} />
    </div>
  );
};

export default App;
