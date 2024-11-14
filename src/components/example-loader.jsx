/* eslint-disable react/prop-types */
import '../styles/example-loader.css'

export default function ExampleLoader({ load, clear }) {
    return (
        <div>
            <button onClick={load}>Load Example</button>
            <button onClick={clear}>Clear Example</button>
        </div>
    );
}