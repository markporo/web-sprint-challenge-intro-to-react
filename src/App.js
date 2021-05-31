import React, { useState, useEffect } from 'react'
import './App.css';
import Character from "./components/Character";
import axios from "axios";
import styled from "styled-components";

// footer styled
const ContainerStyled = styled.div`
margin-bottom: 50px;
h1{
  margin-bottom: 25px;
}
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [Characters, SetCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        SetCharacters(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <ContainerStyled>
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        {
          Characters.map(eachCharacter => {
            return <Character name={eachCharacter.name} height={eachCharacter.height} films={eachCharacter.films} birthdate={eachCharacter.birth_year} hair={eachCharacter.hair_color} skin={eachCharacter.skin_color} home={eachCharacter.homeworld} eyes={eachCharacter.eye_color} />
          })
        }
      </div>
    </ContainerStyled>
  );
}

export default App;
