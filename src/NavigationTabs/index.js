import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./index.css";
import {AiOutlineHome, AiOutlineLineChart, AiOutlineMail} from 'react-icons/ai';
import {GiWhaleTail} from 'react-icons/gi';
import {BiBook} from 'react-icons/bi';

const NavigationTabs = () => {

    const {pathname} = useLocation()
    let [ignore, active] = pathname.split("/")

    const tabs = [
        {name:"contact", icon:<AiOutlineMail className = "icon down"/>}, 
        {name:"narrative", icon:<BiBook className = "icon down"/>}, 
        {name:"forecasting", icon:<AiOutlineLineChart className = "icon down"/>}, 
        {name:"bigelow", icon:<GiWhaleTail className = "icon down"/>}]

    return (
        <div>
        <ul className="nav d-flex flex-row-reverse nav-pills p-4">
            {tabs.map(tab => 
                <Link key = {tab.name} className={`${active === tab.name ? "active" : "hidden"} btn rounded-pill d-flex nav-link text-capitalize`} to={tab.name}>
                    {tab.icon}
                    <div className = "transition p-0 ms-2">{tab.name}</div>
                </Link>
            )}
            <Link className = {`me-3 ${active ? "" : "hidden"} homeButton`} key = "home" to = "/">
                <AiOutlineHome className = "icon mt-2"/>
            </Link>
        </ul>
        </div>
    )
}

const NavigationTabsOG = () => {

    const {pathname} = useLocation()
    let [ignore, active] = pathname.split("/")

    const tabs = [
        {name:"contact", icon:<AiOutlineMail className = "icon up"/>}, 
        {name:"narrative", icon:<BiBook className = "icon up"/>}, 
        {name:"forecasting", icon:<AiOutlineLineChart className = "icon up"/>}, 
        {name:"bigelow", icon:<GiWhaleTail className = "icon up"/>}]

    return (
        <div>
        <ul className="nav d-flex flex-row-reverse nav-pills p-4">
            {tabs.map(tab => 
                <Link key = {tab.name} className={`${active === tab.name ? "active" : ""} btn rounded-pill nav-link text-capitalize`} to={tab.name}>
                    {tab.icon}
                    <span className = "ms-2">{tab.name}</span>
                </Link>
            )}
            {active &&
            <Link className = "me-3" key = "home" to = "/">
                <AiOutlineHome className = "icon mt-2"/>
            </Link>
            }
        </ul>
        </div>
    )
}

export default NavigationTabs;