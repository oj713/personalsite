import {IoMdOpen} from 'react-icons/io';
import {AiFillGithub, AiOutlineFilePdf} from 'react-icons/ai';
import { FaRegNewspaper } from "react-icons/fa6";
import {GiWhaleTail, GiSlicedBread, GiMirrorMirror} from 'react-icons/gi';
import BackToTop from '../Assets/backToTop.js';
import "./index.css";
import ProjectBlock from '../Assets/projBlock.js';
import {useTranslation, Trans} from 'react-i18next';

const imagesBigelow = [
    { src: "Rightwhale.png" },
    { src: "Cfinmarchicus.png" },
    { src: "cfin_abund.png" },
    { src: "resp_curves.png" },
    { src: "pres_jul.png" },
    { src: "future_preds.png" }
];

const imagesParissaclay = [
    { src: "bayesian_network.png" },
    { src: "full_network.png" },
    { src: "node_design.png" },
    { src: "evidence_prop.gif", preview: "evidence_prop.jpg" },
    { src: "alternative_settings.png" },
    { src: "sig_threshold.gif", preview: "sig_threshold.jpg" }
];

const imagesColobus = [
    { src: "c_guereza.jpg" },
    { src: "primates_mirrors.jpg" },
    { src: "init_design.png" },
    { src: "3Dmodel.png" },
    { src: "leaf_modules.png" },
    { src: "prototype_HDPE.png" }
];

const Publications = () => {
    const {t} = useTranslation();
    return (
    <div className = "mainPane eighty">

    <div style = {{"height":"2vh"}}></div>

    {/* PARIS-SACLAY */}
    <ProjectBlock
      id = "parissaclay"
      Icon = {GiSlicedBread}
      paperLink = "https://dl.acm.org/doi/10.1145/3706599.3720102"
      descriptionComponents = {{
        par: <p/>, // paragraph
        inraeLink: <a className = 'accent1' href = 'https://www.inrae.fr/' target = '_blank' rel='noreferrer' aria-label="INRAE Website"/>,
        lisnLink: <a className = 'accent1' href = 'https://www.lisn.upsaclay.fr' target = '_blank' rel='noreferrer' aria-label="LISN Website"/>,
        evagrainLink: <a className = 'accent1' href = 'https://evagrain.hub.inrae.fr/' target = '_blank' rel='noreferrer' aria-label="EVAGRAIN Website"/>,
      }}
      hasAbstract = {true}
      linkComponents = {[
        {link: "https://programs.sigchi.org/chi/2025/program/content/194610", icon: GiSlicedBread},
        {link: "https://dl.acm.org/doi/10.1145/3706599.3720102", icon: AiOutlineFilePdf},
        {link: "https://www.khoury.northeastern.edu/chi-2025-khoury-researchers-publish-record-high-papers-for-second-straight-year/", icon: FaRegNewspaper},
      ]}
      images = {imagesParissaclay}
    />

    <div style = {{"height":"5em"}}></div>

    {/* BIGELOW */}
    <ProjectBlock
      id = "bigelow"
      Icon = {GiWhaleTail}
      paperLink = "https://doi.org/10.1525/elementa.2024.00044"
      descriptionComponents = {{
        par: <p/>, // paragraph
        parSm: <p className = "text-smaller pt-3"/>, // smaller text
        i: <i/>, // italics
        bigelowLink: <a className = 'accent1' href = "https://www.bigelow.org/" target = '_blank' rel='noreferrer' aria-label="Bigelow Website"/>,
        copLink: <a className = 'accent1' href = "https://data.marine.copernicus.eu/products" target = '_blank' rel='noreferrer' aria-label="Copernicus Website"/>
      }}
      hasAbstract = {true}
      linkComponents = {[
        {link: "/PDFfiles/NARWC_Poster.pdf", icon: GiWhaleTail},
        {link: "https://doi.org/10.1525/elementa.2024.00044", icon: AiOutlineFilePdf},
        {link: "https://github.com/BigelowLab/predicting_NARW", icon: AiFillGithub},
        {link: "https://github.com/oj713/daily_NARW_prey_forecasts", icon: AiFillGithub}
      ]}
      images = {imagesBigelow}
      additionalContent = {
        <div>
          <div style = {{"height":"3em"}}></div>

          <h2 className = "mx-0 mt-2 mb-3">{t("projBlock.bigelow.additional.title")}</h2>
          <div>
              <div className = "block accent2-bg">
                  <a href = "https://oj713.github.io/tidymodels/" target="_blank" rel = "noreferrer">
                    <h3 className = "m-1">{t("projBlock.bigelow.additional.tutorial.title")}<IoMdOpen className = "up"/></h3>
                  </a>
                  <p> { <Trans
                      i18nKey={"projBlock.bigelow.additional.tutorial.description"}
                      components={{ tmLink: <a href = "https://www.tidymodels.org/" target = "_blank" rel = "noreferrer" className = "accent1" aria-label="Tidymodels Website"/> }}
                      /> } 
                  </p>
              </div>
              <div className="block right-whale-bg mt-3">
                <div className="overlay"></div>
                <div className="content">
                  <a href="https://arcg.is/1CzLOC0" target="_blank" rel="noreferrer">
                    <h3 className="m-1">{t("projBlock.bigelow.additional.savingNARW.title")}<IoMdOpen className="up" /></h3>
                  </a>
                  <p>{t("projBlock.bigelow.additional.savingNARW.description")}</p>
                </div>
              </div>
              <div className = "block accent2-bg mt-3">
                  <a href = "https://github.com/oj713/brickman-walkthrough" target="_blank" rel = "noreferrer"><h3 className = "m-1">{t("projBlock.bigelow.additional.walkthrough.title")}<IoMdOpen className = "up"/></h3></a>
                  <p> 
                     { <Trans
                    i18nKey={"projBlock.bigelow.additional.walkthrough.description"}
                    components={{ bLink: <a href = "https://online.ucpress.edu/elementa/article/9/1/00055/116900/Projections-of-physical-conditions-in-the-Gulf-of" target = "_blank" rel = "noreferrer" className = "accent1" aria-label="Brickman Paper Link"/> }}
                    /> }
                  </p>
              </div>
          </div>
        </div>
      }
    />

    <div style = {{"height":"5em"}}></div>

    {/* INTERACT ANIMAL LAB */}
    <ProjectBlock
      id = "colobus"
      Icon = {GiMirrorMirror}
      paperLink = "https://dl.acm.org/doi/10.1145/3706599.3720102"
      descriptionComponents = {{
        par: <p/>, // paragraph
        ialLink: <a className = "accent1" href = "https://www.interactanimallab.com/" target = "_blank" rel="noreferrer" aria-label="Interact Animal Lab Website"/>
      }}
      hasAbstract = {true}
      linkComponents = {[
        {link: "https://www.interactanimallab.com/publications/colobus-curio-cabinet", icon: GiMirrorMirror},
        {link: "https://doi.org/10.1145/3768539.376855", icon: AiOutlineFilePdf}
      ]}
      images = {imagesColobus}
    />

    {/* Back to top */}
    <BackToTop/>
    </div>
    )
}

export default Publications;