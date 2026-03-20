import {Trans, useTranslation} from "react-i18next";
import CollapseBar from '../Assets/collapseBar.js';
import ImageGallery from "./imageGallery.js";

/**
 * Builds a "project block" for a publication or experience. Text specified in translation file.
 * 
 * @param {string} name the id of the project block
 * @param {Icon} Icon the icon for this project
 * @param {string | undefined} paperLink the href link to the paper, if there is one
 * @param {any} descriptionComponents specifications to Trans for the description section (links, etc)
 * @param {boolean} hasAbstract if the proj block has an abstract
 * @param {{link: string, icon: Icon}[]} linkComponents info for custom links
 * @param {{src: string, preview?: string, caption: string}[]} images image string names for gallery
 * @param {HTML | undefined} additionalContent additional content for a block, if any
 * @returns Project Block
 */
const ProjectBlock = ({
    id,
    Icon,
    paperLink,
    descriptionComponents,
    hasAbstract,
    linkComponents = [],
    images = undefined,
    additionalContent = undefined
}) => {
    const {t} = useTranslation();

    // translation shortcut
    const tpb = (spec) => {
        return t(`projBlock.${id}.${spec}`)
    }

    // translation shortcut with italics specification
    const TransPb = (spec) => {
        return(
            <Trans
            i18nKey={`projBlock.${id}.${spec}`}
            components={{ i: <i/> }}
            />
        )
    }

    return (
    <div>
        {/* Header */}
        <p className = "block d-inline-block accent1-bg">
            {paperLink ?
                <a href = {paperLink} target="_blank" rel="noreferrer">{TransPb("miniTitle")}</a>
                : TransPb("miniTitle")
            }
        </p>
        <div className = "row">
            <div className = "col-12">
                <h2 className = "mx-0 mt-2 mb-3"><Icon className = "up"/> {TransPb("mainTitle")} </h2>
                <p className = "text-smaller ps-1"><i>{tpb("subTitle")}</i></p>
            </div>
        </div>
        <div className = "row mt-2">
            <div className = "col-sm-none col-md-1"></div>
            <div className = "col-sm-12 col-md-11">
                {/* Description, Abstract */}
                <div className = "block background2">
                <Trans
                  i18nKey={`projBlock.${id}.description`}
                  components={descriptionComponents}
                />
                {hasAbstract &&
                    <CollapseBar title = {t("projBlock.general.abstract")}>
                        <p className = "mt-3" style = {{"font-size":".9em"}}> {TransPb("abstract")} </p>
                    </CollapseBar>
                }
                </div>
                {/* Primary links */}
                {
                    linkComponents.map((linkComponent, index) => {
                        const LinkIcon = linkComponent.icon;
                        return (
                            <a
                              key={linkComponent.link}
                              className="accent2hover"
                              href = {linkComponent.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                                <p className = {index === 0 ? "pt-3" : "pt-2"}><LinkIcon className = "icon accent2 up"/> {t(`projBlock.${id}.links.${index}`)} </p>
                            </a>
                        );
                    })
                }
                <div style = {{"height":"2em"}}></div>
                {images && <ImageGallery id={id} images = {images}/>}
                {additionalContent}
            </div>
        </div>
    </div>  
    );
};

export default ProjectBlock;