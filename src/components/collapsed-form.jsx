/* eslint-disable react/prop-types */
import "../styles/collapsed-form.css";

export default function CollapsedForm({ id, title }) {
    return (
        <button className="collapsed-form" id={id}>
            <p>{title}</p>
        </button>
    );
}