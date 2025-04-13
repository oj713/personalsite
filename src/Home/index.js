import React from 'react';

const Home = () => {
    return (
    <>
    <div className = "mainPane sixty" >
    <div>
        <div style={{"height": "3em"}}></div>
        <div className = "row">
            <div className = "col-10">
                <h1 className = "m-1 pb-0"><b>Omi H. Johnson</b></h1>
                <p className = "m-1"><i>Research technician, software engineer, environmental scientist </i></p>
            </div>
            <div className = "col-2"></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "background2 block col-10">
                <p>
                    Welcome to my professional portfolio. As a graduating Bachelor's student in Computer Science and Environmental and Sustainability Studies at Northeastern University, I have benefitted from an intensive curriculum including 7 graduate level courses and over 1.5 years of full-time internships. I have well-rounded expertise in full-stack development, machine learning, and user centric design. Through my professional work experience in research and software I have published two first-author research papers and developed exceptional skills in communication, problem-solving, and attention to detail. Please use this portfolio to explore my work!
                </p>
                <br/>
                <div>
                    <p className = "text-right text-smaller"><i>Source code for this website on my <a className = "accent2" target="_blank" href="https://github.com/oj713/personalsite">GitHub.</a></i></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className = "bottomCorner"><p class="accent1 ps-3 text-smaller"><i>Background: Original forecasts.</i></p></div>
    </>
    )
}

export default Home;