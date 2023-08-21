import React from 'react';

const Home = () => {
    return (
    <>
    <div className = "mainPane sixty" >
    <div>
        <div className = "row">
            <div className = "col-10">
                <h3>Advanced Writing in the Disciplines</h3>
                <h1 className = "m-1">Omi Johnson</h1>
            </div>
            <div className = "col-2"></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "background2 block col-10">
                <p>Welcome to my professional writing portfolio! My name is Omi Johnson and I'm a fourth-year Computer and Environmental Science major at Northeastern University. I'm passionate about developing intuitive, efficient software applications and thinking about complex problems from multiple perspectives. My backgrounds in climate activism and environmental research drive an interest in sustainability and green tech which I hope to apply to future careers. I have significant work experiences in ecological forecasting, teaching, and quality testing for iOS engineering. This site collates some of my significant pieces from my academic career -- please use the tabs in the top right corner to explore my work. Enjoy!</p>
                <br/>
                <div>
                    <p className = "text-right"><i>Source code for this website on my <a className = "orange" target="_blank" href="https://github.com/oj713/personalsite">GitHub.</a></i></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className = "bottomCorner"><p class="yellow ps-4"><i>Background image: 2075 forecasts of</i> E. glacialis <i>habitat suitability in the Northeast Atlantic. See <a className = "white"href="/bigelow">Bigelow.</a></i></p></div>
    </>
    )
}

export default Home;