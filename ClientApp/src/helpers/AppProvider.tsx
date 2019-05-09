import React from 'react';
import { LocaleProvider } from 'antd';
import antd_en_US from 'antd/lib/locale-provider/en_US';

// Buildertrend css & config
// import "../styles/antTheme/screen.less";
// import "../styles/antTheme/print.less";
import "../helpers/antdGlobalConfig";


// set datePicker date to AP standard
const btCustom__antd_en_US = {
    ...antd_en_US,
    DatePicker: {
        ...antd_en_US.DatePicker,
        dateFormat: "ll",
        dateTimeFormat: "ll HH:mm",
        weekFormat: "wo YYYY",
        monthFormat: "MM YYYY"
    },
    // todo: Pull request for time-picker lang (12hour and format), see: https://github.com/ant-design/ant-design/issues/14656
};

/** Shared between storybook and react
 * Place all styles/providers that need to be used in both storybook & react */
export class AppProvider extends React.Component {
    render() {
        return (
            <LocaleProvider locale={btCustom__antd_en_US}>
                <>
                    {this.props.children}
                </>
            </LocaleProvider>
        );
    }
}