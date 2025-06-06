import React from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useColorScheme } from "./useColorScheme";

const LightDarkToggle = () => {
    const {isDarkMode, setIsDarkMode} = useColorScheme();

    return (
        <button className = "vertcenter nostyle" onClick = {() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ?
                <MdOutlineDarkMode className = "icon down"/> :
                <MdOutlineLightMode className = "icon down"/>
            }
        </button>
    )
}

export default LightDarkToggle;