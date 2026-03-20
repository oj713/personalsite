import { GiSharkFin } from "react-icons/gi";
import { BiSolidTreeAlt } from "react-icons/bi";
import {AiFillGithub} from 'react-icons/ai';
import { IoColorPaletteSharp } from "react-icons/io5";
import { BiNetworkChart } from "react-icons/bi";
import BackToTop from '../Assets/backToTop.js';
import ProjectBlock from "../Assets/projBlock.js";
import { useTranslation } from "react-i18next";
import "./index.css";

const imagesFmframes = [
    { src: "char.png" },
    { src: "map.png" },
    { src: "chat.png" },
    { src: "move.gif", preview: "move.jpg" },
    { src: "upload.png" },
    { src: "viewart.png" }
];

const imagesParkour = [
    { src: "homepage.png" },
    { src: "register.png" },
    { src: "profile.png" },
    { src: "parkprofile.png" },
    { src: "search.png" },
    { src: "parkinfo.png" }
];

const Code = () => {
    const {t} = useTranslation();

    return (
    <div className = "mainPane eighty">

        {/* jsAgrum */}
        <ProjectBlock
          id = "jsagrum"
          Icon = {BiNetworkChart}
          paperLink = {undefined}
          descriptionComponents = {{
            par: <p/>, // paragraph
            parSm: <p className = "text-smaller pt-3"/>, // smaller text
            lip6Link: <a className = 'accent1' href = "https://www.lip6.fr/" target = '_blank' rel='noreferrer' aria-label="LIP6 Website"/>,
            agLink: <a className = 'accent1' href = "https://pyagrum.gitlab.io/agrum/" target = '_blank' rel='noreferrer' aria-label="aGrUM Website"/>
          }}
          hasAbstract = {false}
          linkComponents = {[]}
          images = {undefined}
        />

        <div style = {{"height":"3em"}}></div>

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
          images = {imagesFmframes}
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
            //{link: "https://parkour-social-media-site.netlify.app/", icon: BiSolidTreeAlt},
            {link: "https://github.com/oj713/parkour-frontend", icon: AiFillGithub},
            {link: "https://github.com/oj713/parkour-backend", icon: AiFillGithub}
          ]}
          images = {imagesParkour}
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
            <div className="row">
              <div className="col-12 col-sm-6 mb-2 mb-sm-0">
                <img
                  src="./Images/gdoodle/up.png"
                  alt={t("projBlock.gdoodle.captions.up")}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-12 col-sm-6">
                <img
                  src="./Images/gdoodle/down.png"
                  alt={t("projBlock.gdoodle.captions.down")}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          }
        /> 
            
        <BackToTop/>
    </div>
    )
}

export default Code;