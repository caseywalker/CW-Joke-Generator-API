import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import getJoke from '../helpers/data/jokeData';
import './App.scss';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const getSingleJoke = () => {
    getJoke().then((joke) => {
      setSingleJoke(joke);
    });
  };

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      getSingleJoke();
    } else {
      setShowPunchline(true);
    }
  };

  useEffect(() => {
    getSingleJoke();
  }, []);

  return (
    <div className='App'>
      <h1>Joke Generator!</h1>
      <h2>{singleJoke.setup}</h2>
      <h3>{showPunchline ? singleJoke.punchline : ''}</h3>
      <Button color='primary' onClick={handleClick}>{showPunchline ? 'Get Another Joke' : 'Get Punchline'}</Button>
    </div>
  );
}

export default App;
