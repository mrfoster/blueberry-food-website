import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FaTruck, FaUtensils } from "react-icons/fa"
import Contact from "../components/contact"
import Header from "../components/header"
import Layout from "../components/layout"
import "./home.scss"
import Seo from "../components/seo"
import Schema from "../components/schema"

const Home = ({ data }) => {
  const page = {
    ...data.page.frontmatter,
    ...data.page.fields,
    content: data.page.content,
    // https://schema.org/FoodService
    schema: {
      type: "FoodService",
      nestedProvider: true,
    },
  }
  const locations = data.locations.edges
    .map((edge) => edge.node)
    .map((location) => ({
      ...location.frontmatter,
      ...location.fields,
    }))

  return (
    <Layout>
      <Seo title={page.name} description={page.description} />

      <Schema data={page} />

      <Header title={page.name} />

      <section className="blocks">
        <h2>
          <FaUtensils /> Cafes
        </h2>

        <ul>
          {locations.map((page) => (
            <li key={page.slug}>
              <Link to={page.slug} className="link">
                <span>
                  {page.name}
                  <br />
                  {page.location}
                </span>{" "}
                {page.images?.length && (
                  <GatsbyImage
                    alt={page.name}
                    image={page.images[0].filePath.childImageSharp.gatsbyImageData}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {!!page.content && (
        <section>
          <h2>
            <FaTruck /> Catering
          </h2>

          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </section>
      )}
      <Contact data={page} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeTemplate($id: String!) {
    locations: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "cafe" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            location
            images {
              filePath {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 470, height: 350, placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }

    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        template
        title
        name
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
      }
      content: html
      fields {
        slug
      }
    }
  }
`
