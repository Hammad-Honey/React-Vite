
import { useTheme } from "../context/Theme"
export default function ThemeChange() {


    const { themeName,ThemeSelector } = useTheme();





        return (
            <>
                <button className="ThemeButton" onClick={() => ThemeSelector('Dark')} >Dark</button>
                <button className="ThemeButton" onClick={() => ThemeSelector('Light')}>Light</button>
                <button className="ThemeButton" onClick={() => ThemeSelector('Ocean')}>Ocean</button>
                <button className="ThemeButton" onClick={() => ThemeSelector('Sky')}>Sky</button>
    
            </>

        )
    }