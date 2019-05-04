import {Icon} from '../models/icon';

export interface AppiconProps {
  icon: Icon
}

export const AppIcon = (props: AppiconProps) => {
  return <svg><use href={props.icon}></use></svg>
};
