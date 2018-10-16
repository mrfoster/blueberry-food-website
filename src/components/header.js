import React, { Component } from 'react'
import { Link } from 'gatsby'
import './animate.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      subTitle: props.subTitle,
      animationClass: '',
    }
  }

  componentDidMount() {
    const animationClasses = [
      'bounce',
      'rubberBand',
      'swing',
      'tada',
      'wobble',
      'jello',
      'heartBeat',
    ]

    this.setState({
      animationClass:
        animationClasses[Math.floor(Math.random() * animationClasses.length)],
    })
  }

  render() {
    return (
      <header>
        <h1>
          <Link to="/">
            <img
              width="48"
              height="48"
              alt="Company Logo"
              className={`logo animated ${this.state.animationClass}`}
              src="/logo.svg"
            />
          </Link>
          {this.state.title}
        </h1>
        {this.state.subTitle && <h2>{this.state.subTitle}</h2>}
      </header>
    )
  }
}

export default Header
