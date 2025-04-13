import { AiOutlineFilePdf, AiOutlineDownload } from "react-icons/ai";

const PdfDownload = ({filepath, children, showDownloadIcon = true}) => {
    return (
        <a href = {filepath} target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between p-2 mt-2">
           <span><AiOutlineFilePdf className = "up accent2 icon"/> {children} </span>
           {showDownloadIcon && <span><AiOutlineDownload className = "up accent2 icon"/></span>}
        </div>
    </a>
    );
}

export default PdfDownload;