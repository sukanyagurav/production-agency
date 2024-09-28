import React from 'react'

const Marquee = ({classes,children,styles}) => {
  return (
    <div className={`${classes ? classes : 'slider  w-full py-8 overflow-hidden '} `} style={styles}>
      {children}
    </div>
  )
}

export default Marquee
