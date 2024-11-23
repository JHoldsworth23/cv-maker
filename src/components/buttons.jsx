/* eslint-disable react/prop-types */
export default function Buttons({ save, remove }) {
    return (
        <div className="buttons">
            {/* CANCEL RESTORES THE PREVIOUS INFORMATION */}
            <button className="save-btn" onClick={save} type="submit">
                Save
            </button>
            <button className="delete-btn" onClick={remove} type="button">
                Delete
            </button>
        </div>
    );
}