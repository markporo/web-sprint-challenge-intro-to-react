import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

export default function Stats(props) {
    const { name, close } = props
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

    return (<div><p><span>From:</span> {homeRef}</p>
        <p><span>Birthday:</span> {props.birthdate}</p>
        <p><span>Movies Featured in:</span> {props.films.map(eachFilm => { return `${eachFilm}, ` })}</p>
        <p><span>Height:</span> {props.height} cm</p>
        <p><span>Skin Type:</span> {props.skin}</p>
        <p><span>Hair Color:</span> {props.hair}</p>
        <p><span>Eye Color:</span> {props.eyes}</p>
        <button onClick={close}>Close</button>
    </div>)



}