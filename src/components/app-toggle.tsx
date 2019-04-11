import React from 'react';

interface AppToggleProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const AppToggle = (props: AppToggleProps) => {

  // const [checked, toggleCheck] = useState(false);

  return <label className={'switch'} onClick={props.handleClick}>
    <input type="checkbox" className={'input'}/>
    <span className={'slider'} />
  </label>
};
