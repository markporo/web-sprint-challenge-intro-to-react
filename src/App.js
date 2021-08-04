import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
//import styled from 'styled-components';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    //console.log(characters, 'characters array changed')
    axios
      .get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data);
      })
  }, []); // put a variable here so we run again when it changes


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters}></Character>
    </div>
  );
}

export default App;
