import React from 'react';
import {IoMdOpen} from 'react-icons/io';
import {GoTriangleDown} from 'react-icons/go';
import {AiOutlineFilePdf, AiOutlineDownload, AiFillGithub} from 'react-icons/ai';
import "./index.css";

const Code = () => {
    return (
    <div className = "mainPane sixtyeighty">
        <div>
            <div style={{"height": "2em"}}></div>
            <div className = "row">
                <div className = "col-10">
                    <h2 className = "m-1" style = {{"font-size":"2em"}}><b>Web Development</b></h2>
                </div>
                <div className = "col-2"></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-2"></div>
                <div className = "col-10">
                    <div className = "background2 block pb-1"><p>While I have a breadth of coding skills ranging from data analysis and functional programming to object-oriented software development, I particularly enjoy web development for its user-oriented focus and complex design considerations. I've learned web design and development through my design coursework, independent exploration, and graduate-level Web class.</p>
                    </div>
                </div>
            </div>
            <div style = {{"height":"2vh"}}></div>
        {/* Parkour */}
        <div className = "row mt-5">
            <div className = "col-6">
                <iframe src="https://parkour-social-media-site.netlify.app/" 
                title="Parkour" width = "100%" height="100%" className = "rounded mh-500"></iframe>
            </div>
            <div className = "col vertcenter">
                <h2 className="m-1">Parkour
                <a href="https://parkour-social-media-site.netlify.app/" target="_blank" rel="noopener noreferrer"><IoMdOpen className = "up accent1hover"/></a>
                <a href="https://github.com/oj713/parkour-frontend" target="_blank" rel="noopener noreferrer"><AiFillGithub className = "up accent1hover"/></a></h2>
                <p><i>Node.js, MongoDB, Bootstrap, Redux.js, React.js</i></p>
                <div className = "row">
                    <div className = "col-2"></div>
                    <div className = "block accent1-bg col">
                        <p>A social media website by hikers, for hikers! Allows users to register, login, post, and search their favorite National Parks. Hooks to a custom backend API serving user and post information as well as the National Park Service API for additional park information. Built using React hooks, Redux reducers, MongoDB database, and Node.js RESTful API. Fully size responsive with custom CSS.</p>
                    </div>
                </div>
            </div>
        </div>
        <div style = {{"height":"2vh"}}></div>
        {/* Personal Site */}
        <div className = "row mt-5">
            <div className = "col-2"></div>
            <div className = "col-8 vertcenter">
                <h2 className="m-1">Personal Site
                <a href="https://github.com/oj713/personalsite" target="_blank" rel="noopener noreferrer"><AiFillGithub className = "up accent2hover"/></a></h2>
                <p><i>React.js, Bootstrap, HTML/CSS, Figma</i></p>
                <div className = "row">
                    <div className = "col-2"></div>
                    <div className = "block accent2-bg col">
                        <p>You're already here! I built this site using React.js as a writing portfolio that I later refactored to a personal site. I mocked the site using Figma and implemented it using React routing, Bootstrap grid layouts, and React icon libraries. Currently not mobile responsive, but will be soon!</p>
                    </div>
                </div>
            </div>
        </div>
        <div style = {{"height":"2vh"}}></div>
        {/* Water Me */}
        <div className = "row mt-5">
            <div className = "col vertcenter">
                <h2 className="m-1">Water Me!
                <a href="https://oj713.github.io/Web-Design/plant_watering/index.html" target="_blank" rel="noopener noreferrer"><IoMdOpen className = "up accent1hover"/></a>
                <a href="https://github.com/oj713/Web-Design/tree/main/plant_watering" target="_blank" rel="noopener noreferrer"><AiFillGithub className = "up accent1hover"/></a></h2>
                <p><i>HTML/CSS, Javascript, Adobe XD</i></p>
                <div className = "row">
                    <div className = "col-2"></div>
                    <div className = "block accent1-bg col">
                        <p>A simple plant watering application meant to track various houseplants and their watering status. Supports CRUD operations on houseplants. Mocked in Adobe XD, implemented in HTML/CSS, and made functional using Javascript and local storage.</p>
                    </div>
                </div>
            </div>
            <div className = "col-6 text-center">
                <iframe src="https://oj713.github.io/Web-Design/plant_watering/index.html" 
                title="Water Me!" width = "80%" height="100%" className = "rounded mh-500"></iframe>
            </div>
        </div>
        {/* Google Doodle */}
        <div className = "row mt-5">
            <div className = "col-8">
                <iframe src="https://oj713.github.io/Web-Design/google_doodle/index.html" 
                title="Google Doodle" width = "100%" height="100%" style={{"min-height":"500px"}} className = "rounded"></iframe>
            </div>
            <div className = "col vertcenter">
                <h2 className="m-1">Google Doodle
                <a href="https://oj713.github.io/Web-Design/google_doodle/index.html" target="_blank" rel="noopener noreferrer"><IoMdOpen className = "up accent2hover"/></a>
                <a href="https://github.com/oj713/Web-Design/tree/main/google_doodle" target="_blank" rel="noopener noreferrer"><AiFillGithub className = "up accent2hover"/></a></h2>
                <p><i>HTML/CSS</i></p>
                <div className = "row">
                    <div className = "col-2"></div>
                    <div className = "block accent2-bg col">
                        <p>A custom Google Doodle promoting Shark Awareness day. This project was a chance to experiment with hand-drawn designs and CSS transitions.</p>
                    </div>
                </div>
            </div>
        </div>
        <div style = {{"height":"2vh"}}></div>
        <div className = "text-center" style = {{"height":"10vh"}}>
            <br/>
            <a className="accent1hover" href = "#">Back to Top</a>
        </div>
    </div>
    </div>
    )
}

export default Code;