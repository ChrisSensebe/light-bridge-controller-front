import React from 'react';
import styled from 'styled-components';

interface AppSliderProps {
  min: number;
  max: number;
  value: number;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  margin: 0;
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;   
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  :hover {
    opacity: 1;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #4CAF50;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
`;

export const AppSlider = (props: AppSliderProps) => {
  return <Input type="range" min={props.min} max={props.max} value={props.value} onChange={props.onChangeHandler}/>;
};
