import {IoMdOpen} from 'react-icons/io';
import {AiFillGithub, AiOutlineFilePdf} from 'react-icons/ai';
import { FaRegNewspaper } from "react-icons/fa6";
import {GiWhaleTail, GiSlicedBread, GiMirrorMirror} from 'react-icons/gi';
import BackToTop from '../Assets/backToTop.js';
import "./index.css";
import ProjectBlock from '../Assets/projBlock.js';
import {useTranslation, Trans} from 'react-i18next';

const imagesBigelow = [
    {
      src: "/Images/Bigelow/Rightwhale.png",
      caption: "North Atlantic Right Whale. These whales boast beautiful, smooth tails that make them easy to identify. Photo: Peter Crosson, licensed under CC BY-NC-SA 2.0.",
    },
    {
      src: "/Images/Bigelow/Cfinmarchicus.png",
      caption: "Calanus Finmarchicus, a lipid-rich copepod fed upon by right whales. These and C. Hyperboreus were used as input prey layers for the model. Photo: David Fields.",
    },
    {
      src: "/Images/Bigelow/cfin_abund.png",
      caption: "Data of C. Finmarchicus abundance sourced from the National Oceanic and Atmospheric Administration's (NOAA's) Fisheries Ecosystem Monitoring Program (MARMAP/EcoMon) survey and the Fisheries and Oceans Canada (DFO) Atlantic Zone Monitoring Program (AZMP) survey. Blue points represent absences, red presences relative to a minimum bioenergetic threshold. A similar dataset was used for C. Hyperboreus."
    },
    {
      src: "/Images/Bigelow/resp_curves.png",
      caption: "Response curves from a preliminary version of the final C. finmarchicus model. Lines represent how each fold of the boosted regression tree model responded to variation in a covariate while all other covariates were held constant. Vertical lines represent median variable values. This is one example of original model analyses described in the final manuscript."
    },
    {
      src: "/Images/Bigelow/pres_jul.png",
      caption: "Historical (1990-2015) projections of combined Calanus spp. τh-patch probabilities in July. Combined probabilities are calculated as the summed likelihood of either C. finmarchicus or C. hyperboreus constituting suitable foraging habitat at a point. Areas highlighted here, for example the Gulf of Maine and Gulf of Saint Lawrence, have been historically documented as foraging areas."
    },
    {
      src: "/Images/Bigelow/future_preds.png",
      caption: "Habitat shift maps for future combined Calanus spp. projections, May through October. Colors represent how combined projected foraging habitat suitability shifted between historical (1990-2015) and representative concentration pathway RCP 8.5 year-2075 (2066-2085) climate projections relative to a habitat probability threshold of 20%. These projections highlight areas of change for future foraging suitability, for example loss of foraging habitat suitability in the Gulf of Maine."
    },
];

const imagesParisSaclay = [
    {
      src: "/Images/ParisSaclay/bayesian_network.png",
      caption: "A Bayesian Network consists of nodes (variables) and edges (dependencies). Probabilistic relationships between nodes are represented by conditional probability tables (CPTs). These networks can be used to propogate evidence throughout a network based on known values, but are difficult to interpret for non-technical users. This is a simple 4-variable example of a Bayesian Network, but the EVAGRAIN network features 25 sensory and quantile metrics."
    },
    {
      src: "/Images/ParisSaclay/full_network.png",
      caption: "The visualization platform was implemented as an React web application. The platform consists of a scrollable network pane and accompanying options bar. The network is represented a set of nodes and edges."
    },
    {
      src: "/Images/ParisSaclay/node_design.png",
      caption: "Variables, or nodes, in the network are represented as circles. The name and bread-making step of a variable are encircled by a ring of marginal probabilities representing its likelihood. The EVAGRAIN network is unique in that all nodes can be represented using the same legend scale."
    },
    {
      src: "/Images/ParisSaclay/evidence_prop.gif",
      preview: "/Images/ParisSaclay/evidence_prop.jpg",
      caption: "Clicking on a probability ring will propagate evidence for the node, allowing for a user to see how a set piece of evidence affects the likelihood of other nodes in the network. The thickness of relations, represented as arrows, adjusts according to the mutual information between nodes. Evidence propogation was consistently considered the biggest strength of the platform during validation sessions."
    },
    {
      src: "/Images/ParisSaclay/alternative_settings.png",
      caption: "The options bar at the top of the screen allows users to customize their preferred view of the network. Users can toggle network type (either including or not including an all-encompassing PROFIL variable), node color, layout, and significance calculations. Users consistently used the customization toggles to adjust the network view to their liking."
    },
    {
      src: "/Images/ParisSaclay/sig_threshold.gif",
      preview: "/Images/ParisSaclay/sig_threshold.jpg",
      caption: "Only nodes that are considered to have 'significantly' changed due to evidence propagation will expand to show both current and prior marginal probabilities. Users can easily change the threshold for significance using the top bar, enabling them to identify degrees of change without relying on complex numerical charts."
    },
];

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
        src: "/Images/CCC/3Dmodel.png",
        caption: "A detailed 3D model of the final prototype, built using Fusion 360. The interior view shows each module and module locking system, inaccessible to Colobus. The 3D model allows for easy examination and design iteration of the prototype and improved both planning and communication with zoo staff."
    },
    {
        src: "/Images/CCC/leaf_modules.png",
        caption: "Leaf module examination. In this pilot prototype, various module cover options are demonstrated which cover flat mirrored compartments. Covers pictured: synthetic rope, silicone leaf (later scrapped due to durability concerns), hard plastic leaf, firehose drapes."
    },
    {
        src: "/Images/CCC/prototype_HDPE.png",
        caption: "In-construction prototype, built using sturdy HDPE plastic and stainless steel, weatherproof fastenings. We narrowed down the module cover selection to just firehose leaves and synthetic rope. Various mirror modules are hidden behind covers."
    }
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
        inraeLink: <a className = 'accent1' href = 'https://www.inrae.fr/' target = '_blank' rel='noreferrer'/>,
        lisnLink: <a className = 'accent1' href = 'https://www.lisn.upsaclay.fr' target = '_blank' rel='noreferrer'/>,
        evagrainLink: <a className = 'accent1' href = 'https://evagrain.hub.inrae.fr/' target = '_blank' rel='noreferrer'/>,
      }}
      hasAbstract = {true}
      linkComponents = {[
        {link: "https://programs.sigchi.org/chi/2025/program/content/194610", icon: GiSlicedBread},
        {link: "https://dl.acm.org/doi/10.1145/3706599.3720102", icon: AiOutlineFilePdf},
        {link: "https://www.khoury.northeastern.edu/chi-2025-khoury-researchers-publish-record-high-papers-for-second-straight-year/", icon: FaRegNewspaper},
      ]}
      images = {imagesParisSaclay}
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
        bigelowLink: <a className = 'accent1' href = "https://www.bigelow.org/" target = '_blank' rel='noreferrer'/>
      }}
      hasAbstract = {true}
      linkComponents = {[
        {link: "/PDFfiles/NARWC_Poster.pdf", icon: GiWhaleTail},
        {link: "https://doi.org/10.1525/elementa.2024.00044", icon: AiOutlineFilePdf},
        {link: "https://github.com/BigelowLab/predicting_NARW", icon: AiFillGithub},
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
                      components={{ tmLink: <a href = "https://www.tidymodels.org/" target = "_blank" rel = "noreferrer" className = "accent1"/> }}
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
                  <a href = "https://github.com/oj713/brickman-walkthrough" target="_blank" rel = "noreferrer"><h3 className = "m-1">Brickman Data Walkthrough<IoMdOpen className = "up"/></h3></a>
                  <p> 
                     { <Trans
                    i18nKey={"projBlock.bigelow.additional.walkthrough.description"}
                    components={{ bLink: <a href = "https://online.ucpress.edu/elementa/article/9/1/00055/116900/Projections-of-physical-conditions-in-the-Gulf-of" target = "_blank" rel = "noreferrer" className = "accent1"/> }}
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
        ialLink: <a className = "accent1" href = "https://www.interactanimallab.com/" target = "_blank" rel="noreferrer"/>
      }}
      hasAbstract = {true}
      linkComponents = {[
        {link: "https://www.interactanimallab.com/publications/colobus-curio-cabinet", icon: GiMirrorMirror},
        {link: "https://doi.org/10.1145/3768539.376855", icon: AiOutlineFilePdf}
      ]}
      images = {ccc_images}
    />

    {/* Back to top */}
    <BackToTop/>
    </div>
    )
}

export default Publications;