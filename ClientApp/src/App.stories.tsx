import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';
import SuperHero from './entity/SuperHero/Superhero';

const ToDo = (<h1>ToDo</h1>);

storiesOf('App|Web', module)
    .add(
        'Entire App', () => <App />,
        { jest: ['App'] }
    )
    .add('ToDo Page', () => ToDo)
    .add('Superhero', () => <SuperHero />,
    {jest: ['App']});
