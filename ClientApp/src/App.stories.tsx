import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';
// import { ErrorPage } from './layouts/ErrorPage';
// import { ErrorLoading } from './commonComponents/error/ErrorLoading';

const ToDo = (<h1>ToDo</h1>);
// const ThrowException = function () {
//   throw "Error!";
// };

storiesOf('App|Web', module)
    .add(
        'Entire App', () => <App />,
        { jest: ['App'] }
    )
    .add('Maintenance Page', () => ToDo);
//   .add('404 Page', () => <ErrorPage />)
//   .add('ErrorLoading', () => {
//     return (
//       <ErrorLoading entityName="entityName">
//         <ThrowException />
//       </ErrorLoading>
//     );
//   });