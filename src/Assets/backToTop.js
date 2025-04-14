import { IoArrowUp } from "react-icons/io5";

const BackToTop = () => {
    return (
        <>
            <div className = "text-center m-4">
                <a className="accent2hover p-4" href = "#top"><IoArrowUp className = "icon"/></a>
            </div>
        </>
    );
};

export default BackToTop;