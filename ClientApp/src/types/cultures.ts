import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
import ja from 'react-intl/locale-data/ja';
// todo add the rest of our cultures - these should also dynamically load

export const localeData = [en, fr, es, ja];
export const addAppLocaleData = () => localeData.forEach(locale => addLocaleData(locale));

// Old culture info, saving this until we know what we're going to do
/*
export interface ICulture {
    code: string;

    // Used for dropdowns within the UI
    label: string;

    // ISO 4217 currency code - https://www.currency-iso.org/en/home/tables/table-a1.html
    currencyCode: string;
    delimiters: IDelimiters;
    symbol: string;
    symbolSuffix: boolean;
}

interface IDelimiters {
    thousands: string;
    decimal: string;
}

export const oldSupportedCultures: ICulture[] =
    [
        {
            code: "en-US",
            label: "United States",
            currencyCode: "USD",
            symbol: "$",
            symbolSuffix: false,
            delimiters: {
                thousands: ",",
                decimal: "."
            }
        },
        {
            code: "en-GB",
            label: "Great Britain",
            currencyCode: "GBP",
            symbol: "£",
            symbolSuffix: true,
            delimiters: {
                thousands: ",",
                decimal: "."
            }
        },
        {
            code: "fr",
            label: "France",
            currencyCode: "EUR",
            symbol: "€",
            symbolSuffix: true,
            delimiters: {
                thousands: " ",
                decimal: ","
            }
        },
        {
            code: "es",
            label: "Spain",
            currencyCode: "EUR",
            symbol: "€",
            symbolSuffix: true,
            delimiters: {
                thousands: ".",
                decimal: ","
            }
        }
    ];

*/



// LinqPad script to re-gen cultures
// todo map this to actual currency codes like - https://www.xe.com/symbols.php
/*
DependencyRegistration.Load();

let test = new Dictionary<string, object>();
foreach(let c in CultureCodes.Items())
{
    let info = DependencyResolver.Builders.SelectCulture(c.Key).NumberFormat;
	let actualCountryCode = Regex.Replace(c.Key, @"en-(\D+)", m => m.Groups[1].Value);
    test.Add(c.Key, new {
        numberDecimalSeperator = info.NumberDecimalSeparator,
        numberGroupSeperator = info.NumberGroupSeparator,
        currencySymbol = info.CurrencySymbol,
		symbolSuffix = false,
		actualSymbol = actualCountryCode,
		currencyCode = // this must be manually mapped
		label = System.Globalization.CultureInfo.GetCultureInfo(c.Key).DisplayName
    });
}

JsonUtility.Serialize(test).Dump();
*/

interface ICultureList {
    [key: string]: ICultureDetails;
}

export interface ICultureDetails {
    numberDecimalSeperator: string;
    numberGroupSeperator: string;
    currencySymbol: string;

    /** unused - likely going to replace the actual symbol */
    actualSymbol: string;

    /** should the symbol appear on the right side of the input/text when displayed? */
    symbolSuffix: boolean;

    /** ISO 4217 currency code - https://www.currency-iso.org/en/home/tables/table-a1.html and https://documentation.progress.com/output/rb/doc/index.html#page/rb/currency-formats.html */
    currencyCode: string;

    /** Used for dropdowns within the UI */
    label: string;
}

export const supportedCultures: ICultureList = {
    "en-US": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "US",
        "currencyCode": "USD",
        "label": "English (United States)"
    },
    "en-AR": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "AR",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-AR)"
    },
    "en-AM": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "֏",
        "symbolSuffix": false,
        "actualSymbol": "AM",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-AM)"
    },
    "en-AU": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "AU",
        "currencyCode": "AUD",
        "label": "English (Australia)"
    },
    "en-BS": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "BS",
        "currencyCode": "BSD",
        "label": "English (Bahamas)"
    },
    "en-BD": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "৳",
        "symbolSuffix": false,
        "actualSymbol": "BD",
        "currencyCode": "BDT",
        "label": "Bangladesh (en-BD)"
    },
    "en-BR": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "R$",
        "symbolSuffix": false,
        "actualSymbol": "BR",
        "currencyCode": "BRL",
        "label": "Brazil (en-BR)"
    },
    "en-CA": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "CA",
        "currencyCode": "CAD",
        "label": "English (Canada)"
    },
    "en-CB": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "AWG ",
        "symbolSuffix": false,
        "actualSymbol": "CB",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-CB)"
    },
    "en-136": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "en-136",
        "currencyCode": "KYD",
        "label": "Catman Islands (en-136)"
    },
    "en-029": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "EC$",
        "symbolSuffix": false,
        "actualSymbol": "en-029",
        "currencyCode": "XCD",
        "label": "English (Caribbean)"
    },
    "en-CL": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "CL",
        "currencyCode": "CLP",
        "label": "Chile (en-CL)"
    },
    "en-CO": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "CO",
        "currencyCode": "COP",
        "label": "Colombia (en-CO)"
    },
    "en-CY": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "CY",
        "currencyCode": "EUR",
        "label": "English (Cyprus)"
    },
    "da-DK": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "kr.",
        "symbolSuffix": false,
        "actualSymbol": "da-DK",
        "currencyCode": "DKK",
        "label": "Danish (Denmark)"
    },
    "en-DO": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "DO",
        "currencyCode": "DOP",
        "label": "Dominican Republic (en-DO)"
    },
    "en-EG": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "EGP ",
        "symbolSuffix": false,
        "actualSymbol": "EG",
        "currencyCode": "EGP",
        "label": "Egypt (en-EG)"
    },
    "en-EE": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "EE",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-EE)"
    },
    "en-FI": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "FI",
        "currencyCode": "aaa",
        "label": "English (Finland)"
    },
    "en-DE": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "DE",
        "currencyCode": "aaa",
        "label": "English (Germany)"
    },
    "en-GH": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "₵",
        "symbolSuffix": false,
        "actualSymbol": "GH",
        "currencyCode": "GHS",
        "label": "English (Ghana)"
    },
    "en-GB": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "£",
        "symbolSuffix": false,
        "actualSymbol": "GB",
        "currencyCode": "GBP",
        "label": "English (United Kingdom)"
    },
    "en-GU": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "GU",
        "currencyCode": "USD",
        "label": "English (Guam)"
    },
    "en-GN": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "GNF ",
        "symbolSuffix": false,
        "actualSymbol": "GN",
        "currencyCode": "aaa",
        "label": "Guinea (en-GN)"
    },
    "en-IN": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "₹",
        "symbolSuffix": false,
        "actualSymbol": "IN",
        "currencyCode": "INR",
        "label": "English (India)"
    },
    "en-ID": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "kRp",
        "symbolSuffix": false,
        "actualSymbol": "ID",
        "currencyCode": "IDR",
        "label": "English (Indonesia)"
    },
    "en-ID-DKI": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "IDR ",
        "symbolSuffix": false,
        "actualSymbol": "ID-DKI",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-ID-dki)"
    },
    "en-IE": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "IE",
        "currencyCode": "aaa",
        "label": "English (Ireland)"
    },
    "en-IT": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "IT",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-IT)"
    },
    "en-IL": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "₪",
        "symbolSuffix": false,
        "actualSymbol": "IL",
        "currencyCode": "ILS",
        "label": "English (Israel)"
    },
    "en-LB": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "LBP ",
        "symbolSuffix": false,
        "actualSymbol": "LB",
        "currencyCode": "LBP",
        "label": "Lebanon (en-LB)"
    },
    "en-LU": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "LU",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-LU)"
    },
    "en-KE": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "Ksh",
        "symbolSuffix": false,
        "actualSymbol": "KE",
        "currencyCode": "KES",
        "label": "English (Kenya)"
    },
    "en-KW": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "KWD ",
        "symbolSuffix": false,
        "actualSymbol": "KW",
        "currencyCode": "KWD",
        "label": "Kuwait (en-KW)"
    },
    "en-MY": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "RM",
        "symbolSuffix": false,
        "actualSymbol": "MY",
        "currencyCode": "MYR",
        "label": "English (Malaysia)"
    },
    "en-MV": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "MRf",
        "symbolSuffix": false,
        "actualSymbol": "MV",
        "currencyCode": "MVR",
        "label": "Maldives (en-MV)"
    },
    "en-MU": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "Rs ",
        "symbolSuffix": false,
        "actualSymbol": "MU",
        "currencyCode": "MUR",
        "label": "English (Mauritius)"
    },
    "en-MX": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "MX",
        "currencyCode": "MXN",
        "label": "Mexico (en-MX)"
    },
    "en-NZ": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "NZ",
        "currencyCode": "NZD",
        "label": "English (New Zealand)"
    },
    "en-NI": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "C$",
        "symbolSuffix": false,
        "actualSymbol": "NI",
        "currencyCode": "NIO",
        "label": "Nicaragua (en-NI)"
    },
    "en-NG": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "₦",
        "symbolSuffix": false,
        "actualSymbol": "NG",
        "currencyCode": "NGN",
        "label": "English (Nigeria)"
    },
    "en-NO": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "kr",
        "symbolSuffix": false,
        "actualSymbol": "NO",
        "currencyCode": "NOK",
        "label": "Norway (en-NO)"
    },
    "en-OM": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "OMR",
        "symbolSuffix": false,
        "actualSymbol": "OM",
        "currencyCode": "OMR",
        "label": "Oman (en-OM)"
    },
    "en-PG": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "K",
        "symbolSuffix": false,
        "actualSymbol": "PG",
        "currencyCode": "PGK",
        "label": "English (Papua New Guinea)"
    },
    "en-PH": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "₱",
        "symbolSuffix": false,
        "actualSymbol": "PH",
        "currencyCode": "PHP",
        "label": "English (Republic of the Philippines)"
    },
    "en-PT": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "PT",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-PT)"
    },
    "en-QA": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "ر.ق.‏",
        "symbolSuffix": true,
        "actualSymbol": "QA",
        "currencyCode": "QAR",
        "label": "Qatar (en-QA)"
    },
    "en-RU": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "₽",
        "symbolSuffix": false,
        "actualSymbol": "RU",
        "currencyCode": "RUB",
        "label": "Russia (en-RU)"
    },
    "en-SA": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "ر.س.‏",
        "symbolSuffix": true,
        "actualSymbol": "SA",
        "currencyCode": "SAR",
        "label": "Saudi Arabia (en-SA)"
    },
    "en-SG": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "SG",
        "currencyCode": "SGD",
        "label": "English (Singapore)"
    },
    "en-ZA": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": " ",
        "currencySymbol": "R",
        "symbolSuffix": false,
        "actualSymbol": "ZA",
        "currencyCode": "ZAR",
        "label": "English (South Africa)"
    },
    "en-ES": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "ES",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-ES)"
    },
    "en-LK": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "LKR ",
        "symbolSuffix": false,
        "actualSymbol": "LK",
        "currencyCode": "LKR",
        "label": "Sri Lanka (en-LK)"
    },
    "en-SE": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "kr",
        "symbolSuffix": false,
        "actualSymbol": "SE",
        "currencyCode": "SEK",
        "label": "English (Sweden)"
    },
    "en-CH": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": "'",
        "currencySymbol": "CHF",
        "symbolSuffix": false,
        "actualSymbol": "CH",
        "currencyCode": "CHF",
        "label": "English (Switzerland)"
    },
    "en-TH": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "฿",
        "symbolSuffix": false,
        "actualSymbol": "TH",
        "currencyCode": "THB",
        "label": "Thailand (en-TH)"
    },
    "en-TT": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "TT",
        "currencyCode": "TTD",
        "label": "English (Trinidad and Tobago)"
    },
    "en-TC": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "TC",
        "currencyCode": "aaa",
        "label": "English (Turks and Caicos Islands)"
    },
    "en-AE": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "د.إ.‏",
        "symbolSuffix": true,
        "actualSymbol": "AE",
        "currencyCode": "AED",
        "label": "United Arab Emirates (en-AE)"
    },
    "en-VN": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "1000 ₫",
        "symbolSuffix": false,
        "actualSymbol": "VN",
        "currencyCode": "VND",
        "label": "Viet Nam (en-VN)"
    },
    "en-VE": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "Bs.",
        "symbolSuffix": false,
        "actualSymbol": "VE",
        "currencyCode": "VES",
        "label": "Venezuela (en-VE)"
    },
    "ar-EG": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "ج.م.‏",
        "symbolSuffix": false,
        "actualSymbol": "ar-EG",
        "currencyCode": "aaa",
        "label": "Arabic (Egypt)"
    },
    "zh-HK": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "元",
        "symbolSuffix": false,
        "actualSymbol": "zh-HK",
        "currencyCode": "aaa",
        "label": "Chinese (Traditional, Hong Kong S.A.R.)"
    },
    "nl-BE": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "nl-BE",
        "currencyCode": "aaa",
        "label": "Dutch (Belgium)"
    },
    "fr-BE": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "fr-BE",
        "currencyCode": "aaa",
        "label": "French (Belgium)"
    },
    "fr-CA": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "fr-CA",
        "currencyCode": "aaa",
        "label": "French (Canada)"
    },
    "fr-FR": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "EUR",
        "symbolSuffix": false,
        "actualSymbol": "fr-FR",
        "currencyCode": "aaa",
        "label": "French (France)"
    },
    "hu-HU": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": " ",
        "currencySymbol": "Ft",
        "symbolSuffix": false,
        "actualSymbol": "hu-HU",
        "currencyCode": "aaa",
        "label": "Hungarian (Hungary)"
    },
    "lv-LV": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "lv-LV",
        "currencyCode": "aaa",
        "label": "Latvian (Latvia)"
    },
    "lv-EURO": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "lv-EURO",
        "currencyCode": "aaa",
        "label": "Unknown Language (lv-Euro)"
    },
    "pt-BR": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "R$",
        "symbolSuffix": false,
        "actualSymbol": "pt-BR",
        "currencyCode": "aaa",
        "label": "Portuguese (Brazil)"
    },
    "es-CO": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "es-CO",
        "currencyCode": "aaa",
        "label": "Spanish (Colombia)"
    },
    "es-HN": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "HNL ",
        "symbolSuffix": false,
        "actualSymbol": "es-HN",
        "currencyCode": "aaa",
        "label": "Spanish (Honduras)"
    },
    "es-PR": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "$",
        "symbolSuffix": false,
        "actualSymbol": "es-PR",
        "currencyCode": "aaa",
        "label": "Spanish (Puerto Rico)"
    },
    "es-ES": {
        "numberDecimalSeperator": ",",
        "numberGroupSeperator": ".",
        "currencySymbol": "€",
        "symbolSuffix": false,
        "actualSymbol": "es-ES",
        "currencyCode": "aaa",
        "label": "Spanish (Spain)"
    },
    "cgg-UG": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "UGX ",
        "symbolSuffix": false,
        "actualSymbol": "cgg-UG",
        "currencyCode": "aaa",
        "label": "Chiga (Uganda)"
    },
    "pl-PL": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "zł ",
        "symbolSuffix": false,
        "actualSymbol": "pl-PL",
        "currencyCode": "aaa",
        "label": "Polish (Poland)"
    },
    "en-WA": {
        "numberDecimalSeperator": ".",
        "numberGroupSeperator": ",",
        "currencySymbol": "CFA ",
        "symbolSuffix": false,
        "actualSymbol": "WA",
        "currencyCode": "aaa",
        "label": "Unknown Locale (en-WA)"
    }
};


export function supportedCulturesList(): ICultureDetails[] {
    return Object.values(supportedCultures);
}


// Format is as follows
/*
    "US": { This is a ISO 639-1 code, https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
        This string is the value BT stores in the database (100% custom)
        "iso": "en-us", http://www.localeplanet.com/
    }
*/