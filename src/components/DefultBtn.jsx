import React from 'react'

const DefultBtn = ({ btntype, onClick, btnvalue }) => {
  return (
    <button
        onClick={onClick}
        type={btntype}
        className='
            px-8 py-2
            rounded
            bg-gradient-to-tr from-pink-600 to-blue-600
            text-white
            duration-500
        '
    >
        {btnvalue}
    </button>
  )
}

export default DefultBtn