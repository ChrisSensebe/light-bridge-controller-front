import React from 'react';

import {storiesOf} from '@storybook/react';
import {AppLight} from "../components/app-light";
import {AppToggle} from "../components/app-toggle";

const testLight = {name: 'light 1'};

storiesOf('AppLight', module)
  .add('light 1', () => <AppLight light={testLight}/>);

const handleClick = (event => console.log(`checked: ${event.target.checked}`));

storiesOf('AppToggle', module)
  .add('unchecked', () => <AppToggle handleClick={handleClick} checked={false}/>)
  .add('checked', () => <AppToggle handleClick={handleClick} checked={true}/>);
