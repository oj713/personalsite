import React from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useColorScheme } from "./useColorScheme";
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";

const LightDarkToggle = () => {
    const {i18n, t} = useTranslation();
    const {isDarkMode, setIsDarkMode} = useColorScheme();

    return (
        <div>
            <button className = "vertcenter nostyle" onClick = {() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ?
                    <MdOutlineDarkMode className = "icon down"/> :
                    <MdOutlineLightMode className = "icon down"/>
                }
            </button>
            <select defaultValue = {i18n.language}
                onChange = {(e) => i18n.changeLanguage(e.target.value)}>
                {LANGUAGES.map(({code}) => <option key = {code} value = {code}> {code} </option>)}
            </select>  
        </div> 
    )
}

export default LightDarkToggle;