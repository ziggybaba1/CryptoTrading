import React, { useState } from 'react';
import {colors} from './color';
import {typography} from './typography';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const isLightTheme = false; // this is temporary, we will get back to it later
  const [themestyle,setThemeStyle]=useState(isLightTheme);
  
  // const updateTheme=(teme) => {
  //   setThemeStyle(teme);
  // }
  const theme = {
    colors: themestyle ? colors.light : colors.dark,
    typography,
    type:themestyle,
    updateTheme:(teme) => {
      setThemeStyle(teme);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;