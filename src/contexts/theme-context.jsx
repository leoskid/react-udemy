import React, { useContext, createContext, useState } from "react";

export const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(false);

	const setTheme = () => setDarkTheme((prev) => !prev);

	return (
		<themeContext.Provider value={{ darkTheme, setTheme }}>
			{children}
		</themeContext.Provider>
	);
};

export default ThemeProvider;
