import React from 'react';

interface AppSliderProps {
  min: number;
  max: number;
  value: number;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AppSlider = (props: AppSliderProps) => {
  return (
    <div>
      <input type="range" min={props.min} max={props.max} value={props.value} onChange={props.onChangeHandler}/>
    </div>
  );
};
