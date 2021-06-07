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

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <ContainerStyled>
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <Character />
      </div>
    </ContainerStyled>
  );
}

export default App;
