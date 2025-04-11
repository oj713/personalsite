import React from 'react';
import "./index.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useColorScheme } from "./useColorScheme";

const LightDarkToggle = () => {
    const {isDarkMode, setIsDarkMode} = useColorScheme();

    return (
        <button className = "p-3 ps-4 vertcenter nostyle"
                onClick = {() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ?
                <MdOutlineLightMode className = "icon down"/> :
                <MdOutlineDarkMode className = "icon down"/>
            }
        </button>
    )
}

export default LightDarkToggle;