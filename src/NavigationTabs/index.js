import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./index.css";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { BiCodeAlt } from 'react-icons/bi';
import { GiWhaleTail } from 'react-icons/gi';
import Settings from '../Settings';
import {useTranslation} from 'react-i18next';

const NavigationTabs = () => {
    const {t} = useTranslation();

    const { pathname } = useLocation();
    let [ignore, active] = pathname.split("/");
    const [menuOpen, setMenuOpen] = useState(false);

    const tabs = [
        { name: "contact", label: t("nav.contact"), icon: <AiOutlineMail className="icon me-2" /> },
        { name: "resume", label: t("nav.resume"), icon: <IoDocumentTextOutline className="icon me-2" /> },
        { name: "code", label: t("nav.code"), icon: <BiCodeAlt className="icon me-2" /> },
        { name: "publications", label: t("nav.publications"), icon: <GiWhaleTail className="icon me-2" /> }
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="navigation-wrapper">
            {/* Pills-style nav for medium+ screens */}
            <div className="d-none d-md-flex justify-content-between p-3">
                <Settings />
                <ul className="nav flex-row-reverse nav-pills">
                    {tabs.map(tab => (
                        <Link
                            key={tab.name}
                            className={`${active === tab.name ? "active" : "hidden"} btn rounded-pill d-flex nav-link text-capitalize`}
                            to={tab.name}>
                            {tab.icon}
                            <div className="transition p-0 ms-2">{tab.label}</div>
                        </Link>
                    ))}
                    <Link className={`me-3 ${active ? "" : "hidden"} homeButton`} to="/">
                        <AiOutlineHome className="icon mt-2" />
                    </Link>
                </ul>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="d-flex justify-content-between d-md-none p-3">
                <Settings />
                <span>
                    <Link to="/" className={`${active ? "" : "hidden"} homeButton fs-4`}>
                        <AiOutlineHome />
                    </Link>
                    <button className="btn btntextcol" onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose className = "icon up"/> : <AiOutlineMenu className = "icon up"/>}
                    </button>
                </span>
            </div>

            {menuOpen && (
                <div className="dropdown-menu-custom d-md-none">
                    {[...tabs].reverse().map(tab => (
                        <Link
                            key={tab.name}
                            className={`dropdown-item d-flex align-items-center ${active === tab.name ? "active" : ""}`}
                            to={`/${tab.name}`}
                            onClick={closeMenu}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavigationTabs;
