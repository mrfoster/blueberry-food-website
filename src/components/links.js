import * as React from 'react'
import { FaLink } from 'react-icons/fa'
import Img from 'gatsby-image'

const Links = ({ data }) => {
  return (
    <>
      {!!data.page.links.length && (
        <section id="links">
          <h2>
            <FaLink /> Links
          </h2>
          <ul>
            {data.page.links.map((l, i) => (
              <li key={i}>
                <a href={l.url} target="_blank">
                  <Img
                    fixed={l.image.childImageSharp.fixed}
                    alt={l.title}
                  />
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default Links
