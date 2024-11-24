/* eslint-disable react/prop-types */
export default function Buttons({ save, remove, cancel }) {
    return (
        <div className="buttons">
            <button className="cancel-btn btn" onClick={cancel} type="button">
                Cancel
            </button>
            <button className="save-btn btn" onClick={save} type="submit">
                Save
            </button>
            <button className="delete-btn btn" onClick={remove} type="button">
                Delete
            </button>
        </div>
    );
}