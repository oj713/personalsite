import React from 'react';
import {IoMdOpen} from 'react-icons/io';
import {GoTriangleDown} from 'react-icons/go';
import {AiOutlineFilePdf, AiOutlineDownload} from 'react-icons/ai';

const Bigelow = () => {
    return (
    <div className = "mainPane eighty">
    <div>
        <div style = {{"height":"2vh"}}></div>
        {/* Bigelow Paper */}
        <div className = "row">
            <div className = "col-9">
                <p><i>Bigelow Laboratory of Ocean Sciences</i></p>
                <h2 className = "m-1">Predicting novel <i>E. glacialis</i> foraging habitat for future climate scenarios on the Northeast Atlantic Shelf</h2>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-1"></div>
            <div className = "col-8">
                <div className = "block background2">
                <p>I am currently employed as a research technician at the Tandy Center of Ocean Forecasting, a lab within the Bigelow Laboratory of Ocean Sciences. I'm using R and machine learning algorithms to build forecasts of suitable North Atlantic Right Whale feeding habitats in the years 2055 and 2075. The North Atlantic Right Whale (<i>E. glacialis</i>) is a critically endangered whale species, with less than 350 individuals left in the wild. Recent climate shifts in the Gulf of Maine have triggered changes in right whale feeding patterns, challenging traditional conservation tactics. My research uses abundance data of right whale prey species (<i>C. finmarchicus</i> and <i>C. hyperboreus</i>) and fine-resolution environmental covariates to build models predicting future suitable feeding habitat. These forecasts can be used to inform survey effort and further modeling. See below for a December 2022 draft of my research. Since this draft was published, I've introduced additional improvements such as ensemble modeling techniques and non-linear threshold calculations.</p>
                <a class="block background3 d-flex justify-content-between" data-bs-toggle="collapse" href="#bigelowAbstract">Abstract
                <GoTriangleDown className = "arrow-icon"/></a>
                <div id="bigelowAbstract" class="collapse">
                    <p className = "mt-3" style = {{"font-size":".9em", "text-indent": "2em"}}> The critically endangered North Atlantic right whale (<i>Eubalaena glacialis</i>) faces significant anthropogenic mortalities and has been the focus of a variety of conservation efforts and legal battles. Recent climate shifts in the Gulf Stream have caused unpredictability in right whale distributions and created challenges for traditional management techniques. Early warnings of emerging <i>E. glacialis</i> habitat can help with proactive management and potentially avoid significant mortality events. <i>E. glacialis</i> primarily feeds on aggregations of <i>Calanus</i> spp. dense enough to meet bioenergetic requirements. Predicting distributions of <i>Calanus</i> spp. feeding habitats during future climate scenarios will reveal insight into future<i> E. glacialis </i>distribution shifts. In this study, we trained boosted regression tree modeling algorithms with <i>C. finmarchicus </i>and <i>C. hyperboreus </i>feeding habitat data and monthly environmental covariates to build species-specific models of present and future habitat distributions on the northeast American shelf between the Mid-Atlantic Bight and Labrador Shelf. Present-day feeding habitat data was derived by comparing species abundance data from U.S. and Canadian shelf areas to a depth-varying critical bioenergetic threshold for <i>E. glacialis</i>. Environmental covariates were sourced from fine-resolution, modeled projections of the North Atlantic and included monthly measurements of bathymetry, mixed layer depth, sea surface temperature and salinity, bottom water temperature and salinity, and current velocity. The trained models were then projected to the years 2055 and 2075 for representative concentration pathway (RCP) 4.5 and 8.5 management scenarios to examine new and lost feeding habitats relative to present day. The models had generally high performance (AUC {`>`} .9) and indicated bottom temperature and mixed layer depth as important covariates. Present-day projections correlated to known areas of high habitat suitability, as well as additional areas on the Labrador Shelf and Flemish Cap. Future projections indicated decreased habitat suitability in the Gulf of Maine and areas in the Gulf of Saint Lawrence, with retained and increased suitability in the Scotian Shelf, Newfoundland and Labrador Shelves, and the Flemish Cap. Directing some survey efforts towards emerging foraging habitats can enable conservation management to anticipate distribution shifts that have led to high mortality in the past. </p>
                </div>
                </div>
                <a href = "/PDFfiles/SemesterPaper.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="d-flex justify-content-between p-2 mt-2">
                       <span><AiOutlineFilePdf className = "up accent2 icon"/> Predicting novel <i>E. glacialis</i> foraging habitat.pdf</span>
                       <span><AiOutlineDownload className = "up accent2 icon"/></span>
                    </div>
                </a>
            </div>
        </div>
        {/* Tidymodels Tutorial */}
        <div className = "row mt-5">
            <div className = "col-5">
            </div>
            <div className = "col-7">
                <a href = "https://oj713.github.io/tidymodels/" target="_blank"><h2 className = "m-1">Tidymodels Tutorial Website<IoMdOpen className = "up"/></h2></a>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-6"></div>
            <div className = "block accent1-bg col-6">
                <p>Part of my research work at Bigelow was to explore the capabilities of a set of R modeling packages called <a href = "https://www.tidymodels.org/" target = "_blank" className = "accent2">Tidymodels</a>. This relatively new set of packages aims to simplify the modeling process by providing tools to streamline data preparation and a common interface for a variety of modeling engines. The website was built using RMarkdown and provides a comprehensive walkthrough of each Tidymodels package, complete with thorough coding examples and further resources.</p>
            </div>
        </div>
        {/* Brickman Walkthrough */}
        <div className = "row mt-5">
            <div className = "col-5">
                <a href = "https://github.com/oj713/brickman-walkthrough" target="_blank"><h2 className = "m-1">Brickman Data Walkthrough<IoMdOpen className = "up"/></h2></a>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-1"></div>
            <div className = "block accent2-bg col-6">
                <p>One distinguishing factor of my research is the scale and resolution of my predictions. Most predictions of <i>Calanus</i> spp. or Right Whale habitat only consider small areas of the coast or are at low resolution. My research uses 1/12 degree, downscaled environmental covariates from <a href = "https://online.ucpress.edu/elementa/article/9/1/00055/116900/Projections-of-physical-conditions-in-the-Gulf-of" target = "_blank" className = "accent1">Brickman et al. 2021</a> to generate detailed predictions across the entire Northeast Atlantic Shelf. To allow other modelers at my lab to use this dataset, I built a comprehensive walkthrough in GitHub using complete example code, explanations, and helper methods.</p>
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

export default Bigelow;