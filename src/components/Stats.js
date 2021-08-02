import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Stats({ eachChar }) {
    const [home, setHome] = useState([]);
    const [statsClicked, setClicked] = useState(false);

    const StyledStatsDiv = styled.div`
    color: ${props => props.theme.bgColor};
    background-color: #E1D89F;
    width: 50%;
    padding: 3% 2%;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 10px;
    ${'' /* text-align: center; */}
    border-radius: 20px;
    border: 2px solid black;
    `
    const StyledButton = styled.button`
    margin-bottom: 30px;
`

    useEffect(() => {
        axios
            .get(`${eachChar.homeworld}`)
            .then(res => {
                console.log(res.data)
                setHome(res.data.name);
            })
    })


    return (<div>
        <StyledButton onClick={() => setClicked((prevValue) => !prevValue)}><span style={{ display: statsClicked ? "none" : "block" }}>Open Stats</span><span style={{ display: statsClicked ? "block" : "none" }}>Close Stats</span></StyledButton>
        <StyledStatsDiv style={{ display: statsClicked ? "block" : "none" }}>
            <p>HEIGHT: {eachChar.height}</p>
            <p>MASS: {eachChar.mass}</p>
            <p>HAIR COLOR: {eachChar.hair_color}</p>
            <p>SKIN COLOR: {eachChar.skin_color}</p>
            <p>EYE COLOR:  {eachChar.eye_color}</p>
            <p>BIRTH YEAR:  {eachChar.birth_year}</p>
            <p>GENDER:  {eachChar.gender}</p>
            <p>HOME PLANET: {home}</p>
        </StyledStatsDiv>
    </div>
    )
}