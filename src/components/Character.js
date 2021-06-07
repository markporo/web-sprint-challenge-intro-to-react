// Write your Character component here
import axios from "axios";
import { createResponseComposition } from "msw";
import React, { useEffect, useState } from "react";
import Stats from './Stats';

export default function Character() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then(res => {
                setCharacters(res.data);
                console.log(res.data, "app js line 28");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (<div>{characters.map((char) => { return <Stats key={char.name + char.url} char={char} /> })}</div>);
}