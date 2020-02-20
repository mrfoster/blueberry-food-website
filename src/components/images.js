import React, { Component } from "react"
import Img from "gatsby-image"
import { FaImages } from "react-icons/fa"
import Slider from "react-slick"

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
    const l = this.props.data.images.length

    if (i < 0) {
      i = l - 1
    } else if (i >= l) {
      i = 0
    }
    this.setState({ currentIndex: i })
  }

  render() {
    const images = this.props.data.images
    const settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "20%",
      slidesToShow: 1,
      speed: 500,
      // nextArrow: <span/>,
      // prevArrow: <span/>
    }
    return (
      <>
        {images?.length && (
          <section id="images">
            <h2>
              <FaImages /> Images
            </h2>
            <Slider {...settings} className="images">
              {images.map((image, index) => (
                <div key={index}>
                  <Img
                    fluid={image.filePath.childImageSharp.fluid}
                    alt={image.name}
                    className="image"
                  />
                </div>
              ))}
            </Slider>
          </section>
        )}
      </>
    )
  }
}

export default Images
