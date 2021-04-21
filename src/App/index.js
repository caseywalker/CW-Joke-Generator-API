import React, { useState, useEffect } from 'react';
import getJoke from '../helpers/data/jokeData';
import './App.scss';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [userInput, setUserInput] = useState({
    artist: '',
    title: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(userInput);
    setUserInput({
      artist: '',
      title: ''
    });
  };

  const handleUserInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    getSingleJoke();
  }, []);

  return (
    <div className='App'>
      <h1>{singleJoke.setup}</h1>
      <h3>{showPunchline ? singleJoke.punchline : ''}</h3>
      <button onClick={handleClick}>{showPunchline ? 'Get Another Joke' : 'Get Punchline'}</button>
      <p>{userInput.artist}</p>
      <p>{userInput.title}</p>
      <form onSubmit={handleSubmit}>
        <input id='artist' value={userInput.artist} onChange={handleUserInput}>
        </input>
        <input id='title' value={userInput.title} onChange={handleUserInput}>
        </input>
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
