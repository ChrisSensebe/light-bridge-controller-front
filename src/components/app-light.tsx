import React from 'react';

export interface Light {
    name: string;
}

export interface AppLightProps {
    light: Light;
}

export const AppLight = (props: AppLightProps) => <li>{props.light.name}</li>;
