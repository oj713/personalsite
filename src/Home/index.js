import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

const Home = () => {
    return (
    <>
    <div className = "mainPane sixty" >
    <div>
        <div className = "hideme" style = {{height: "3em"}}></div>
        <div className = "block background2">
        <div className = "row">
            <div>
                <h1 className = "m-1 pb-0"><b>Omi H. Johnson</b></h1>
                <p className = "m-1"><i>Research technician, software engineer, environmental scientist </i></p>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-sm-none col-md-2"></div>
            <div className = "col-sm-12 col-md-10">
                <p>
                    Welcome to my professional portfolio. As a graduating Bachelor's student in Computer Science and Environmental and Sustainability Studies at Northeastern University, I have benefitted from an intensive curriculum including 7 graduate level courses and over 1.5 years of full-time internships. I have well-rounded expertise in full-stack development, machine learning, and user centric design. Through my professional work experience in research and software, I have published two first-author research papers and developed exceptional skills in communication, problem-solving, and attention to detail. Please use this portfolio to explore my work!
                </p>
                <br/>
                <div>
                    <p className = "text-right text-smaller"><a className = "accent2hover" href = "https://github.com/oj713/personalsite" target = "_blank" rel="noreferrer"><AiFillGithub class = "icon up accent2"/><i> Built with React</i></a></p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className = "bottomCorner d-none d-md-block"><p class="accent2 ps-3 text-smaller"><i>Background: Original forecasts. See <Link to = "/publications#bigelow">Publications</Link>.</i></p></div>
    </>
    )
}

export default Home;