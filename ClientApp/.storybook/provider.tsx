import React from 'react';
import { AppProvider } from '../src/helpers/AppProvider';
import { BTLoginTypes } from '../src/types/apiResponse/apiResponse';
import { setPortalLoginType } from '../src/helpers/AppRouteChange';
import { BrowserRouter } from "react-router-dom";

interface IStoryOptions {
    id: string;
    kind: string;
    options: any;
    parameters: IStoryParameters;
    story: string;
}

interface IStoryParameters {
    fileName: string;
    options: any;
    jest?: string[];
    
    // custom bt parameters
    loginType?: BTLoginTypes;
}

/**
 * withBuildertrend is automatically added to every story in storybook, it includes our global css and configuration files
 * If you want to mock a page as a sub or owner you can do the following (stories will default to builder's view)
 * @example .add('Warranty Owner', () => (<h1>My component viewed as if an owner...</h1>), { loginType: BTLoginTypes.OWNER })
 */
export const withBuildertrend = (story: any, options: IStoryOptions) => {
    // set login type to stories preference (default to BUILDER)
    let loginTypeToSet = options.parameters.loginType;
    if (loginTypeToSet === undefined) { loginTypeToSet = BTLoginTypes.BUILDER; }
    setPortalLoginType(loginTypeToSet);
    
    return (
        <AppProvider>
            <BrowserRouter>
                {story()}
            </BrowserRouter>
        </AppProvider>
    );
};