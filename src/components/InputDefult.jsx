import React from 'react'

const InputDefult = ({ type, name, value, placeholder, required, onChange }) => {
  return (
    <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={!!required}
        onChange={onChange}
        className='
        
        '
    />
  )
}

export default InputDefult