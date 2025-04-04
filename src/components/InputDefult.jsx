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
            h-12 
            bg-white 
            w-full 
            border-b
            border 
            text-[#0f5a97]
            border-[#0f5a97]
            pl-2
            duration-500 
            focus:outline-none 
            focus:border-[#0f5a97]
            placeholder:text-[#0f5a97]
        '
    />
  )
}

export default InputDefult