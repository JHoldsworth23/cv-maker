/* eslint-disable react/prop-types */
import '../styles/example-loader.css'

export default function ExampleLoader({ load, clear }) {
    return (
        <div className="btn-container">
            <button className="load-btn" onClick={load}>Load Example</button>
            <button className="clear-btn" onClick={clear}>Clear Example</button>
        </div>
    );
}