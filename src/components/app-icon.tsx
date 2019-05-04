import React from 'react';
import {Icon} from '../models/icon';

export interface AppiconProps {
  icon: Icon
}

export const AppIcon = (props: AppiconProps) => {
  const iconPath = process.env.PUBLIC_URL + props.icon;
  return <img src={iconPath} alt={props.icon} />
};
