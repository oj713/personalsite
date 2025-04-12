import React from 'react';

const Contact = () => {
    return (
    <div className = "mainPane sixty" >
    <div>
        <div className = "row">
            <div className = "col-10">
                <h1><b>Contact</b></h1>
            </div>
            <div className = "col-2"></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "background2 block col-10">
                <p>
                    Email:<a className = "accent2"> johnson.omi@northeastern.edu</a>
                    <br/>
                    <br/>
                    LinkedIn:<a target="_blank" href = "https://www.linkedin.com/in/omi-johnson/" className = "accent1"> https://www.linkedin.com/in/omi-johnson/</a>
                    <br/>
                    <br/>
                    GitHub: <a target="_blank" href = "https://github.com/oj713" className = "accent2">https://github.com/oj713</a>
                </p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Contact;