import PdfDownload from '../Assets/pdfDownload';
import {GiWhaleTail, GiSlicedBread, GiMirrorMirror} from 'react-icons/gi';
import BackToTop from '../Assets/backToTop';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import "./index.css";

const techKnowledge = [
    {
        id: "frontend",
        content: "JavaScript/TypeScript | D3.js | React.js | Node.js | Redux | Bootstrap"
    },
    {
        id: "backend",
        content: "R | C++ | Bash | Python | Java | SQL | D | Emscripten | Tidymodels"
    },
    {
        id: "dbsoftware",
        content: "Git/GitHub/GitLab | MySQL | MongoDB | ArcGIS | Adobe Suite"
    }
]

const workExperiences = [
    { id: "lip6" },
    { id: "bigelow", PublishIcon: GiWhaleTail },
    { id: "colobus", PublishIcon: GiMirrorMirror },
    { id: "parissaclay", PublishIcon: GiSlicedBread },
    { id: "taNu" },
    { id: "gingerlabs" }
]

const Resume = () => {
    const {t, i18n} = useTranslation();

    const ExperienceBlock = (
        id,
        PublishIcon = undefined
    ) => {
        return (
        <div>
            <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                <div>
                    <h4>{t(`cv.work.${id}.institution`)},</h4> <span className = "location-text"> {t(`cv.work.${id}.location`)}</span>
                    <p><i>{t(`cv.work.${id}.jobTitle`)}</i></p>
                </div>
                <div className = "vertcenter text-right text-md-end mt-2 mt-md-0"><p>{t(`cv.work.${id}.date`)}</p></div>
            </div>
            {PublishIcon &&
                <>
                <br/>
                <div>
                    <Link className = "accent2hover" to = {`/publications#${id}`}> <PublishIcon className = "icon accent2 up"/> 
                        <Trans i18nKey="cv.work.published" components = {{i: <i/>}}/>
                    </Link>
                </div>
                </>
            }
            <ul className="mt-3">
                <Trans i18nKey={`cv.work.${id}.bullets`}
                components = {{
                    i: <i/>,
                    li: <li/>
                }}/>
            </ul>
            <br/>
        </div>
        )
    }

    return (
    <div className = "mainPane eighty">
        <div className = "background2 block p-0">
        <PdfDownload filepath = {`/PDFfiles/OJohnson_CV_${i18n.language}.pdf`}>{t("cv.download")}</PdfDownload>
        </div>

        {/* Education */}
        <div style = {{"height":"2em"}}></div>
        <div>
            <div className = "row">
                <div className = "col"><h2 className = "m-1">{t("cv.education.title")}</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "d-none d-md-block col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                <div className="block background2"> 
                    <div class="accent1-bg block d-flex flex-column flex-md-row justify-content-between pb-1">
                        <div>
                            <h4>{t("cv.education.name")},</h4>
                            <span class="location-text">{t("cv.education.location")}</span>
                            <p><i>{t("cv.education.degree")}</i></p>
                        </div>
                        <div class="vertcenter text-right text-md-end mt-2 mt-md-0">{t("cv.education.date")}</div>
                    </div>
 
                    <br/>
                    <div class="row category_row">
                        <div className = "col-sm-12 col-md-3">
                            <p className = "location-text">{t("cv.education.relevantCoursework")}:</p>
                        </div>
                        <div className = "col-sm-12 col-md-9">
                            <p>{t("cv.education.rCourseList")}</p>    
                        </div>
                    </div>
                    <div class="row category_row">
                        <div className = "col-sm-12 col-md-3">
                            <p className = "location-text">{t("cv.education.honors")}:</p>
                        </div>
                        <div className = "col-sm-12 col-md-9">
                            <p>{t("cv.education.honorsList")}</p>    
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
                <div className = "col"><h2 className = "m-1">{t("cv.techKnowledge.title")}</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                    <div className = "col-sm-12 col-md-11">
                    <div className="block background2">
                    {
                        techKnowledge.map((item, index) => (
                            <div class="row category_row">
                                <div className = "col-sm-12 col-md-3">
                                    <p className = "location-text">{t(`cv.techKnowledge.${item.id}`)}:</p>
                                </div>
                                <div className = "col-sm-12 col-md-9">
                                    <p>{item.content}</p>    
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
                <div className = "col"><h2 className = "m-1" style = {{"font-size":"2em"}}>{t("cv.work.title")}</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                <div className="block background2">
                    {workExperiences.map((item) => ExperienceBlock(item.id, item.PublishIcon))}
                </div>
                </div>
            </div>
        </div>

        {/* Interests */}
        <div style = {{"height":"2em"}}></div>
        <div>
            <div className = "row">
                <div className = "col"><h2 className = "m-1">{t("cv.interests.title")}</h2></div>
            </div>
            <div className = "row mt-2">
                <div className = "col-sm-none col-md-1"></div>
                <div className = "col-sm-12 col-md-11">
                <div className="block background2">
                    {t("cv.interests.content")}
                </div>
                </div>
            </div>
        </div>

        <BackToTop/>
                
    </div>
    )
};

export default Resume;