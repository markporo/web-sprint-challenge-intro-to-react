// Write your Character component here
import axios from "axios";
import { createResponseComposition } from "msw";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

//styled Div
const StyledDivContainer = styled.div`

background-color: whiteSmoke;
width: 70%;
margin: 0 auto;
padding: 15px;
border: 2px solid black;

section {
    text-align: left;
    margin-left: 40px;
    ${'' /* display: none; */}
}

span {
    font-weight: bold;
}

header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 40px;
}

button {
    height: 40px;
    background-color: lightblue;
     &:hover{
     transform: scale(1.05);
     background-color: black;
     color: lightblue;
     }
}

h2 {
    font-size: 2rem;
}
`




export default function Character({ ...props }) {

    const [homeRef, setHomeRef] = useState();

    useEffect(() => {
        axios.get(props.home)
            .then(res => {
                console.log(res.data.name)
                setHomeRef(res.data.name);
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (<StyledDivContainer>
        <header><h2>{props.name}</h2><button> Character Stats</button></header>
        <section>
            <p><span>From:</span> {homeRef}</p>
            <p><span>Birthday:</span> {props.birthdate}</p>
            <p><span>Movies Featured in:</span> {props.films.map(eachFilm => { return `${eachFilm}, ` })}</p>
            <p><span>Height:</span> {props.height} cm</p>
            <p><span>Skin Type:</span> {props.skin}</p>
            <p><span>Hair Color:</span> {props.hair}</p>
            <p><span>Eye Color:</span> {props.eyes}</p>
        </section>

    </StyledDivContainer>)
}