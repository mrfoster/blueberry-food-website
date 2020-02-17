import { graphql } from "gatsby"
import React from "react"
import { FaUtensils } from "react-icons/fa"
import Contact from "../components/contact"
import Documents from "../components/documents"
import Header from "../components/header"
import Images from "../components/images"
import Layout from "../components/layout"
import Links from "../components/links"
import Map from "../components/map"
import OpeningTimes from "../components/opening-times"
import SEO from "../components/seo"
import Schema from "../components/schema"

const Cafe = ({ data }) => {
  const page = { ...data.page.frontmatter, html: data.page.html }
  return (
    <Layout>
      {/* <SEO title={data.schema.name} description={data.schema.description} />

      <Schema data={data} /> */}

      <Header title={page.name} />

      {/* <h2>
        <FaUtensils /> {data.page.location}
      </h2>
      {data.page.content && (
        <section dangerouslySetInnerHTML={{ __html: data.page.content }} />
      )}

      <Images data={data} />
      <Contact data={data} />
      <OpeningTimes data={data} />
      <Documents data={data} />
      <Map data={data} />
      <Links data={data} /> */}
    </Layout>
  )
}

export default Cafe

export const pageQuery = graphql`
  query($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        template
        title
        name
        location
        description
        email
        telephone
        address {
          streetAddress
          addressLocality
          addressRegion
          postalCode
          addressCountry
        }
        geo {
          latitude
          longitude
        }
        openingHours {
          name
          validFrom
          validThrough
          monday {
            opens
            closes
          }
          tuesday {
            opens
            closes
          }
          wednesday {
            opens
            closes
          }
          thursday {
            opens
            closes
          }
          friday {
            opens
            closes
          }
          saturday {
            opens
            closes
          }
          sunday {
            opens
            closes
          }
        }
        primaryImage {
          filePath {
            id
          }
          name
        }
        images {
          filePath {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          name
        }
        documents {
          filePath {
            id
          }
          name
        }
        links {
          image {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          url
          title
        }
      }
      html
    }
  }
`
