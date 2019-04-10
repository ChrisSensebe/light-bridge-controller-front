import React from 'react';

interface AppToggleProps {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const AppToggle = (props: AppToggleProps) => {
  return <label className={'switch'} onClick={props.handleClick}>
      <input type="checkbox"/>
      <span className={'slider'} />
  </label>
};
