import React from 'react';
import {AiOutlineFilePdf, AiOutlineDownload} from 'react-icons/ai';

const Narrative = () => {
    return (
    <div className = "mainPane sixty" >
    <div>
        <div className = "row">
            <div className = "col-10">
                <h2 className = "m-1" style = {{"font-size":"2em"}}>About Me: Literary Narrative</h2>
            </div>
            <div className = "col-2"></div>
        </div>
        <div className = "row mt-2">
            <div className = "col-2"></div>
            <div className = "col-10">
                <div className = "yellow-bg block pb-1"><p>I've had a complex academic path to get to where I am today and it's been littered with pitfalls and hesitations. In the Literary Narrative piece below, I creatively adapt the genre of a research paper to recount my academic journey, literary experiences in computer and environmental sciences, and where I'm heading next.</p></div>
                <a href = "/PDFfiles/literaryNarrative.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="d-flex justify-content-between p-2 mt-2">
                       <span><AiOutlineFilePdf className = "up orange icon"/> Literary Narrative.pdf</span>
                       <span><AiOutlineDownload className = "up orange icon"/></span>
                    </div>
                </a>
            </div>
        </div>
        <div style = {{"height":"5vh"}}></div>
        <div className = "narrative block background2 mt-4">
        <h2 className = "mb-4">Paper is made from trees, but now we read on the Internet: Literature's influence on my passion for the environment and its integration with computer science</h2>

        <p className = "orange">Omi Johnson<sup>1,2,3</sup></p>

        <p className = "orange"><sup>1</sup>Khoury College of Computer Sciences, Northeastern University, Boston, MA
        <br/>
        <sup>2</sup>College of Science, Northeastern University, Boston, MA
        <br/>
        <sup>3</sup>Bigelow Laboratory of Ocean Sciences, East Boothbay, ME</p>

        <h3>1. Introduction</h3>
        <hr/>

        <p> Nature has always been a source of joy. I grew up in Virginia with a beautiful, lush backyard where I could waste my days away. One of my greatest pleasures is basking in the sunlight and seeing moments of casual natural beauty; even just walking through a park on the way to Target is a good, happy moment. Thoroughly understanding the natural world and the processes which make me so happy would be a privilege. What are the insects, fish, and plants I see around me called, and how do they live their lives? How do the tides and plates shape the coastline I call home? How will my local ecosystems react to climate change, and how can I preserve them? I once went on a date with a girl just because she studied insects for a living and I asked her bug questions all dinner (we didn't see each other again). However, for most of my life environmental science was nothing more than a hobby. Computer Science is my strongest skill and I used to define my academic life on an eventual CS career. It's only recently that I realized my interest in environmental science and now I'm learning to leverage a combination of both fields to explore problems neither could solve alone. </p>

        <p>I grew up as an academic, STEM-oriented kid. For years I wanted to be a math professor and sped through algebra and pre-calc courses. In my freshman year of high school I took an Intro to Programming class. I greatly enjoyed the problem-solving process and customizability of the code, cementing an interest in programming. I would eventually enter college as CS and psychology major convinced that my future was in AI. </p>

        <p>On the side in high school, I was a voracious reader. My dad is a carpenter but reads ecology and history books in his spare time. Taking after his tastes, I picked up a wide variety of nonfiction books, many related to environmental science (Figure 1). I loved learning about environmental processes, especially those on a large scale. The book Guns, Germs, and Steel in particular was my favorite because it explained how environmental factors across continents shaped human interactions (Diamond 1999). Thinking about the massive scale and influence of the environment was incredibly compelling and connected me to a larger whole. </p>

        <div className = "text-center mb-5">
            <div style={{"width":"80%", "margin":"0 auto"}}>
                <img src = "figure1.jpg" alt = "Figure 1"  width="80%"/>
                <p className = "orange"><i>Figure 1.</i> A sample of books I read in high school graphed by their relation to environmental science vs. how much I enjoyed them. The red dotted line displays the overall increasing relationship between environmental relation and enjoyment levels (Bodanis 1977; Diamond 1999; McDonough and Braungart 2002; Kahneman 2011; Preston 2017; Greene 2019).</p>
            </div>
        </div>

        <p>In my junior year of high school, my dad handed me an article from the Boston Globe about Greta Thunberg, a young climate activist who spearheaded youth climate strikes worldwide (Post and Rick 2019). Reading about her achievements inspired me and I collaborated with a friend to organize a school climate strike of our own. We founded a branch of a national climate activism organization Sunrise Movement and led a variety of environmental activism projects. I was suddenly a writer – I drafted weekly newsletters, emails to other organizations, speeches, op-eds, presentations, and interviews. It was an incredible, fast-paced experience and I got to impact and connect with my community, but balancing Sunrise with coursework and college applications burned me out quickly. Thinking that I'd lost my passion, I left environmental science behind when I entered college. </p>

        <p>My first few semesters of college were messy. I almost immediately switched my CS and psychology major to a CS and design one, greatly preferring studio classes to psychology lectures. I thought that I could go into frontend engineering and UX, but as my degree progressed I started feeling uneasy. I'd run out of fun art electives and had started to focus on pure design classes, which are formulaic and business oriented. The courses were no longer about creating art but creating products, and as much as I knew in theory that I needed professional skills I cared more about taking classes I enjoyed. I slowly started being reeled back into environmental science. I joined the recycling and botanical clubs and impulsively decided to take Dynamic Earth, an earth science course. </p>

        <p>Other interests aside, my first and foremost concern was computer science. I'd been chugging steadily through my CS coursework and had great grades throughout. For my first co-op, every resource I saw emphasized that the best path was to be a software engineer and enhance my resume with personal coding projects. However, I didn't have any personal coding projects. Computer science is something I'm good at and I enjoyed solving problems while completing my coursework, but it wasn't something I loved enough on its own to do in my free time. I tried taking a CS research class but dropped it after reading the first paper. I felt like an inferior programmer and was rejected from every position I applied to. Cutting my losses, I randomly applied for an opportunity as an ecological forecasting research intern at the Bigelow Laboratory of Ocean Sciences. Surprisingly enough I was asked to interview. </p> 

        <p>Preparing for the interview was tough. I was still a CS and design major, and a research position was not the career-driving co-op I'd been hoping for. However, after hearing about the projects I could work on at the lab and the values of Bigelow, that I could apply my knowledge of computer science to an environmental project and work alongside ocean science experts, it didn't matter anymore. I wanted to explore the field and learn about research and ocean science directly. I was still a CS and design major, but accepting that job offer was the unofficial moment I decided to switch over.</p> 

        <h3>2. Methods</h3>
        <hr></hr>

        <h3>2.1. Reading</h3>

        <p>Bigelow was scary to me because I felt thoroughly out of my depth. On week 1, I met with my boss Nick and he outlined the details of what he wanted me to do. I was to use machine learning algorithms and a shiny new set of R packages, Tidymodels, to model Right Whale distributions in the Northern Atlantic. I knew nothing about R, modeling, or right whales. </p>

        <p>The first paper I read was a modeling paper by my coworker whose research had inspired my project (Ross et al. 2021). I was lost the entire time. Ensemble models? BRTs? Calanus? I googled a new term every other sentence. I came away from that paper unable to ask intelligent questions or extract information that would be helpful for my modeling process. I attempted to read Tidymodels With R, an introductory textbook about the packages and modeling techniques I'd be using, to a similar effect (Silge 2023). After a week I decided to bite the bullet and just start the project, building an initial model based on a modeling blog post recommended by my supervisor and pulling information from different articles as needed (Views 2019). I cobbled together an initial model and slowly started to introduce improvements. Every time I moved forward with the model, so could I with my reading. I learned about the different types of models, such as BRTs, GAMs, and ANNs, and about the hyperparameters used to tune them. I learned about the different ocean regions in the North Atlantic and the species that right whales prey on, such as Calanus finmarchicus and Calanus hyperboreus. My knowledge was still slapdash at best but I slowly learned how to navigate the literature and improve my models.</p> 

        <h3>2.2. Writing</h3>

        <p>After a few months at Bigelow, I was tasked with creating a resource on the modeling techniques that I'd learned and presenting those techniques to the lab. It was my first time conveying my new knowledge to others. I started writing tutorials for each R package and the modeling process step-by-step. I came back to Tidymodels with R as a reference and found that I had a much better handle on the text now that I could approach the examples with experience under my belt. I put together a polished tutorial website and could proudly present it to my coworkers (Johnson 2022). </p>

        <p>My boss then approached me about writing a paper based on my research at Bigelow. I decided to accept, wanting to challenge myself with writing a publication. I continued my work part-time after my co-op and for credit in the fall semester. However, writing a paper was challenging. My work centers around creating maps of right whale habitat distributions. As a pure research project, I could confidently improve model accuracy and apply new techniques, but I didn't know how to tell whether the maps I generated were accurate descriptors of right whale habitat (Figure 2). Writing analyses and conclusions from my work required knowledge of the field I didn't have. Some of my research collaborators would critique my maps and say that they didn't line up with any of the results they'd derived in their prior works. I would compare my work to theirs, which used much more advanced techniques and intelligent connections,  and feel unqualified (Plourde et al 2019). Unmotivated and discouraged, the paper moved slowly and the deadlines I set myself were continually missed. </p>

        <div className = "text-center mb-5">
            <div style={{"width":"80%", "margin":"0 auto"}}>
                <img src = "figure2.png" alt = "Figure 2" width="80%"/>
                <p className = "orange"><i>Figure 2.</i> An example figure from my research. Predicted present-day Right Whale feeding habitat suitability during the representative months of a) January, b) April, c) July, and d) October. Feeding habitat suitability is expressed on a color bar scaling from 0 to .5 and represents the combined suitability across Calanus spp. prey species. I can create the figures just fine, but how can I write intelligently about these figures? How can I tell whether a result is due to modeling error or historical suitability patterns when I'm not familiar with the field?</p>
            </div>
        </div>

        <p>Eventually, I reached crunch time - I had two weeks to move from a collection of figures to a polished draft for school. Motivated by the deadline, I wrote furiously and immersed myself in a myriad of right whale publications. I still didn't quite know what I was doing but I dug into papers, papers cited by other papers, and papers cited by those papers to scrounge material I could reference in my work. I found other studies modeling right whale populations and compared their results to my own (Reygondeau and Beaugrand 2011; Grieve et al. 2017; Meyer-Gutbrod et al.). I managed to pull a complete draft together and felt reasonably confident about the work I had done. I knew my analyses weren't at the same level as my doctorate collaborators, but my conclusions at least were cited and reasonably useful. My collaborators were pleased. They considered my work near-publishable already and it was a major reassurance. One of my biggest ways to alleviate my anxiety is to remind myself that countless other people experience the same stresses and insecurities I do, and I realized that that had been true for my paper as well. </p>

        <h3>3. Results</h3>
        <hr/>

        <p>Unfortunately, changes to my research plan meant that I needed to change my methods and revise my paper before I could submit it for publication. I'm working on the paper to this day and will hopefully have a submittable draft by the end of the summer. I still suffer from insecurities compared to my doctorate collaborators, but now that I've completed a draft I'm more confident in my skills. My boss sends along articles about advances in ecological forecasting and I can actively read and discuss those publications in lab meetings (e.g. Record 2023).</p> 

        <p>Since my first co-op at Bigelow, I haven't had as many opportunities to combine my interests in CS and environmental science and have instead explored them separately. My environmental science coursework involves reading textbooks and articles about oceanography and tectonics and writing short reflections on them. For my second co-op, I worked as a QA engineer for the popular iOS notetaking app Notability in San Francisco. The job is primarily about testing and writing, with an emphasis on responding clearly and helpfully to beta testers and explaining issues to developers. I've greatly developed my ability to tailor my writing to different audiences as I interact with different departments of the company, but I've done so completely independent of anything environmental science related. The most environmental science reading I've done in months has been watching the leaves sway in Golden Gate Park. </p>

        <h3>4. Discussion</h3>
        <hr/>

        <p>I'd love to become an expert in the environmental topics I'm interested in and get firsthand knowledge interacting directly with ecosystems. However, I'm still figuring out whether I want to make a career out of it. My work at Notability did not involve a lick of environmental science but I got to live in a city surrounded by nature and do work that made our users' lives better – that was plenty enough for me. Ultimately, I don't need to live to work. I'd be happy to find a pure tech job that pays the bills and learn environmental concepts in my spare time, just like my dad reading biology books after a long day in carpentry. However, my time at Bigelow is a reminder that I can aim higher and combine my interests into an overarching career. Computer science is an incredibly flexible field that can support and amplify other disciplines, environmental science no exception. Ecological forecasting, for example, utilizes computational power to transform ecological knowledge into predictions that inform management techniques and save suffering ecosystems from climate change. I could write the code to control wind turbines and other sustainable energy technologies or analyze geologic data to plot the rock formations underfoot. I enjoy my work most when I can make an impact, just like my climate activism work from high school. I can and will leverage my passion for environmental and computer science to find an intersection I'm passionate about and preserve the natural world I love. </p>

        <h3>Literature Cited</h3>
        <hr></hr>
        
        <p class = "orange" style = {{"font-size":".9em"}}>
            Bodanis, D. 1977. The Secret House: The Extraordinary Science of an Ordinary Day.<br/>
            Diamond, J. M. 1999. Guns, Germs, and Steel: The Fates of Human Societies, First Edition. W. W. Norton & Company.<br/>
            Greene, J. 2019. Moral Tribes: Emotion, Reason, and the Gap Between Us and Them.<br/>
            Grieve, B. D., J. A. Hare, and V. S. Saba. 2017. Projecting the effects of climate change on Calanus finmarchicus distribution within the U.S. Northeast Continental Shelf. Sci Rep 7: 6264. doi:10.1038/s41598-017-06524-1<br/>
            Johnson, O. 2022. Tidymodels @ Bigelow.<br/>
            Kahneman, D. 2011. Thinking, Fast and Slow, 1st edition. Farrar, Straus and Giroux.<br/>
            McDonough, W., and M. Braungart. 2002. Cradle to Cradle: Remaking the Way We Make Things.<br/>
            Meyer-Gutbrod, E. L., K. T. A. Davies, C. L. Johnson, and others. Redefining North Atlantic right whale habitat-use patterns under climate change. Limnology and Oceanography n/a. doi:10.1002/lno.12242
            Plourde, S., C. Lehoux, C. L. Johnson, G. Perrin, and V. Lesage. 2019. North Atlantic right whale (Eubalaena glacialis) and its food: (I) a spatial climatology of Calanus biomass and potential foraging habitats in Canadian waters. Journal of Plankton Research 41: 667–685. doi:10.1093/plankt/fbz024<br/>
            Post, R., and W. Noack. 2019. A global wave of protests is underway as anger mounts among those who will have to live with climate change. The Boston Globe, January 25<br/>
            Preston, D. 2017. The Lost City of the Monkey God: A True Story.
            Record, N. 2023. Forecasting the Maine coast's future. Island Institute, June<br/>
            Reygondeau, G., and G. Beaugrand. 2011. Future climate-driven shifts in distribution of Calanus finmarchicus. Global Change Biology 17: 756–766. doi:10.1111/j.1365-2486.2010.02310.x<br/>
            Ross, C. H., D. E. Pendleton, B. Tupper, D. Brickman, M. A. Zani, C. A. Mayo, and N. R. Record. 2021. Projecting regions of North Atlantic right whale, Eubalaena glacialis, habitat suitability in the Gulf of Maine for the year 2050. Elementa: Science of the Anthropocene 9: 00058. doi:10.1525/elementa.2020.20.00058<br/>
            Silge, M. K. and J. Tidy Modeling with R.<br/>
            Views, R. 2019. A Gentle Introduction to tidymodels.<br/>
        </p>
    </div>
    </div>
    <div>
    <div className = "text-center" style = {{"height":"10vh"}}>
        <br/>
        <a href = "#">Back to Top</a>
    </div>
    </div>
    </div>
    )
}

export default Narrative;