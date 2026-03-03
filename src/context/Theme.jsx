import { createContext, useContext,useState } from "react";

const theme=createContext();

export function ThemeProvider({children}){
    const [themeName,setThemeColor]=useState(null);

    const ThemeSelector=(userTheme)=>setThemeColor(userTheme);

    return(
        <theme.Provider value={{themeName, ThemeSelector}}>
            <div className={themeName}>
                 {children}
            </div>
           
        </theme.Provider>

    )
}
// Using Hook

export function useTheme(){
    const context = useContext(theme);
    if(!context){
        throw Error ("You must use components withing <theme.provider>")
    }
    return useContext(theme);}