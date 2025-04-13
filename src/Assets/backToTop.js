import { IoArrowUp } from "react-icons/io5";

const BackToTop = () => {
    return (
        <>
            <div style = {{"height":"2em"}}></div>
            <div className = "text-center" style = {{"height":"10vh"}}>
                <br/>
                <a className="accent1hover" href = "#top"><IoArrowUp className = "icon"/></a>
            </div>
        </>
    );
};

export default BackToTop;