import React, {useState, useEffect} from 'react';
import {appLight} from "./appLight";

export function appLights() {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        new Promise(resolve => {
            resolve([{name: 'light 1'}, {name: 'light 2'}, {name: 'light 3'}])
        }).then(lights => setLights(lights))
    }, []);

    return <ul>{lights.map(light => <appLight key={light.name} light={light}/>)}</ul>
}
