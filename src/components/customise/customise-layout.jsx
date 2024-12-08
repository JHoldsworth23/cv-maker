/* eslint-disable react/prop-types */
export default function CustomiseLayout({ changeLayout }) {
    return (
        <div className="customise-div">
            <h3>Layout</h3>
            <div className="layout-buttons">
                <button onClick={() => changeLayout("top")}>
                    <div className="top-layout" />
                    TOP
                </button>
                <button onClick={() => changeLayout("left")}>
                    <div className="left-layout" />
                    LEFT
                </button>
                <button onClick={() => changeLayout("right")}>
                    <div className="right-layout" />
                    RIGHT
                </button>
            </div>
        </div>
    );
}