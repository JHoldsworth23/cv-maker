/* eslint-disable react/prop-types */
export default function Buttons({ save, remove, cancel }) {
    return (
        <div className="buttons">
            <button className="delete-btn btn" onClick={remove} type="button">
                Delete
            </button>
            <button className="cancel-btn btn" onClick={cancel} type="button">
                Cancel
            </button>
            <button className="save-btn btn" onClick={save} type="submit">
                Save
            </button>
        </div>
    );
}