import { MobileColors } from '../enum';

/**
 * This file stores common api requests/responses shared between multiple API endpoints
 */

/** stores the standard properties shared between entities */
export interface IBaseEntity {
    id: number;
    /** undefined when a lead */
    jobId?: number;
    builderId: number;
}

export class BaseResponse {
    constructor (apiResponse: any) {
        this.success = apiResponse.success;
        this.message = apiResponse.message;
        this.needsToRelogin = apiResponse.needsToRelogin;
        this.data = apiResponse.data;
        this.forcedUpgrade = apiResponse.forcedUpgrade;
    }

    success: boolean;
    message: string;
    needsToRelogin: boolean;
    data: any;
    forcedUpgrade: any;
}

/** @todo replace with actual hex values */
export function getHexValue(mobileColor: MobileColors) {
    switch (mobileColor) {
        case MobileColors.None:
            return "";
        case MobileColors.Red:
            return "red";
        case MobileColors.Green:
            return "green";
        case MobileColors.Black:
            return "black";
        case MobileColors.Yellow:
            return "yellow";
        case MobileColors.Gray:
            return "gray";
        case MobileColors.Orange:
            return "orange";
        default:
            throw `Not a supported color type ${mobileColor}`;
    }
}

export enum BTLoginTypes {
    ALL = 0,
    BUILDER = 1,
    OWNER = 2,
    SUBS = 3,
    LEAD = 4,
    BTADMIN = 5,
    FRIENDSANDFAMILY = 6
}

export class CultureInfo {
    constructor (data: any) {
        this.currencyIdentifier = data.currencyIdentifier;
        this.currencySeparator = data.currencySeparator;
        this.currencyThousandsSeparator = data.currencyThousandsSeparator;
    }

    currencyIdentifier: string;
    currencySeparator: string;
    currencyThousandsSeparator: string;

    /** @todo put time stuff in this call too! */
    timestuff: any;
}

export interface IDropDownItem {
    id: number;
    name: string;
}

export interface IValidator {
    errorMessage: string;
    value: number;
    type: "required" | "maxLength";
}

declare type SelectMapCallback = (selectObject: BTSelectItem) => void;
/** The expected format for ant design TreeSelect */
export class BTSelectItem {
    /**
     * @param data
     * @param customMapper This optional callback function will be called when creating each select - use to set custom values
     * @example new BTSelectItem({ name: "DropDown Name", id: 123 })
     * @example new BTSelectItem({ name: "DropDown Name", id: 123, value: { look: "its an object", very: "cool" } })
     */
    constructor (data: any, customMapper?: SelectMapCallback) {
        // todo make data an interface or type

        this.title = data.title || data.name;
        this.value = data.value || data.id;
        this.key = data.id;
        this.disabled = false;

        if (data.options || data.children) {
            const childrenKey = data.options ? data.options : data.children;
            this.children = childrenKey.map((c: any) => new BTSelectItem(c, customMapper));
        }

        if (data.selected === undefined) {
            this.selected = false;
        }
        else {
            this.selected = data.selected;
        }

        this.extraData = data.extraData;

        // call custom mapper
        if (customMapper) {
            customMapper(this);
        }
    }

    title: string;
    value: string;
    key: string;
    children?: BTSelectItem[];
    disabled: boolean;

    selected: boolean;
    extraData: any;
}