import {Icon} from '../models/icon';
import {ReactComponent as LightLogo} from '../../public/icons/bulbsSultan.svg';
import {ReactComponent as LivingRoomLogo} from '../../public/icons/bulbsSultan.svg';

export interface AppiconProps {
  icon: Icon
}

export const AppIcon = (props: AppiconProps) => {
  let icon;
  switch (props.icon) {
    case Icon.light:
      icon = LightLogo;
      break;
    case Icon.roomsLiving:
      icon = LivingRoomLogo
  }

  return icon
};
