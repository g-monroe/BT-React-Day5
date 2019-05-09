import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { BTLoginTypes } from '../types/apiResponse/apiResponse';

/** Sets the login portal type on the window */
export function setPortalLoginType(portalType: BTLoginTypes) {
    let btJScriptGlobals = (window as any).btJScriptGlobals;

    // setup default jscriptGlobals. This is used when not proxying in our master pages (storybook, node server)
    if (btJScriptGlobals === undefined) {
        btJScriptGlobals = {
            loginTypeInt: 1,
            loginType: "BUILDER",
        };
    }

    switch (portalType) {
        case BTLoginTypes.OWNER:
            btJScriptGlobals.loginTypeInt = portalType;
            btJScriptGlobals.loginType = "OWNER";
            break;

        case BTLoginTypes.SUBS:
            btJScriptGlobals.loginTypeInt = portalType;
            btJScriptGlobals.loginType = "SUBS";
            break;

        case BTLoginTypes.BUILDER:
            btJScriptGlobals.loginTypeInt = portalType;
            btJScriptGlobals.loginType = "BUILDER";
            break;
    }
}

/** This component will run whenever the apps route changes */
class AppRouteChangeInternal extends React.Component<RouteComponentProps> {
    componentDidMount() {
        this.routeChanged()
    }

    componentDidUpdate(prevProps: RouteComponentProps) {
        let { location: { pathname } } = this.props;
        if (prevProps.location.pathname === pathname) {
            return;
        }

        this.routeChanged();
    }

    routeChanged() {
        this.setPortalLoginType(this.props);
    }

    /** Updates the login type on the window to reflect the users current portal type
     * Currently used to update the btJScriptGlobals object, this can get out of sync when a builder is emulating an owner
    */
    setPortalLoginType(reactRouterProps: RouteComponentProps): void {
        const urlPath = reactRouterProps.location.pathname.toLowerCase();
        let usersPortalType = BTLoginTypes.BUILDER;

        if (urlPath.startsWith("/owner/")) {
            usersPortalType = BTLoginTypes.OWNER;
        }
        else if (urlPath.startsWith("/subs/")) {
            usersPortalType = BTLoginTypes.SUBS;
        }

        setPortalLoginType(usersPortalType);
    }

    render() {
        return null;
    }
}
export const AppRouteChange = withRouter(AppRouteChangeInternal);
