import React from 'react';

import {storiesOf} from '@storybook/react';
import {AppItem} from "../components/app-item";
import {AppToggle} from "../components/app-toggle";
import {AppSlider} from "../components/app-slider";
import {Icon} from "../models/icon";

const testLight = {name: 'light 1', type: Icon.light};

storiesOf('AppItem', module)
  .add('item 1', () => <AppItem item={testLight}/>);

const handleClick = (event => console.log(`checked: ${event.target.checked}`));

storiesOf('AppToggle', module)
  .add('unchecked', () => <AppToggle handleClick={handleClick} checked={false}/>)
  .add('checked', () => <AppToggle handleClick={handleClick} checked={true}/>);

storiesOf('AppSlider', module)
  .add('value min', () => <AppSlider min={0} max={100} value={0}/>)
  .add('value max', () => <AppSlider min={0} max={100} value={100}/>)
  .add('value half', () => <AppSlider min={0} max={100} value={50}/>);
