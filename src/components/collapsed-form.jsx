/* eslint-disable react/prop-types */
import "../styles/collapsed-form.css";

export default function CollapsedForm({ id, title, sectionName, onClick }) {
    return (
        <button 
          className="collapsed-form" 
          id={id}
          onClick={onClick}
          data-section-name={sectionName}
        >
            <p>{title}</p>
        </button>
    );
}