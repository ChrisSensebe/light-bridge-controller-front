import React from 'react';
import {AppToggle} from './app-toggle';

export interface Light {
    name: string;
}

export interface AppLightProps {
    light: Light;
}

export const AppLight = (props: AppLightProps) => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        console.log('clicked');
    };

    return (
        <li>
            {props.light.name}
            <AppToggle handleClick={handleClick} />
        </li>
    )
};
