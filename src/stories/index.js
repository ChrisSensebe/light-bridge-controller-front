import React from 'react';

import {storiesOf} from '@storybook/react';
import {AppLight} from "../components/app-light";
import {AppToggle} from "../components/app-toggle";

const testLight = {name: 'light 1'};

storiesOf('AppLight', module)
    .add('light 1', () => <AppLight light={testLight}/>);

const handleClick = (event => {
    event.preventDefault();
    console.log('clicked');
});

storiesOf('AppToggle', module)
    .add('on', () => <AppToggle handleClick={handleClick}/>);
