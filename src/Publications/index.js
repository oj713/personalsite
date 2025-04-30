import React from 'react';
import {IoMdOpen} from 'react-icons/io';
import CollapseBar from '../Assets/collapseBar.js';
import {AiFillGithub, AiOutlineFilePdf} from 'react-icons/ai';
import { FaRegNewspaper } from "react-icons/fa6";
import {GiWhaleTail, GiSlicedBread} from 'react-icons/gi';
import ImageGallery from '../Assets/imageGallery.js';
import BackToTop from '../Assets/backToTop.js';
import "./index.css";

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

const Publications = () => {
    return (
    <div className = "mainPane eighty">

    <div style = {{"height":"2vh"}}></div>

    {/* PARIS-SACLAY */}
    <div id = "paris-saclay">
        {/* Header */}
        <p className = "block d-inline-block accent1-bg"><a href = "https://dl.acm.org/doi/10.1145/3706599.3720102" target="_blank" rel="noreferrer">Late-Breaking Work, ACM Computer-Human Interaction (CHI) 2025</a></p>
        <div className = "row">
            <div className = "col-12">
                <h2 className = "mx-0 mt-2 mb-3"><GiSlicedBread className = "up"/> Bridging Modeling and Domain Expertise Through Visualization: A Case Study on Bread-Making with Bayesian Networks</h2>
                <p className = "text-smaller ps-1"><i>Omi H. Johnson, Melanie Munch, Kamal Kansou, Cedric Baudit, Anastasia Bezerianos, Nadia Boukhelifa</i></p>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-sm-none col-md-1"></div>
            <div className = "col-sm-12 col-md-11">
                {/* Description, Abstract */}
                <div className = "block background2">
                <p>
                    What makes a decision support tool effective? How can we ensure that users of a support tool trust the model behind it? In this research, I collaborated with researchers at the <a className = "accent1" href = "https://www.inrae.fr/" target = "_blank" rel="noreferrer">INRAE</a> and <a className = "accent1" href = "https://www.lisn.upsaclay.fr/?lang=en" target = "_blank" rel="noreferrer">LISN</a> labs within Université Paris-Saclay to develop a visualization platform for a Bayesian Network model. We focused our research around the concept of "explainability": enabling non-technical users of the network to understand how decisions are made and the accuracy of the model. Explainability is critical to establish trust and usage of decision support tools, especially complex structures like Bayesian Networks. 
                </p>
                <p>
                    This research was conducted in Spring 2024 as an M1-level internship. I worked to develop a JavaScript-based web visualization platform that leverages D3.js visualizations and customization toggles to portray a Bayesian Network to domain experts. This research was conducted using an <a className = "accent1" href = "https://evagrain.hub.inrae.fr/" target = "_blank" rel="noreferrer">EVAGRAIN</a> Bayesian Network hosted within the pyAgrum.py library. The EVAGRAIN network aims to model the behavior of bread dough as proxy for French wheat quality and climate resilience. To develop the web platform, I conducted an extensive literature review; hosted multiple design sessions with domain expert proxies; and finally led iterative evaluations of the platform with 5 domain experts and 1 Bayesian Network specialist. The resulting platform was well received by experts and uses familiar, interactive visualizations to convey evidence propogation and dataset information. We conclude that the visualizaiton increases explainability for experts and fostered cross-disipline dialogue, with unique considerations for dataset access and complexity.
                </p>
                <CollapseBar title = "Abstract">
                    <p className = "mt-3" style = {{"font-size":".9em"}}> Decision support tools based on Bayesian Networks (BN) are capable of simply representing complex relationships within data. We use a BN network to model bread-dough behavior, reflecting the bread-making process. Such a network must be validated using domain knowledge, but domain experts often lack the necessary statistical backgrounds to understand BNs. We propose a visualization to enable domain experts without technical background to explain and critically analyze the network. Our platform uses familiar visualizations and focuses on interactive evidence propagation, view customization, and access to the underlying dataset as key features to facilitate understanding. Design workshops and a preliminary evaluation with domain experts and BN specialists showed its potential for exploring and validating the model. We report on lessons learned in creating a visualization for making complex models accessible to domain experts, and how its design can foster interdisciplinary dialogue between modelers and domain experts. </p>
                </CollapseBar>
                </div>
                {/* Primary links */}
                <div>
                    <a className="accent2hover" href = "https://programs.sigchi.org/chi/2025/program/content/194610" target="_blank" rel="noopener noreferrer"><p className = "pt-3"><GiSlicedBread className = "icon accent2 up"/> View the official landing page at CHI website. </p></a>
                    <a className = "accent2hover" href = "https://dl.acm.org/doi/10.1145/3706599.3720102" target = "_blank" rel="noreferrer"><p className = "pt-2"><AiOutlineFilePdf className = "icon accent2 up"/> Read the paper for free!</p></a>
                    <a className = "accent2hover" href = "https://www.khoury.northeastern.edu/chi-2025-khoury-researchers-publish-record-high-papers-for-second-straight-year/" target = "_blank" rel="noreferrer"><p className = "pt-2"><FaRegNewspaper className = "icon accent2 up"/> Read the news coverage by Khoury College.</p></a>
                </div>

                <div style = {{"height":"2em"}}></div>

                <ImageGallery images = {imagesParisSaclay}/>
            </div>
        </div>
    </div>

    <div style = {{"height":"5em"}}></div>

    {/* BIGELOW */}
    <div id = "bigelow">
        {/* Header */}
        <p className = "block d-inline-block accent1-bg">In press at <a href= "https://online.ucpress.edu/elementa" target="_blank" rel = "noreferrer"><i>Elementa: Science of the Anthropocene</i></a></p>
        <div className = "row">
            <div className = "col-12">
                <h2 className = "mx-0 mt-2 mb-3"><GiWhaleTail className = "up"/> Suitability of foraging habitat for <i>Eubalaena glacialis</i> under future climate scenarios in the Northwest Atlantic </h2>
                <p className = "text-smaller ps-1"><i>Omi H. Johnson, Stéphane Plourde, Caroline Lehoux, Camille H. Ross, Benjamin Tupper, Christopher D. Orphanides, Harvey J. Walsh, Nicholas R. Record</i></p>
            </div>
        </div>
        <div className = "row mt-2">
        <div className = "col-sm-none col-md-1"></div>
        <div className = "col-sm-12 col-md-11">
                {/* Description, Abstract*/}
                <div className = "block background2">
                <p> 
                    Machine learning can be a powerful tool to anticipate and counteract rapid phenomena like climate change. In the case of the critically endangered North Atlantic Right Whale (<i>Eubalaena Glacialis</i>), recent climate shifts in the Gulf Stream have disrupted historical foraging patterns and challenged conservation tactics. In this research, conducted within the <a className = "accent1" target="_blank" rel="noreferrer" href = "https://www.bigelow.org/">Bigelow Laboratory of Ocean Sciences</a>, we sought to leverage boosted regression trees and modeled environmental covariates to predict <i>E. glacialis</i> foraging suitability for 2055 and 2075. This research is unique in that it covers the entire, cross-boundary foraging range of <i>E. glacialis</i> at a finely detailed 1/12° resolution. The research also leverages a bioenergetics-threshold approach to deliver more insightful predictions based on multiple prey species. This research can be used to inform survey effort and help protect <i>E. glacialis</i> from anthropogenic threats such as ship strikes and entanglement in fishing gear.
                </p>
                <p>
                    This research began as an internship project in Spring 2022 and continued part-time through Spring 2025. To reach the finished paper, I built 100+ experimental models in R using a variety of modeling algorithms such as GAMs, Neural Networks, Random Forests, and GLMs to determine an optimal algorithm. I also developed a comprehensive, modular modeling pipeline to easily facilitate version creation and plot generation. The final forecasts are based on two independent, 100-fold boosted regression tree models representing the two most abundant prey species in the region, <i>Calanus finmarchicus</i> and <i>C. hyperboreus</i>. The completed models displayed high performance, with AUCs &gt; 90%. The research manuscript, now in press at <i>Elementa: Science of the Anthropocene</i>, thoughtfully details results such as model performance, caveats like overfitting and spatial autocorrelation, final forecast results, and implications for right whale conservation.
                </p>
                <p className = "text-smaller pt-3">
                    <i>This work has been presented at the 2022 Ecological Forecasting Initiative Conference; the 2024 Northeastern University RISE Conference; and the 2024 North Atlantic Right Whale Consortium</i>
                </p>
                <CollapseBar title = "Abstract">
                    <p className = "mt-3" style = {{"font-size":".9em"}}> The critically endangered North Atlantic right whale (<i>Eubalaena glacialis</i>) faces significant anthropogenic mortality. Recent climatic shifts in traditional habitats have caused abrupt changes in right whale distributions, challenging traditional conservation strategies. Tools that can help anticipate new areas where <i>E. glacialis</i> might forage could inform proactive management. In this study, we trained boosted regression tree algorithms with fine-resolution modeled environmental covariates to build prey copepod (<i>Calanus</i>) species-specific models of historical and future distributions of <i>E. glacialis</i> foraging habitat on the northwest Atlantic shelf, from the Mid-Atlantic Bight to the Labrador Shelf. We determined foraging suitability using <i>E. glacialis</i> foraging thresholds for <i>Calanus</i> spp. adjusted by a bathymetry-dependent bioenergetic correction factor based on known foraging behavior constraints. Models were then projected to 2046&#45;2065 and 2066&#45;2085 modeled climatologies for representative concentration pathway scenarios RCP 4.5 and RCP 8.5 with the goal of identifying potential shifts in foraging habitat. The models had generally high performance (area under the receiver operating characteristic curve &gt; 0.9) and indicated ocean bottom conditions and bathymetry as important covariates. Historical (1990&#45;2015) projections aligned with known areas of high foraging habitat suitability as well as potential suitable areas on the Labrador Shelf. Future projections suggested that the suitability of potential foraging habitat would decrease in parts of the Gulf of Maine and southwestern Gulf of Saint Lawrence, while potential habitat would be maintained or improved on the western Scotian Shelf, in the Bay of Fundy, on the Newfoundland and Labrador shelves, and at some locations along the continental shelf breaks. Overall, suitable habitat is projected to decline. Directing some survey efforts towards emerging potential foraging habitats can enable conservation management to anticipate the type of distribution shifts that have led to high mortality in the past.  </p>
                </CollapseBar>
                </div>
                {/* Primary links */}
                <div>
                    <a className="accent2hover" href = "/PDFfiles/NARWC_Poster.pdf" target="_blank" rel="noopener noreferrer"><p className = "pt-3"><GiWhaleTail className = "icon accent2 up"/> Download the poster presented at the North Atlantic Right Whale Consortium 2024.</p></a>
                    <a className="accent2hover" href = "https://github.com/BigelowLab/predicting_NARW" target = "_blank" rel = "noopener noreferrer"><p className = "pt-2"><AiFillGithub className = "icon accent2 up"/> View the source code on GitHub. </p></a>
                    <p className = "pt-2"><AiOutlineFilePdf className = "icon accent2 up"/> Since this piece is in press, the manuscript is not yet available.</p>
                </div>

                {/* Image Gallery */}
                <div style = {{"height":"3em"}}></div>

                <ImageGallery images = {imagesBigelow}/>

                {/* Related Work */}
                <div style = {{"height":"3em"}}></div>

                <h2 className = "mx-0 mt-2 mb-3">Related Projects</h2>
                <div>
                    <div className = "block accent2-bg">
                        <a href = "https://oj713.github.io/tidymodels/" target="_blank" rel = "noreferrer"><h3 className = "m-1">Tidymodels Tutorial Website<IoMdOpen className = "up"/></h3></a>
                        <p> A website thoroughly detailing the capabilities of <a href = "https://www.tidymodels.org/" target = "_blank" rel = "noreferrer" className = "accent1">Tidymodels</a>, a set of R modeling packages designed to increase modularity and align modeling paradigms with "tidy" data principles. This package was instrumental in the development of my modeling pipeline. The walkthrough is built using RMarkdown and is specialized for ecological forecasting, including thorough coding examples and links to outside resources. </p>
                    </div>
                    <div className="block right-whale-bg mt-3">
                      <div className="overlay"></div>
                      <div className="content">
                        <a href="https://arcg.is/1CzLOC0" target="_blank" rel="noreferrer">
                          <h3 className="m-1">
                            Saving the North Atlantic Right Whale <IoMdOpen className="up" />
                          </h3>
                        </a>
                        <p>
                          What does it mean to save the North Atlantic right whale? How does
                          reducing ship strike collisions and fishing gear entanglements
                          complicate the work of other industries in the Gulf of Maine? In this
                          ArcGIS StoryMap, I use peer-reviewed sources and current events news to
                          construct a narrative about effective strategies for right whale
                          conservation, recent protests from the American Lobster Industry, and
                          technological innovations driving the story forward. Forecasts like my
                          published research are just one piece of the puzzle.
                        </p>
                      </div>
                    </div>
                    <div className = "block accent2-bg mt-3">
                        <a href = "https://github.com/oj713/brickman-walkthrough" target="_blank" rel = "noreferrer"><h3 className = "m-1">Brickman Data Walkthrough<IoMdOpen className = "up"/></h3></a>
                        <p> My research relies on modelled environmental covariates sourced from <a href = "https://online.ucpress.edu/elementa/article/9/1/00055/116900/Projections-of-physical-conditions-in-the-Gulf-of" target = "_blank" rel = "noreferrer" className = "accent1">Brickman et al. 2021</a>, which features 1/12°, high-resolution projections of key covariates across the Northern Atlantic. This dataset has plenty of potential beyond my own work for use in other ecological forecast scenarios. This walkthrough presents a set of prepackaged functions and clear explanations for how anyone with a presence/absence dataset can build their own high resolution forecasts using the Brickman covariates. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Back to top */}
    <BackToTop/>
    </div>
    )
}

export default Publications;