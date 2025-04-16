import React from 'react';
import { GiMirrorMirror, GiSharkFin } from "react-icons/gi";
import { BiSolidTreeAlt } from "react-icons/bi";
import {AiFillGithub} from 'react-icons/ai';
import { IoColorPaletteSharp } from "react-icons/io5";
import ImageGallery from '../Assets/imageGallery.js';
import BackToTop from '../Assets/backToTop.js';
import "./index.css";

const ccc_images = [
    {
        src: "/Images/CCC/c_guereza.jpg",
        caption: "Colobus Guereza. These monkeys are native to Africa and are known for their long tails and black and white fur. They are arboreal and live in social groups. Photo: Flickr"
    },
    {
        src: "/Images/CCC/primates_mirrors.jpg",
        caption: "Primates, including Colobus Guereza, have demonstrated interest in mirror-based enrichment. Colobus Guereza in particular are not food-motivated, so mirror-based enrichment is a promising avenue. Photo: Looky Lou"
    },
    {
        src: "/Images/CCC/init_design.png",
        caption: "Initial designs featured one large mirror rather than the final modular design. A key component retained through all designs was giving the monkeys agency to hide the mirror, preventing undue stress."
    },
    {
        src: "/Images/CCC/box.JPG",
        caption: "Initial prototype of the design using PVC sheet. The final design will have 5 holes rather than 2. A rope-based cover obscures a circular slot that can be replaced with mirror modules."
    },
    {
        src: "/Images/CCC/leaf_modules.png",
        caption: "Pilot prototype. In the pilot testing (taking place late April), we will be testing the preferences of the monkeys between flap covers. Covers pictured: synthetic rope, silicone leaf, hard plastic leaf, firehose drapes."
    },
    {
        src: "/Images/CCC/location.png",
        caption: "Final intended location of the device within the Colobus Guereza enclosure at Stone Zoo. Testing will take place for two weeks in mid-June."
    }
];

const parkour_images = [
    {
        src: "/Images/Parkour/homepage.png",
        caption: "The homepage of the Parkour application shows current National Parks news served by their API as well as content from followed accounts, if logged in."
    },
    {
        src: "/Images/Parkour/register.png",
        caption: "New users can register for an account using the registration page. The application uses a MongoDB database to store user information."
    },
    {
        src: "/Images/Parkour/profile.png",
        caption: "The profile page contains user posts, followed accounts, and likes. Users can create new posts, delete posts, and edit their profile information."
    },
    {
        src: "/Images/Parkour/parkprofile.png",
        caption: "Navigating to the profile of a park shows specialized headers and posts as well as park-specific posting options. Rangers also have a special icon."
    },
    {
        src: "/Images/Parkour/search.png",
        caption: "The search page allows users to search for parks and users by name. Results are pulled from the National Parks API."
    },
    {
        src: "/Images/Parkour/parkinfo.png",
        caption: "Detailed information on all parks is available through the National Parks API. If a park is also a member on the application, posts from their profile are also shown."
    }
];

const fmf_images = [
    {
        src: "/Images/FMF/char.png",
        caption: "Booting the application up shows a character select screen."
    },
    {
        src: "/Images/FMF/map.png",
        caption: "Players are dropped onto a map with a tile-based rendering system and collidable objects. Frames are scattered about the map. Multiple players can log on at a time."
    },
    {
        src: "/Images/FMF/chat.png",
        caption: "Players can chat to each other through the terminal."
    },
    {
        src: "/Images/FMF/move.gif",
        preview: "/Images/FMF/move.jpg",
        caption: "Players can move around the map using arrow keys. Standing in front of a frame will trigger a view button."
    },
    {
        src: "/Images/FMF/upload.png",
        caption: "Users can upload new images to any empty frames. These images will be visible to everyone and disappear after five minutes."
    },
    {
        src: "/Images/FMF/viewart.png",
        caption: "Once an image is populated, the frame will fill on the map and other users can view your work!"
    }
];


const Projects = () => {
    return (
    <div className = "mainPane eighty">

        {/* ACI */}
        <div>
            {/* Header */}
            <p className = "block d-inline-block accent1-bg">March 2025 - <i>Present</i></p>
            <div className = "row">
                <div className = "col-12">
                    <h2 className = "mx-0 mt-2 mb-3"><GiMirrorMirror className = "up"/> Animal-Computer Interaction: Sensor-enabled, Mirror-based enrichment for <i>Colobus Guereza</i> monkeys</h2>
                    <p className = "text-smaller ps-1"><i>Raspberry Pi, HTML/CSS, User-Centered Design, Physical Fabrication</i></p>
                </div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                    {/* Description */}
                    <div className = "block background2">
                    <p>
                        In the modern age, animals are increasingly interacting with technology: service dogs must navigate automatic doors, smart collars can inform animal health, and zoo animals can interact with touch screens. Animal-Computer Interaction is a recently emerged field of research that studies the intersection of animals and technology. A key tenant of this field is that technology should be created using the principles of user-centered design and human-computer interaction, thus enabling natural and consented use of technology by animals.
                    </p>
                    <p>
                        In this project within the <a className = "accent1" href = "https://www.interactanimallab.com/" target = "_blank" rel="noreferrer"> Interact Animal Lab </a>, we are constructing a sensor-enabled, mirror-based enrichment device for <i>Colobus Guereza</i> monkeys. The device consists of modular mirror components covered by movable flaps. The device is intended to encourage natural behaviors in <i>C. Guereza</i>, such as foraging and exploration of novel enrichment. Sensors and touch-screen modules will be used to collect data on effectiveness and add extra depth to play. This project is conducted in collaboration with <a className = "accent1" href = "https://www.zoonewengland.org/stone-zoo" target = "_blank" rel="noreferrer"> Stone Zoo </a> and will be tested with their 5 <i>C. Guereza</i> individuals in mid-June. 
                    </p>
                    </div>

                    <div style = {{"height":"2em"}}></div>

                    <ImageGallery images={ccc_images}/>
                </div>
            </div>
        </div>

        <div style = {{"height":"3em"}}></div>

        {/* Five Minute Frames */}
        <div>
            {/* Header */}
            <p className = "block d-inline-block accent1-bg">October - December 2023</p>
            <div className = "row">
                <div className = "col-12">
                    <h2 className = "mx-0 mt-2 mb-3"><IoColorPaletteSharp className = "up"/> Five Minute Frames</h2>
                    <p className = "text-smaller ps-1"><i>D programming language, Networking, Unit Testing, Agile</i></p>
                </div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                    {/* Description */}
                    <div className = "block background2">
                    <p>
                        This application lets everyone have a chance to be an artist! Five Minute Frames is a game application that lets users chat, upload images, and view the work of others in an interactive gallery. Images only last five minutes, so everyone can get a turn! Users can choose their own sprite and move around a map to view different frames.
                    </p>
                    <p>
                        The program is built using the D programming language, which is related to C++. The application is built using a client-server architecture, where the server is responsible for managing the game state and the clients are responsible for rendering the game. Chats over the terminal are managed using a custom protocol. The map and images are rendered with a GUI and sprite-based animation. This project was completed in a group using Agile development methodology and thorough unit testing.
                    </p>
                    </div>

                    <div style = {{"height":"2em"}}></div>

                    <ImageGallery images={fmf_images}/>
                </div>
            </div>
        </div>

        <div style = {{"height":"3em"}}></div>

        {/* Parkour */}
        <div>
            {/* Header */}
            <p className = "block d-inline-block accent1-bg">July - August 2022</p>
            <div className = "row">
                <div className = "col-12">
                    <a href = "https://parkour-social-media-site.netlify.app/" target="_blank" rel="noopener noreferrer"><h2 className = "mx-0 mt-2 mb-3"><BiSolidTreeAlt className = "up"/> Parkour: U.S. National Parks Social Media</h2></a>
                    <p className = "text-smaller ps-1"><i>Node.js, MongoDB, Bootstrap, Redux.js, React.js, Full-Stack Development</i></p>
                </div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                    {/* Description */}
                    <div className = "block background2">
                    <p>
                        The U.S. National Parks are a point of national pride and spark fierce appreciation for the natural world. This web-based social media platform demo allows users to share their favorite parks, post photos, and connect directly with parks, rangers, and hikers alike. The application also connects directly to the National Parks API to display the latest news and information about each park.
                    </p>
                    <p>
                        This project is a full-stack web application built within Javascript. The backend server, built using Node.js connected to a MongoDB database, stores user and park information and transmits it to the front end via RESTful APIs. The frontend, built using React, Redux, and Bootstrap, supports user registration, login, and CRUD operations on posts. The application is fully responsive and includes custom CSS styling.
                    </p>
                    </div>
                    {/* Primary links */}
                    <div>
                        <a className="accent2hover" href = "https://parkour-social-media-site.netlify.app/" target="_blank" rel="noopener noreferrer"><p className = "pt-3"><BiSolidTreeAlt className = "icon accent2 up"/> View the live demo. </p></a>
                        <a className="accent2hover" href = "https://github.com/oj713/parkour-frontend" target = "_blank" rel = "noopener noreferrer"><p className = "pt-2"><AiFillGithub className = "icon accent2 up"/> View the frontend source code on GitHub. </p></a>
                        <a className="accent2hover" href = "https://github.com/oj713/parkour-backend" target = "_blank" rel = "noopener noreferrer"><p className = "pt-2"><AiFillGithub className = "icon accent2 up"/> View the backend source code on GitHub. </p></a>
                    </div>

                    <div style = {{"height":"2em"}}></div>

                    <ImageGallery images={parkour_images}/>
                </div>
            </div>
        </div>

        <div style = {{"height":"3em"}}></div>

        {/* Google Doodle */}
        <div>
            {/* Header */}
            <p className = "block d-inline-block accent1-bg">November 2021</p>
            <div className = "row">
                <div className = "col-12">
                    <a href = "https://oj713.github.io/Web-Design/google_doodle/index.html" target="_blank" rel="noopener noreferrer"><h2 className = "mx-0 mt-2 mb-3"><GiSharkFin className = "up"/> Google Doodle</h2></a>
                    <p className = "text-smaller ps-1"><i>HTML, CSS, hand-drawn imagery</i></p>
                </div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                    {/* Description */}
                    <div className = "block background2">
                    <p>
                        A short and simple HTML/CSS project to design a custom Google Doodle. The doodle leverages hand-drawn designs and CSS transitions to create a fun and interactive experience celebrating International Shark Awareness Day.
                    </p>
                    </div>
                    {/* Primary links */}
                    <div>
                        <a className="accent2hover" href = "https://oj713.github.io/Web-Design/google_doodle/index.html" target="_blank" rel="noopener noreferrer"><p className = "pt-3"><GiSharkFin className = "icon accent2 up"/> View the live demo. </p></a>
                    </div>

                    <div style = {{"height":"2em"}}></div>

                    <div className="row">
                      <div className="col-12 col-sm-6 mb-2 mb-sm-0">
                        <img
                          src="./Images/GD/up.png"
                          alt="Google Doodle, up position"
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <img
                          src="./Images/GD/down.png"
                          alt="Google Doodle, down position"
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                </div>
            </div>
        </div>
            
        <BackToTop/>
    </div>
    )
}

export default Projects;