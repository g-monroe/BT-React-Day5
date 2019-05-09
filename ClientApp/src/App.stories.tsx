import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';

const ToDo = (<h1>ToDo</h1>);

storiesOf('App|Web', module)
    .add(
        'Entire App', () => <App />,
        { jest: ['App'] }
    )
    .add('ToDo Page', () => ToDo);
