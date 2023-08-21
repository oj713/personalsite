import React from 'react';
import {IoMdOpen} from 'react-icons/io';
import {GoTriangleDown} from 'react-icons/go';
import {AiOutlineFilePdf, AiOutlineDownload} from 'react-icons/ai';

const Forecasting = () => {
    return (
    <div className = "mainPane eighty">
    <div>
        {/* Bigelow Paper */}
        <div className = "row">
            <div className = "col-1"></div>
            <div className = "col-9">
                <p><i>ENGW 3315: Advanced Writing in the Disciplines</i></p>
                <h2 className = "m-1">Ecological Forecasting for Meaningful Change</h2>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "col-8">
                <div className = "block background2">
                <p>In the class ENGW 3315: Advanced Writing in the Disciplines, I took the prompt to "explore my discipline" as an opportunity to learn more about forecasting as a field. I wanted to understand how work like mine can positively impact ecosystems and communities. I discovered that while ecological forecasting has incredible potential for environmental decision-making, many forecasts published today don't have meaningful societal impact. In these pieces I examine what "useful" forecasting means and how we can achieve it.</p>
                <a class="block orange-bg d-flex justify-content-between" data-bs-toggle="collapse" href="#litReview">Literature Review
                <GoTriangleDown className = "arrow-icon"/></a>
                <div id="litReview" class="collapse">
                    <p className = "mt-3" style = {{"font-size":".9em", "text-indent": "2em"}}> For the Literature Review component of this project, I collected 15+ academic sources that discuss "useful" forecasting and science. These sources came from a range of disciplines such as finance, psychology, and environmental science and included both new studies and landmark papers. I looked through these sources for common themes and emerging concepts in ecological forecasting as a field. I then synthesized these new directions and case studies into a comprehensive literature review. </p>
                </div>
                <a class="block yellow-bg d-flex justify-content-between mt-3 mb-1" data-bs-toggle="collapse" href="#publicAudience">Public Audience Project
                <GoTriangleDown className = "arrow-icon"/></a>
                <div id="publicAudience" class="collapse">
                    <p className = "mt-3" style = {{"font-size":".9em", "text-indent": "2em"}}> For the Public Audience Project, we were tasked with transforming our Literature Review into a piece for a public audience. I used my insights from the review to devise a list of established and developing features of useful ecological forecasts. I then created a research poster presenting these features, with brief explanations for each feature and selected case studies. This poster could be displayed in a research lab or conference and serve as a continual reminder of what ecological forecasting research should strive for. </p>
                </div>
                </div>
                <a href = "/PDFfiles/literatureReview.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="d-flex justify-content-between p-2 mt-2">
                       <span><AiOutlineFilePdf className = "up orange icon"/> Literature Review.pdf</span>
                       <span><AiOutlineDownload className = "up orange icon"/></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div style={{"height":"10vh"}}></div>
    <div className = "pdf-container text-center">
        <iframe title = "Public Audience Project" src = "/PDFfiles/publicAudience.pdf">
            This browser does not support PDFs. Please download the file instead. 
        </iframe>
    </div>
    <div style = {{"height":"10vh"}}></div>
    </div>
    )
}

export default Forecasting;