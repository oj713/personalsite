import React from 'react';
import Download from '../Assets/download.js';
import {GoTriangleDown} from 'react-icons/go';
import {AiOutlineFilePdf, AiOutlineDownload} from 'react-icons/ai';

const Resume = () => {
    return (
    <div className = "mainPane eighty">
    <div>
        <div style = {{"height":"2vh"}}></div>
        <a href = "/PDFfiles/OJohnson_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="d-flex justify-content-between background2 rounded p-2 mt-2">
               <span><AiOutlineFilePdf className = "up orange icon"/> Resume_OJohnson.pdf</span>
               <span><AiOutlineDownload className = "up orange icon"/></span>
            </div>
        </a>
        {/* Education */}
        <div style = {{"height":"4vh"}}></div>
        <div className = "row">
            <div className = "col"><h2 className = "m-1" style = {{"font-size":"2em"}}>Education</h2></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-1"></div>
            <div className = "col-9">
                <div className = "block background2">
                <div class="yellow-bg block mb-3 d-flex justify-content-between">
                    <span><b>Northeastern University</b> <i>Boston, MA</i></span>
                    <span>Sept 2020 - May 2025</span>
                </div>
                <p><i>Candidate for Bachelor of Science in Computer Science and Environmental Studies
                    <br/>Minor in Interaction Design</i></p>
                <br/>
                <strong>Relevant Courses:</strong>
                <p>Database Management Systems (Graduate) | Geographic Information Systems (Graduate) | Foundations of Software Engineering (Graduate) | Web Development (Graduate) | Oceanography | Algorithms and Data | Object Oriented Design</p>
                <br/>
                <strong>Honors:</strong>
                <p>GPA: 3.95/4.0 | Honors Scholarship | Dean's List</p>
                </div>
            </div>
        </div>
        <div style = {{"height":"2vh"}}></div>
        {/* Technical Knowledge */}
        <div style = {{"height":"2vh"}}></div>
        <div className = "row">
            <div className = "col-2"></div>
            <div className = "col">
                <h2 className = "m-1" style = {{"font-size":"2em"}}>Technical Knowledge</h2>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-3"></div>
            <div className = "col-9">
                <div className = "block background2">
                <strong>Languages:</strong>
                <p>R | HTML/CSS/JavaScript | Python | SQL | D | Java | C++ | Swift</p>
                <br/>
                <strong>Frameworks/Libraries:</strong>
                <p>Tidymodels | React.js | Node.js | Redux | Mongoose | Bootstrap</p>
                <br/>
                <strong>Databases/Software</strong>
                <p>Git/GitHub | ArcGIS | MySQL | MongoDB | Figma | Adobe Suite</p>
                <br/>
                <strong>IDEs:</strong>
                <p>Microsoft Visual Studio | RStudio | XCode | Eclipse | JetBrains Suite</p>
                </div>
            </div>
        </div>
        <div style = {{"height":"2vh"}}></div>
        {/* Work Experience */}
        <div style = {{"height":"2vh"}}></div>
        <div className = "row">
            <div className = "col"><h2 className = "m-1" style = {{"font-size":"2em"}}>Work Experience</h2></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-1"></div>
            <div className = "col-11">
                <div className = "block background2">
                <div class="orange-bg block mb-3 d-flex justify-content-between">
                    <span><b>Bigelow Laboratory for Ocean Sciences</b> <i>East Boothbay, ME</i></span>
                    <span>Feb 2022 - Present</span>
                </div>
                <i>Research Technician</i>
                <ul className = "mt-4">
                    <li>Conducting research forecasting North Atlantic Right Whale habitats for future climate scenarios in R</li>
                    <li>Transformed and integrated zooplankton and IPCC environmental datasets in 4 file formats to derive input
                    modeling datasets for 2 prey species with 20K data points each</li>
                    <li> Built 100+ experimental prey distribution models using Tidymodels in R with 4+ ML engines such as boosted regression trees (BRTs), neural networks, and generalized linear models, achieving AUCs {'>'} 90% </li>
                    <li> Authoring research paper on findings using original analyses and visualizations of final BRT ensemble models, whose results can inform future whale survey effort and modeling </li>
                    <li> Investigated Tidymodels modeling package for general lab use and created RMarkdown website and GitHub demo repository with comprehensive tutorials</li>
                </ul>

                <div class="yellow-bg block mb-3 mt-5 d-flex justify-content-between">
                        <span><b>Northeastern University</b> <i>Boston, MA</i></span>
                        <span>Aug 2022 - Present</span>
                    </div>
                    <i>Teaching Assistant, Lead Teaching Assistant for CS 1210: Professional Development for Co-op</i>
                    <ul className = "mt-4">
                        <li>Support and advise computer science undergraduates during their first co-op job search</li>
                        <li>Offer direction and vision for 13 sections and 28 course TAs through weekly announcements and
                        management of TA Microsoft Teams channel</li>
                        <li>Identify strengths and weaknesses in TA support and course curriculum and brainstorm improvements</li>
                        <li>Evaluate resume drafts and host 1:1 sessions with 10+ students to walk through suggestions </li>
                        <li>Lead resume reviews, mock interviews, workshops, and panels on the co-op experience</li>
                        <li>Work with co-op advisors, section instructor, and co-TA on lesson plans and responsibilities</li>
                    </ul>

                    <div class="orange-bg block mb-3 mt-5 d-flex justify-content-between">
                        <span><b>Ginger Labs</b> <i>San Francisco, CA</i></span>
                        <span>Jan - Aug 2023</span>
                    </div>
                    <i>Quality Assurance Engineer Co-op</i>
                    <ul className = "mt-4">
                        <li>Quality tested beta versions for top-rated iOS note-taking app Notability with 10+ million active users</li>
                        <li>Performed experimental and regression tests on Swift and Objective-C based app using TestFlight, TestRail,
                        and XCode simulators</li>
                        <li>Co-led testing effort for massive app redesign project, personally catching 200+ issues (50+ release blockers)
                        and processing external and internal feedback</li>
                        <li>Wrote comprehensive bug and improvement tickets on GitHub with clear reproduction steps</li>
                        <li>Managed 3000+ beta testers and reported feedback via beta email address and App Store Connect</li>
                        <li>Coordinated with product, engineering, design, and support teams on issue details, prioritization, PR testing,
                        design feedback, and user workarounds</li>
                    </ul>
                </div>
            </div>
        </div>
        <div style = {{"height":"2vh"}}></div>
        {/* Interests */}
        <div style = {{"height":"2vh"}}></div>
        <div className = "row">
            <div className = "col"><h2 className = "m-1" style = {{"font-size":"2em"}}>Interests</h2></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-1"></div>
            <div className = "col">
                <div className = "block background2">
                <p>Ecological Forecasting | Physical Oceanography | Data Analysis | Rock Climbing | Longboarding | Fiber Arts</p>
                </div>
            </div>
        </div>
    </div>
    <div style = {{"height":"2vh"}}></div>
    <div className = "text-center" style = {{"height":"10vh"}}>
        <br/>
        <a className="yellowhover" href = "#">Back to Top</a>
    </div>
    </div>
    )
}

export default Resume;