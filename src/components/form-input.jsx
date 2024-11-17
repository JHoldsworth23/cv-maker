/* eslint-disable react/prop-types */
import "../styles/form-input.css"

export default function FormInput({
    id, 
    type,
    labelText,
    placeholder,
    value,
    "data-info": info,
    onChange,
}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>
                {labelText}
            </label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              data-info={info}
            />
        </div>
    );
}