/* eslint-disable react/prop-types */
export default function AddNewForm({ children, section, onClick }) {
    return (
        <button 
          className="new-form"
          data-section-name={section}
          onClick={onClick}
        >
            <i className="fa-solid fa-plus"></i>
            {children}
        </button>
    );
}