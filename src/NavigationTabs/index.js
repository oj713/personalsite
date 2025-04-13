import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./index.css";
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {IoDocumentTextOutline} from 'react-icons/io5';
import {BiCodeAlt} from 'react-icons/bi';
import {GiWhaleTail} from 'react-icons/gi';

const NavigationTabs = () => {

    const {pathname} = useLocation()
    let [ignore, active] = pathname.split("/")

    const tabs = [
        {name:"contact", icon:<AiOutlineMail className = "icon down"/>},
        {name:"resume", icon:<IoDocumentTextOutline className = "icon down"/>},
        {name:"projects", icon:<BiCodeAlt className = "icon down"/>},
        {name:"publications", icon:<GiWhaleTail className = "icon down"/>}]

    return (
        <div>
        <ul className="nav d-flex flex-row-reverse nav-pills p-3">
            {tabs.map(tab => 
                <Link key = {tab.name} 
                    className={`${active === tab.name ? "active" : "hidden"} btn rounded-pill d-flex nav-link text-capitalize`} 
                    to={tab.name}>
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

export default NavigationTabs;