import React from 'react'
import './NormalImg.css'

const NormalImg = ({
  alt,
  src,
  classNames,
  width=100,
}) => {
  return (
    <div className="image-container">
      <img alt={alt} src={src} className={`width-${width} responsive-img `+ classNames}/>
    </div>
  )
}

export default NormalImg
