import React from 'react'

const Card = ({classes,children}) => {
  return (
    <div className={`w-full max-w-[1300px]  mx-auto px-5 ${classes}`}>
        {children}
    </div>
  )
}

export default Card
