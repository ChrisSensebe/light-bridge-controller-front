import React, {useState} from 'react';
import {AppToggle} from './app-toggle';

export interface Light {
  name: string;
}

export interface AppLightProps {
  light: Light;
}

export const AppLight = (props: AppLightProps) => {

  const [checked, toggleCheck] = useState(false);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleCheck(event.target.checked);
    console.log('checked ', checked);
  };

  return (
    <li>
      {props.light.name}
      <AppToggle handleClick={handleClick} checked={checked}/>
    </li>
  )
};
