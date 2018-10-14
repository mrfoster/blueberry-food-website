import React from 'react'

const Header = ({ title, subTitle }) => (
  <header>
    <h1>{title}</h1>
    {subTitle && <h2>{subTitle}</h2>}
  </header>
)

export default Header
