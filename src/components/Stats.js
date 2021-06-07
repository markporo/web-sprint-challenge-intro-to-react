import axios from "axios";
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



export default function Stats(props) {
    const { name, homeworld, height, hair, skin, eyes, films, birthdate } = props.char;
    const [homeRef, setHomeRef] = useState();
    const [statsSeen, setStatsSeen] = useState(false);

    const showStats = () => {
        setStatsSeen(function (prevValue) {
            return !prevValue;
        })
    };

    useEffect(() => {
        axios.get(homeworld)
            .then(res => {
                console.log(res.data.name)
                setHomeRef(res.data.name);
            })
            .catch(err => {
                console.log(err)
            })
    })



    return (<StyledDivContainer>
        <header><h2>{name}</h2><button onClick={showStats}> Toggle Stats</button></header>
        <section style={{ display: statsSeen ? "block" : "none" }}>
            <p><span>From:</span> {homeRef}</p>
            <p><span>Birthday:</span> {birthdate}</p>
            <p><span>Movies Featured in:</span> {films.map(eachFilm => { return `${eachFilm}, ` })}</p>
            <p><span>Height:</span> {height} cm</p>
            <p><span>Skin Type:</span> {skin}</p>
            <p><span>Hair Color:</span> {hair}</p>
            <p><span>Eye Color:</span> {eyes}</p>
        </section>

    </StyledDivContainer>)
}