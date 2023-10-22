/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();
const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
  
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

const themeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Set the initial theme here

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default themeProvider;
