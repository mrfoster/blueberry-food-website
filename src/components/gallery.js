import * as React from 'react'

import Img from "gatsby-image"

const Gallery = ({ data }) => {
  return (
    <>
      {data.page.images.length && (
        <section>
          <h3>Images</h3>
          {data.page.images.map((image, index) => (
            <Img key="index" fixed={image.image.childImageSharp.fixed} />
          ))}
        </section>
      )}
    </>
  )
}

export default Gallery
