import React from 'react'
import './animate.css'

const Header = ({ title, subTitle }) => {
  const animationClasses = [
    'bounce',
    'rubberBand',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
  ]
  const animationClass =
    animationClasses[Math.floor(Math.random() * animationClasses.length)]

  return (
    <header>
      <h1>
        <img
          width="48"
          height="48"
          alt="Blueberry Logo"
          className={`logo animated ${animationClass}`}
          src="/logo.svg"
        />
        {title}
      </h1>
      {subTitle && <h2>{subTitle}</h2>}
    </header>
  )
}

export default Header
