import React from 'react';

const NumberInput = ({ id, label, value, onChange, placeholder, min, max, required }) => {
return (
    <div className="form-floating mb-3">
    <input
        type="number"
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        required={required}
    />
    <label htmlFor={id}>{label}</label>
    </div>
);
};

export default NumberInput;
