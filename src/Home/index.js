import React from 'react';

const Home = () => {
    return (
    <>
    <div className = "mainPane sixty" >
    <div>
        <div style={{"height": "3em"}}></div>
        <div className = "row">
            <div className = "col-10">
                <h1 className = "m-1"><b>Omi Johnson</b></h1>
            </div>
            <div className = "col-2"></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "background2 block col-10">
                <p>Welcome to my professional portfolio! My name is Omi and I'm a fourth-year Computer and Environmental Science major at Northeastern University. I'm passionate about developing intuitive, efficient software applications and thinking about complex problems from user and data-focused perspectives. My backgrounds in climate activism and environmental research drive an interest in sustainability and green tech which I hope to apply to future careers. I have significant work experience in ecological forecasting, teaching, and quality assurance for iOS. This site collates some major pieces from my academic career — please use the tabs in the top right corner to explore my work. Enjoy!</p>
                <br/>
                <div>
                    <p className = "text-right"><i>Source code for this website on my <a className = "accent2" target="_blank" href="https://github.com/oj713/personalsite">GitHub.</a></i></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className = "bottomCorner"><p class="accent1 ps-3"><i>Background: Original forecasts.</i></p></div>
    </>
    )
}

export default Home;