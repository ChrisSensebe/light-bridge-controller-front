import React, {useEffect, useState} from 'react';
import {AppItem, Item} from "./app-item";

export const AppLights = () => {

    const [lights, setLights] = useState<Item[]>([]);

    useEffect(() => {
        const lightsPromise = new Promise<Item[]>(resolve => {
            setTimeout(() => resolve([{name: 'light 1'}, {name: 'light 2'}, {name: 'light 3'}]), 500);
        });
        lightsPromise.then(lights => setLights(lights));
    }, []);

    return <ul>{lights.map((light: {name: string}) => <AppItem key={light.name} item={light}/>)}</ul>
};
