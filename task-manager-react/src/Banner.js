import React from 'react'
import "./Banner.css"
import bg from './bg-desktop-dark.jpg'
function Banner() {
  return (
    <div className="banner__container">
      <img className="banner" src={bg} alt="banner"/>
    </div>
  )
}

export default Banner
