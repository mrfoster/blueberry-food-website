import React, { Component } from 'react'
import Img from 'gatsby-image'
import { FaImages } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

class Images extends Component {
  currentIndex = 0

  prev = () => {
    alert('prev')
  }

  next = () => {
    alert('next')
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
              {data.page.images.map((image, index) => (
                <Fade key={index} left opposite when={this.show}>
                  <Img
                    fixed={image.filePath.childImageSharp.fixed}
                    alt={image.name}
                  />
                </Fade>
              ))}
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
