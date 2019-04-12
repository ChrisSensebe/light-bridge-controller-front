import React from 'react';
import styled from 'styled-components'

interface AppToggleProps {
  checked: boolean;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;`;
const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked {
    background-color: #4CAF50;
  }
  :focus {
    box-shadow: 0 0 1px #4CAF50;
  }
  &:checked + .slider {
    background-color: #4CAF50;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #4CAF50;
  }
  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }`;
const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  ::before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }`;

export const AppToggle = (props: AppToggleProps) => {
  return (
    <Switch>
      <Checkbox type="checkbox" checked={props.checked} onChange={props.handleClick} />
      <Slider className="slider" />
    </Switch>
  );
};
