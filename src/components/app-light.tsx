import React, {useState} from 'react';
import {AppToggle} from './app-toggle';
import {AppSlider} from './app-slider';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../public/icons/bulbsSultan.svg';

export interface Light {
  name: string;
}

export interface AppLightProps {
  light: Light;
}

const Li = styled.li`
  list-style: none;
  color: aliceblue;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #444;
`;
const DivLightInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  font-size: 1.5rem;
`;
const LightName = styled.div`
  margin-left: 20px;
`;

export const AppLight = (props: AppLightProps) => {

  const [checked, toggleCheck] = useState(false);
  const [value, changeValue] = useState(0);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleCheck(event.target.checked);
    console.log('checked ', checked);
  };

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(Number.parseInt(event.target.value, 10));
    console.log(value);
  };

  return (
    <Li>
      <FlexContainer>
        <DivLightInfo>
          <Logo/>
          <LightName>{props.light.name}</LightName>
        </DivLightInfo>
        <AppToggle handleClick={handleToggle} checked={checked}/>
      </FlexContainer>
      <AppSlider min={0} max={100} value={value} onChangeHandler={handleSlider} />
    </Li>
  )
};
