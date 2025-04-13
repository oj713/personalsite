import { useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import "./collapseBar.css"; 
import Collapse from 'bootstrap/js/dist/collapse';

const CollapseBar = ({ title, children}) => {
    const contentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
      const collapseEl = contentRef.current;
      const bsCollapse = Collapse.getInstance(collapseEl) || new Collapse(collapseEl);
      bsCollapse.toggle();
      setIsOpen(!isOpen);
    };

    return (
        <div className="mt-3 mb-2">
        <button
            className="block collapseButton"
            onClick={toggleCollapse}
        >
            <span>{title}</span>
            <GoTriangleDown className={`arrow-icon transition-icon ${isOpen ? "rotate-180" : ""}`}/>
        </button>
        <div ref={contentRef} className="collapse">
            <div>
            {children}
            </div>
        </div>
        </div>
    );
};

export default CollapseBar;
