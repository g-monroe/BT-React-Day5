import { addDecorator, configure } from '@storybook/react';

// cultures
import { addAppLocaleData, supportedCultures } from './../src/types/cultures';

// storybook addons
import { create } from '@storybook/theming';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { withConsole } from '@storybook/addon-console';
import { addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withBuildertrend } from './provider';

// tests
import { withTests } from '@storybook/addon-jest';
const testResults = require('../.jest-test-results.json');

// Customize storybook theme
addParameters({
    options: {
        panelPosition: 'right',
        hierarchyRootSeparator: '|',
        hierarchySeparator: /\/|\./,
        enableShortcuts: false,
        theme: create({
            base: 'light',
            brandTitle: 'Buildertrend styleguide',
            brandUrl: '#',
            brandImage: 'https://buildertrend.net/images/FontIcons/buildertrend-logo-full.svg',
        })
    }
});

// local addon settings
addAppLocaleData();
setIntlConfig({
    locales: Object.keys(supportedCultures),
    defaultLocale: 'en-US',
    getMessages: (locale) => { return {}; }
});
addDecorator(withIntl);

// antd locale settings, global bt styles, global bt store, etc
addDecorator(withBuildertrend);

// show info/log/warning/error logs in storybook action logger
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// add knobs
addDecorator(withKnobs);

// jest storybook test addon
addDecorator(
    withTests({
        results: testResults,
        filesExt: ".test.tsx", // auto concat .test.tsx to jest paths
    })
);


// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);