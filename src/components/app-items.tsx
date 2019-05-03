import React, {useEffect, useState} from 'react';
import {AppItem} from "./app-item";
import {Item} from '../models/item.interface';
import {ItemType} from '../models/item.type';

export const AppItems = () => {

    const [lights, setLights] = useState<Item[]>([]);

    useEffect(() => {
        const lightsPromise = new Promise<Item[]>(resolve => {
          setTimeout(() => resolve([
            {name: 'light 1', type: ItemType.light},
            {name: 'light 2', type: ItemType.light},
            {name: 'light 3', type: ItemType.light}
          ]), 500);
        });
        lightsPromise.then(lights => setLights(lights));
    }, []);

    return <ul>{lights.map((item: Item) => <AppItem key={item.name} item={item}/>)}</ul>
};
