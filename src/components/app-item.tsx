import React, {useState} from 'react';
import {AppToggle} from './app-toggle';
import {AppSlider} from './app-slider';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../public/icons/bulbsSultan.svg';
import {Item} from '../models/item.interface';

export interface AppItemProps {
  item: Item;
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

export const AppItem = (props: AppItemProps) => {

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
          <LightName>{props.item.name}</LightName>
        </DivLightInfo>
        <AppToggle handleClick={handleToggle} checked={checked}/>
      </FlexContainer>
      <AppSlider min={0} max={100} value={value} onChangeHandler={handleSlider} />
    </Li>
  )
};
