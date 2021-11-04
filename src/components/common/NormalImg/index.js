import React from 'react'
import './NormalImg.css'

const NormalImg = ({
  alt,
  src,
  classNames,
  width=100, children
}) => {
  return (
    <div className="image-container">
      <img alt={alt} src={src} className={`width-${width} responsive-img `+ classNames}/>
      {children}
    </div>
  )
}

export default NormalImg
