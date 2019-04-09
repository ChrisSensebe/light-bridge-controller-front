import React, {useState, useEffect} from 'react';
import {AppLight} from "./AppLight";

export function AppLights() {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        new Promise(resolve => {
            resolve([{name: 'light 1'}, {name: 'light 2'}, {name: 'light 3'}])
        }).then(lights => setLights(lights))
    }, []);

    return <ul>{lights.map(light => <AppLight key={light.name} light={light}/>)}</ul>
}
