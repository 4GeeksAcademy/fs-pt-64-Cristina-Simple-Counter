import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function SecondsCounter(props) {
  return <div>{props.seconds} segundos han pasado desde la carga del sitio web.</div>;
}

function App() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsElapsed(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Contador de Segundos</h1>
      <SecondsCounter seconds={secondsElapsed} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app')
);
