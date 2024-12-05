/* eslint-disable react/prop-types */
import "../styles/form/collapsed-form.css";

export default function CollapsedForm(props) {
    const { title, sectionName, onClick, changeVisibility } = props;
    const { id, isHidden } = props.form;

    return (
        <button 
          className="collapsed-form" 
          id={id}
          onClick={onClick}
          data-section-name={sectionName}
        >
            <p>{title}</p>
            <i 
              className={`fa-solid ${isHidden ? "fa-eye-slash" : "fa-eye"}`}
              onClick={(e) => {
                e.stopPropagation();
                changeVisibility(e);
              }}         
            ></i>
        </button>
    );
}