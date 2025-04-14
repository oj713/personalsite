import React from 'react';
import {AiOutlineMail, AiFillGithub} from 'react-icons/ai';
import { FaLinkedin, FaOrcid } from "react-icons/fa";

const Contact = () => {
    return (
    <div className = "mainPane sixty" >
    <div>
        <div className = "row">
            <div className = "col-10">
                <h1><b>Contact</b></h1>
                <p className = "m-1"><i>Thanks for stopping by!</i></p>
            </div>
            <div className = "col-2"></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "background2 block col-10">
                <div className = "d-flex pb-3">
                    <AiOutlineMail className = "icon accent2"/>
                    <span className = "ps-3"> johnson.omi@northeastern.edu </span>
                </div>
                <div className = "d-flex pb-3">
                    <AiFillGithub className = "icon accent2"/>
                    <a className = "accent2hover ps-3" target="_blank" href = "https://github.com/oj713">https://github.com/oj713</a>
                </div>
                <div className = "d-flex pb-3">
                    <FaLinkedin className = "icon accent2"/>
                    <a className = "accent2hover ps-3"  target="_blank" href = "https://www.linkedin.com/in/omi-johnson/">https://www.linkedin.com/in/omi-johnson/</a>
                </div>
                <div className = "d-flex">
                    <FaOrcid className = "icon accent2"/>
                    <a className = "accent2hover ps-3" target="_blank" href = "https://orcid.org/0009-0005-9978-980X">https://orcid.org/0009-0005-9978-980X</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Contact;