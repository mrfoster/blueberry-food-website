import React, { Component } from 'react'
import Img from 'gatsby-image'
import { FaImages } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

class Images extends Component {
  state = {
    currentIndex: 0,
  }

  prev = () => {
    this.setIndex(this.state.currentIndex - 1)
  }

  next = () => {
    this.setIndex(this.state.currentIndex + 1)
  }

  setIndex = i => {
    const l = this.props.data.page.images.length

    if (i < 0) {
      i = l - 1
    } else if (i >= l) {
      i = 0
    }
    this.setState({ currentIndex: i })
  }

  render() {
    const data = this.props.data
    return (
      <>
        {!!data.page.images.length && (
          <section id="images">
            <h2>
              <FaImages /> Images
            </h2>
            <div className="images">
              <Fade left opposite show={true}>
                <Img
                  fluid={
                    data.page.images[this.state.currentIndex].filePath
                      .childImageSharp.fluid
                  }
                  alt={data.page.images[this.state.currentIndex].name}
                />
              </Fade>
            </div>
            <button onClick={this.prev}>Prev</button>
            <button onClick={this.next}>Next</button>
          </section>
        )}
      </>
    )
  }
}

export default Images
