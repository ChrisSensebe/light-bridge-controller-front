import React, {useEffect, useState} from 'react';
import {AppItem} from "./app-item";
import {Item} from '../models/item.interface';
import {Icon} from '../models/icon';

export const AppItems = () => {

    const [lights, setLights] = useState<Item[]>([]);

    useEffect(() => {
        const lightsPromise = new Promise<Item[]>(resolve => {
          setTimeout(() => resolve([
            {name: 'light 1', icon: Icon.light},
            {name: 'light 2', icon: Icon.light},
            {name: 'light 3', icon: Icon.light}
          ]), 500);
        });
        lightsPromise.then(lights => setLights(lights));
    }, []);

    return <ul>{lights.map((item: Item) => <AppItem key={item.name} item={item}/>)}</ul>
};
