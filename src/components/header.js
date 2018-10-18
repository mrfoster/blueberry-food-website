import React, { Component } from 'react'
import { Link } from 'gatsby'
import Bounce from 'react-reveal/Bounce'
import Reveal from 'react-reveal/Reveal'

class Header extends Component {
  componentDidMount() {
    const effects = [
      'bounce',
      'rubberBand',
      'swing',
      'tada',
      'wobble',
      'jello',
      'heartBeat',
    ]

    this.setState({
      effect: effects[Math.floor(Math.random() * effects.length)],
    })
  }

  render() {
    return (
      <header>
        <Link to="/" className="logo">
          <Reveal when={this.state} effect={this.state && this.state.effect}>
            <img width="48" height="48" alt="Company Logo" src="/logo.svg" />
          </Reveal>
        </Link>

        <Bounce right>
          <h1>{this.props.title}</h1>
        </Bounce>
        {/* <div id="sotdwidget">
          <a href="https://www.scoresonthedoors.org.uk/business/blueberry-cafe-ltd-matlock-derbyshire-458558.html">
            "Blueberry Cafe Ltd" Food Hygiene Rating
          </a>
        </div>
        <script src="https://www.scoresonthedoors.org.uk/widget/widget.php?id=458558&type=FH" /> */}
      </header>
    )
  }
}

export default Header
