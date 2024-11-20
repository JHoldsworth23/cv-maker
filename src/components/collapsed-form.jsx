/* eslint-disable react/prop-types */
export default function CollapsedForm({ id, title }) {
    return (
        <button className="collapsed-form" id={id}>
            <p>{title}</p>
        </button>
    );
}