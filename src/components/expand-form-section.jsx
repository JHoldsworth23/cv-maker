/* eslint-disable react/prop-types */
import "../styles/form/expand-form-section.css";

export default function ExpandFormSection({
    title,
    icon,
    isOpen,
    setOpen
}) {
    return (
        <button
          className="expand-section"
          onClick={() => setOpen(isOpen ? "" : title)}
        >
            <h2 className="section-heading form-heading">
                <i className={icon}></i>
                {title}
            </h2>
            <i className={`fa-solid fa-chevron-up ${isOpen ? "open" : ""}`}></i>
        </button>
    );
}