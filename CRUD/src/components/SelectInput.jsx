import React from 'react';

const SelectInput = ({ id, label, value, onChange, options, required }) => {
return (
    <>
    <select className="form-select" id={id} defaultValue="" onChange={onChange} required={required}>
        <option value="">{label}</option>
        {options.map(option => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
        ))}
    </select>
    </>
);
};

export default SelectInput;
