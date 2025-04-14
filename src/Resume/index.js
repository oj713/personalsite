import React from 'react';
import PdfDownload from '../Assets/pdfDownload';
import {GiWhaleTail, GiSlicedBread} from 'react-icons/gi';
import BackToTop from '../Assets/backToTop';
import { Link } from 'react-router-dom';
import "./index.css";

const techKnowledge = [
    {
        title: "Languages",
        content: "R | HTML/CSS/JavaScript | Python | SQL | D | Java | C++ | Swift"
    },
    {
        title: "Frameworks/Libraries",
        content: "D3.js | React.js | Node.js | pyAgrum.py | Redux | Mongoose | Bootstrap"
    },
    {
        title: "Databases/Software",
        content: "Git/GitHub | MySQL | MongoDB | ArcGIS | Adobe Suite"
    },
    {
        title: "IDEs",
        content: "Microsoft Visual Studio | RStudio | XCode | Eclipse | JetBrains Suite"
    }
]

const Resume = () => {
    return (
    <div className = "mainPane eighty">
        <div className = "background2 block p-0">
        <PdfDownload filepath = "/PDFfiles/OJohnson_CV_Resume.pdf">Omi H. Johnson CV/Resume Download </PdfDownload>
        </div>

        {/* Education */}
        <div style = {{"height":"2em"}}></div>
        <div>
            <div className = "row">
                <div className = "col"><h2 className = "m-1">Education</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "d-none d-md-block col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                <div className="block background2"> 
                    <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                        <div>
                            <h4>Northeastern University,</h4>
                            <span class="location-text"> Boston, Massachusetts, USA</span>
                            <p><i>Bachelor of Science in Computer Science and Environmental and Sustainability Studies</i></p>
                        </div>
                        <div class="vertcenter text-right text-md-end mt-2 mt-md-0">April 2025</div>
                    </div>
 
                    <br/>
                    <div class="row category_row">
                        <div className = "col-sm-12 col-md-3">
                            <p className = "location-text">Relevant Coursework:</p>
                        </div>
                        <div className = "col-sm-12 col-md-9">
                            <p> Web Development (graduate) | Software Engineering (graduate) | Database Management Systems (graduate) | Advanced Biostatistics (graduate) | Algorithms and Data | Animal-Computer Interaction | Object Oriented Design | Experience and Interaction | Typography | Technology and the Blue Economy (graduate)
                            </p>    
                        </div>
                    </div>
                    <div class="row category_row">
                        <div className = "col-sm-12 col-md-3">
                            <p className = "location-text">Honors:</p>
                        </div>
                        <div className = "col-sm-12 col-md-9">
                            <p><strong>GPA: 3.96 / 4.0</strong> | Honors Scholarship | Dean's List </p>    
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* Technical Knowledge */}
        <div style = {{"height":"2em"}}></div>
        <div>
            <div className = "row">
                <div className = "col"><h2 className = "m-1">Technical Knowledge</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                    <div className = "col-sm-12 col-md-11">
                    <div className="block background2">
                    {
                        techKnowledge.map((item, index) => (
                            <div class="row category_row">
                                <div className = "col-sm-12 col-md-3">
                                    <p className = "location-text">{item.title}:</p>
                                </div>
                                <div className = "col-sm-12 col-md-9">
                                    <p> {item.content}</p>    
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    </div>
            </div>
        </div>
        
        {/* Work Experience */}
        <div style = {{"height":"2em"}}></div>
        <div>
            <div className = "row">
                <div className = "col"><h2 className = "m-1" style = {{"font-size":"2em"}}>Research & Work Experience</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                <div className="block background2">
                    <div>
                        <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                            <div>
                                <h4>Bigelow Laboratory of Ocean Sciences,</h4> <span className = "location-text"> East Boothbay, Maine, USA</span>
                                <p><i>Research Technician</i></p>
                            </div>
                            <div className = "vertcenter text-right text-md-end mt-2 mt-md-0"><p>February 2022 - <i>Present</i></p></div>
                        </div>
                        <br/>
                        <div>
                            <Link className = "accent2hover" to = "/publications#bigelow"> <GiWhaleTail className = "icon accent2 up"/> Published Work! See <i>Publications</i>.</Link>
                        </div>
    
                        <ul className="mt-3">
                        <li>Forecasted North Atlantic Right Whale foraging habitat suitability using a bioenergetics-based approach across the species' cross-boundary foraging range for 2055 and 2075 climate scenarios</li>
                        <li>Integrated zooplankton and environmental datasets to derive two species-specific modeling datasets with 20K data points each</li>
                        <li>Built 100+ experimental prey distribution models using Tidymodels in R with 4+ ML engines such as boosted regression trees (BRTs), neural networks, and generalized linear models, achieving AUCs &gt; 90%</li>
                        <li>Developed original visualizations in <i>ggplot2</i> illustrating model projections, key habitat shifts, and model performance</li>
                        <li>First author on research paper detailing final cross-validated BRT ensemble projections, model performance, uncertainty sources, and conservation implications for Right Whale management</li>
                        </ul>
                    </div>
    
                    <br/>
    
                    <div>
                        <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                            <div>
                                <h4>INRAE/LISN at Université Paris-Saclay,</h4> <span className = "location-text"> Orsay, France</span>
                                <p><i>M1 Research Intern</i></p>
                            </div>
                            <div className = "vertcenter text-right text-md-end mt-2 mt-md-0"><p>April - August 2024</p></div>
                        </div>
                        <br/>
                        <div>
                            <Link className = "accent2hover" to = "/publications#paris-saclay"> <GiSlicedBread className = "icon accent2 up"/> Published Work! See <i>Publications</i>.</Link>
                        </div>
    
                        <ul className="mt-3">
                          <li>Designed and developed an explainable web visualization platform for decision-support, visualizing a bread-making Bayesian network linking 25 sensory and quantitative metrics</li>
                          <li>Conducted literature review and led four expert brainstorming workshops to assess design requirements</li>
                          <li>Implemented full-stack web application using JavaScript (React, Node.js) and D3.js for interactive network visualizations, integrated with backend Bayesian data in pyAgrum.py via a Python Flask server</li>
                          <li>Enabled click-based evidence propagation and incorporated design elements, animations, dynamic thresholds, exposed data composition, and customization toggles to enhance user comprehension</li>
                          <li>Led iterative prototype demos with six domain experts, receiving extremely positive feedback on usability and clarity</li>
                        </ul>
                    </div>
    
                    <br/>
    
                    <div>
                        <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                            <div>
                                <h4>Northeastern University,</h4> <span className = "location-text"> Boston, Massachusetts, USA</span>
                                <p><i>Lead Teaching Assistant, Professional Development</i></p>
                            </div>
                            <div className = "vertcenter text-right text-md-end mt-2 mt-md-0"><p>August - December 2024</p></div>
                        </div>
    
                        <ul className="mt-3">
                          <li>Supported and advised computer science undergraduates during their first co-op job search through one-on-one sessions, resume reviews, and mock interviews</li>
                          <li>Led workshops and panels on the co-op experience, offering practical guidance and peer insights</li>
                          <li>Directed and communicated with 13 sections and 28 course TAs via weekly announcements and management of the TA Microsoft Teams channel</li>
                          <li>Collaborated with co-op advisors, section instructor, and co-TA to develop lesson plans and coordinate responsibilities</li>
                          <li>Identified strengths and weaknesses in TA support and course curriculum and brainstormed improvements for future iterations</li>
                        </ul>
                    </div>
    
                    <br/>
    
                    <div>
                        <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                            <div>
                                <h4>Ginger Labs,</h4> <span className = "location-text"> San Francisco, California, USA</span>
                                <p><i>Quality Assurance Co-op</i></p>
                            </div>
                            <div className = "vertcenter text-right text-md-end mt-2 mt-md-0"><p>January - August 2023</p></div>
                        </div>
    
                        <ul className="mt-3">
                          <li>Quality tested beta versions of Notability, a top-rated iOS note-taking app with 10+ million active users</li>
                          <li>Performed experimental and regression testing on the Swift-based app using TestFlight and Xcode simulators</li>
                          <li>Co-led testing for a major app redesign, identifying 200+ issues including 50+ release blockers, and processing feedback from internal and external sources</li>
                          <li>Managed 3,000+ beta testers and reported user feedback through beta support channels and App Store Connect</li>
                          <li>Collaborated with product, engineering, design, and support teams on issue tracking, prioritization, pull request testing, design iterations, and user workaround documentation</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* Interests */}
        <div style = {{"height":"2em"}}></div>
        <div>
            <div className = "row">
                <div className = "col"><h2 className = "m-1">Interests</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                <div className="block background2">
                    French (CEFR B1/B2) | Data Visualization | Full-Stack Development | Sustainability | Bouldering
                </div>
                </div>
            </div>
        </div>

        <BackToTop/>
                
    </div>
    )
};

export default Resume;