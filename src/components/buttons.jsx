/* eslint-disable react/prop-types */
export default function Buttons({ save }) {
    return (
        <div className="buttons">
            <button className="save-btn" onClick={save} type="submit">
                Save
            </button>

            {/* CANCEL AND DELETE BUTTONS */}
        </div>
    );
}