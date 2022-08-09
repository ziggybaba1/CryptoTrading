const SUN_BLUE = '#2972FE';
const LIGHT_BLUE='#D3DFF8';
const SOFT_BLUE='#282C49';
const BACK_BLUE='#28335B';
const LINE_BLUE="#000000b3";
const ASBESTOS = '#141414';
const MIDNIGHT_BLUE = '#000';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const LIGHTER="#fff";
const JUICE='#E9B3D3';

const DARK='#191B1F';
const LIGHT_DARK='rgb(33, 36, 41)';
const LIGHT_DARKER='rgb(44, 47, 54)';
const TEXT_DARK='#FFF';
const TEXT_DARK_LIGHT='#696b6e';
const ICON_DARK_LIGHT='rgb(143, 150, 172,0.5)';
const OUTLINE_DARK='rgb(255,255,255,0.4)';
const DARK_PRIMARY='rgb(80, 144, 234)';
const DARK_BUTTON_ACTIVE_BACKGROUND='rgb(80, 141, 234,0.3)';
const DARK_BUTTON_BACKGROUND='rgba(21, 61, 111, 0.44)'
const DARK_BACKGROUND = {
    MAIN:`radial-gradient(150% 100% at 50% 0%, rgb(10, 41, 75) 0%, rgb(34, 30, 48) 50%, rgb(31, 33, 40) 100%)`,
    POLY: `radial-gradient(150.6% 98.22% at 48.06% 0%, rgba(130, 71, 229, 0.6) 0%, rgba(200, 168, 255, 0) 100%), rgb(31, 33, 40)`,
    OPT:`radial-gradient(150% 100% at 50% 0%, rgb(62, 46, 56) 2%, rgb(44, 31, 45) 53%, rgb(31, 33, 40) 100%)`,
    CELO:`radial-gradient(150% 100% at 50% 0%, rgb(2, 80, 47) 2%, rgb(12, 41, 28) 53%, rgb(31, 33, 40) 100%)`,
    ARB:`radial-gradient(150% 100% at 50% 0%, rgb(10, 41, 75) 0%, rgb(34, 30, 48) 50%, rgb(31, 33, 40) 100%)`,
}
const DARK_ACTION_BUTTON = {
    MAIN:`rgb(10, 41, 75,0.4)`,
    POLY:`rgba(130, 71, 229, 0.3)`,
    OPT:`rgb(62, 46, 56,0.4)`,
    CELO:`rgb(2, 80, 47,0.4)`,
    ARB:`rgb(10, 41, 75,0.4)`
}
const DARK_ACTION_TEXT = {
    MAIN:`rgb(10, 41, 75)`,
    POLY:`rgba(130, 71, 229)`,
    OPT:`rgb(62, 46, 56)`,
    CELO:`rgb(2, 80, 47)`,
    ARB:`rgb(10, 41, 75)`
}

const LIGHT='rgb(255, 255, 255)';
const DARK_LIGHT='rgb(247, 248, 250)';
const DARK_LIGHTER='rgb(247, 248, 255,0.1)';
const TEXT_LIGHT='#191B1F';
const TEXT_LIGHT_DARK='#696b6e';
const ICON_LIGHT_DARK='rgb(143, 150, 172,0.4)';
const OUTLINE_LIGHT='#aaa';
const LIGHT_PRIMARY='rgb(232, 0, 111)';
const LIGHT_BUTTON_ACTIVE_BACKGROUND='rgb(232, 0, 111,0.4)';
const LIGHT_BUTTON_BACKGROUND='rgb(253, 234, 241)'


const LIGHT_BACKGROUND = {
    MAIN:`radial-gradient(50% 50% at 50% 50%,#fc077d10 0,rgba(255,255,255,0) 100%)`,
    POLY: `radial-gradient(153.32% 100% at 47.26% 0%, rgba(130, 71, 229, 0.46) 0%, rgba(0, 41, 255, 0.06) 48.19%, rgba(0, 41, 255, 0.01) 100%), rgb(255, 255, 255)`,
    OPT:`radial-gradient(150% 100% at 50% 0%, rgb(255, 251, 242) 2%, rgb(255, 244, 249) 53%, rgb(255, 255, 255) 100%)`,
    CELO:`radial-gradient(153.32% 100% at 47.26% 0%, rgb(2, 80, 47,0.4) 0%, rgba(0, 41, 255, 0.06) 48.19%, rgba(0, 41, 255, 0.01) 100%), rgb(255, 255, 255)`,
    ARB:`radial-gradient(150% 100% at 50% 0%, rgb(205, 232, 251) 0%, rgb(252, 243, 249) 50%, rgb(255, 255, 255) 100%)`,
}
const LIGHT_ACTION_BUTTON = {
    MAIN:`rgb(10, 41, 75,0.4)`,
    POLY:`rgba(130, 71, 229, 0.3)`,
    OPT:`rgb(62, 46, 56,0.4)`,
    CELO:`rgb(2, 80, 47,0.4)`,
    ARB:`rgb(10, 41, 75,0.4)`
}
const LIGHT_ACTION_TEXT = {
    MAIN:`rgb(10, 41, 75)`,
    POLY:`rgba(130, 71, 229)`,
    OPT:`rgb(62, 46, 56)`,
    CELO:`rgb(2, 80, 47)`,
    ARB:`rgb(10, 41, 75)`
}



const common = {
 PRIMARY: SUN_BLUE,
 SUCCESS: EMERALD,
 ERROR: ALIZARIN,
 DEFAULT:SILVER,
 LIGHT:LIGHTER,
 DARK:ASBESTOS,
 LIGHTBLUE:LIGHT_BLUE,
 JUICE:JUICE,
};

const light = {
 ...common,
 MAIN:LIGHT_BACKGROUND,
 BACKGROUND:LIGHT ,
 BACKGROUND_SEC:DARK_LIGHT,
 BACKGROUND_PRIMARY:DARK_LIGHTER,
 TEXT: TEXT_LIGHT,
 TEXT_SECONDARY: TEXT_LIGHT_DARK,
 TEXT_LIGHT:TEXT_DARK_LIGHT,
 ICON_BACK:ICON_LIGHT_DARK,
 OUTLINE_TEXT:OUTLINE_LIGHT,
 BUTTON_PRIMARY:LIGHT_PRIMARY,
 BUTTON_ACTIVE_BACKGROUND:LIGHT_BUTTON_ACTIVE_BACKGROUND,
 BUTTON_BACKGROUND:LIGHT_BUTTON_BACKGROUND,
 ACTION_BUTTON:LIGHT_ACTION_BUTTON,
 ACTION_TEXT:LIGHT_ACTION_TEXT

};

const dark = {
 ...common,
 MAIN:DARK_BACKGROUND,
 BACKGROUND:DARK,
 BACKGROUND_SEC:LIGHT_DARK,
 BACKGROUND_PRIMARY:LIGHT_DARKER,
 TEXT: TEXT_DARK,
 TEXT_SECONDARY: TEXT_DARK_LIGHT,
 TEXT_LIGHT:CLOUDS,
 ICON_BACK:ICON_DARK_LIGHT,
 OUTLINE_TEXT:OUTLINE_DARK,
 BUTTON_PRIMARY:DARK_PRIMARY,
 BUTTON_ACTIVE_BACKGROUND:DARK_BUTTON_ACTIVE_BACKGROUND,
 BUTTON_BACKGROUND:DARK_BUTTON_BACKGROUND,
 ACTION_BUTTON:DARK_ACTION_BUTTON,
 ACTION_TEXT:DARK_ACTION_TEXT
};

export const colors = {light, dark};