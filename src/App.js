import { useState, useEffect, useRef } from 'react';

const App = () => {
  // ref for dealing with js setInterval for keeping track of it and stopping if needed
  const Ref = useRef(null);

  // usestate hook for timer
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    }

    const clearTimer = (e) => {
      setTimer('23:59:59');
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    };
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <h1 style={{ color: 'blue' }}>Anil Yavas Countdown Timer</h1>
      <h3>Countdown Timer With React JS</h3>
      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};

export default App;
