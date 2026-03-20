import { GiSharkFin } from "react-icons/gi";
import { BiSolidTreeAlt } from "react-icons/bi";
import {AiFillGithub} from 'react-icons/ai';
import { IoColorPaletteSharp } from "react-icons/io5";
import BackToTop from '../Assets/backToTop.js';
import ProjectBlock from "../Assets/projBlock.js";
import "./index.css";

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


const Code = () => {
    return (
    <div className = "mainPane eighty">

        {/* Five Minute Frames */}
        <ProjectBlock
          id = "fmframes"
          Icon = {IoColorPaletteSharp}
          paperLink = {undefined}
          descriptionComponents = {{
            par: <p/>, // paragraph
            parSm: <p className = "text-smaller pt-3"/> // smaller text
          }}
          hasAbstract = {false}
          linkComponents = {[]}
          images = {fmf_images}
        />

        <div style = {{"height":"3em"}}></div>

        {/* Parkour */}
        <ProjectBlock
          id = "parkour"
          Icon = {BiSolidTreeAlt}
          paperLink = {undefined}
          descriptionComponents = {{
            par: <p/>, // paragraph
          }}
          hasAbstract = {false}
          linkComponents = {[
            {link: "https://parkour-social-media-site.netlify.app/", icon: BiSolidTreeAlt},
            {link: "https://github.com/oj713/parkour-frontend", icon: AiFillGithub},
            {link: "https://github.com/oj713/parkour-backend", icon: AiFillGithub}
          ]}
          images = {parkour_images}
        /> 

        <div style = {{"height":"3em"}}></div>

        {/* Google Doodle */}
        <ProjectBlock
          id = "gdoodle"
          Icon = {GiSharkFin}
          paperLink = {undefined}
          descriptionComponents = {{
            par: <p/>, // paragraph
          }}
          hasAbstract = {false}
          linkComponents = {[
            {link: "https://oj713.github.io/Web-Design/google_doodle/index.html", icon: GiSharkFin}
          ]}
          images = {undefined}
          additionalContent = {
            <div>
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
          }
        /> 
            
        <BackToTop/>
    </div>
    )
}

export default Code;