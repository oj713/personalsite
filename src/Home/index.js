import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import {Trans, useTranslation} from 'react-i18next';

const Home = () => {
    const {t} = useTranslation();

    return (
    <>
    <div className = "mainPane sixty" >
    <div>
        <div className = "hideme" style = {{height: "3em"}}></div>
        <div className = "block background2">
        <div className = "row">
            <div>
                <h1 className = "m-1 pb-0"><b>Omi H. Johnson</b></h1>
                <p className = "m-1"><i>{t("home.subtitle")}</i></p>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-sm-none col-md-2"></div>
            <div className = "col-sm-12 col-md-10">
                <Trans
                    i18nKey="home.body"
                    components={{
                        par: <p/>, // paragraph
                        parSm: <p className = "text-smaller pt-3"/>, // smaller text
                        i: <i/>
                    }}
                />
                <br/>
                <div>
                    <p className = "text-right text-smaller">
                        <a className = "accent2hover" href = "https://github.com/oj713/personalsite" target = "_blank" rel="noreferrer"><AiFillGithub class = "icon up accent2"/><i> {t("home.buildWithReact")}</i></a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className = "bottomCorner d-none d-md-block"><p class="accent2 ps-3 text-smaller"><i>{t("home.legend")} <Link to = "/publications#bigelow">{t("nav.publications")}</Link>.</i></p></div>
    </>
    )
}

export default Home;