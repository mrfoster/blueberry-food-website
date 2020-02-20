import React from "react"
import { FaLink } from "react-icons/fa"
import Img from "gatsby-image"

const Links = ({ data }) => (
  <>
    {data.links?.length && (
      <section id="links" className="links">
        <h2>
          <FaLink /> Links
        </h2>
        <ul>
          {data.links.map((l, i) => (
            <li key={i}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                title={l.title}
              >
                <Img fixed={l.image.childImageSharp.fixed} alt={l.title} />
                <span>{l.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    )}
  </>
)

export default Links
