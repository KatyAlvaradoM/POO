import React from 'react';

const TextInput = ({ id, label, value, onChange, placeholder, required }) => {
return (
    <div className="form-floating mb-3">
    <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
    />
    <label htmlFor={id}>{label}</label>
    </div>
);
};

export default TextInput;
