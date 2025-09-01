import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",//variables
    darkTheme: ()=>{},//functions bhi de sakte ho 
    lightTheme: ()=>{}//functions bhi de sakte ho 
});

export const ThemeProvider = ThemeContext.Provider;//this is basic need so ye to likhna padega

export const useTheme= ()=>{//Custom hook
    return useContext(ThemeContext);// ab ye dono import karne ki jarurat nahin padegi . useTheme() ko import karo and kaam ho jayega 
}