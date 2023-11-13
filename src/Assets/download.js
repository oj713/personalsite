import React from 'react';
import {AiOutlineFilePdf, AiOutlineDownload} from 'react-icons/ai';

const Download = ({link, text}) => {
    return (
        <a href = {link} target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between p-2 mt-2">
           <span><AiOutlineFilePdf className = "up orange icon"/> {text} </span>
           <span><AiOutlineDownload className = "up orange icon"/></span>
        </div>
        </a>
    )
}

export default Download;