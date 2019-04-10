import React, {useEffect, useState} from 'react';
import {AppLight, Light} from "./AppLight";

export const AppLights = () => {

    const [lights, setLights] = useState<Light[]>([]);

    useEffect(() => {
        const lightsPromise = new Promise<Light[]>(resolve => {
            setTimeout(() => resolve([{name: 'light 1'}, {name: 'light 2'}, {name: 'light 3'}]), 500);
        });
        lightsPromise.then(lights => setLights(lights));
    }, []);

    return <ul>{lights.map((light: {name: string}) => <AppLight key={light.name} light={light}/>)}</ul>
};
