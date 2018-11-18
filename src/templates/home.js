import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Img from 'gatsby-image'
import './home.scss'
import { FaTruck, FaUtensils } from 'react-icons/fa'
import Contact from '../components/contact'
import Helmet from 'react-helmet'
const Home = ({ data }) => {
  const cafePages = data.cafePages.pages.map(x => x.page)
  return (
    <Layout>
      <Helmet
        script={[
          {
            type: 'application/ld+json',
            innerHTML: data.schemaContent.fields.content,
          },
        ]}
      />
      <Header title={data.page.name} />
      <section className="blocks">
        <h2>
          <FaUtensils /> Cafes
        </h2>

        <ul>
          {cafePages.map(page => (
            <li key={page.slug}>
              <Link to={page.slug} className="link">
                <span>{page.name}</span>{' '}
                <Img
                  alt={page.name}
                  fluid={page.primaryImage.filePath.childImageSharp.fluid}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {data.page.content && (
        <section>
          <h2>
            <FaTruck /> Catering
          </h2>

          <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
        </section>
      )}
      <Contact data={{ page: data.page, schema: data.schema.provider }} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query($slug: String!, $schemaId: String!, $schemaName: String!) {
    schemaContent: file(name: { eq: $schemaName }) {
      fields {
        content
      }
    }
    schema: schemasJson(_id: { eq: $schemaId }) {
      name
      provider {
        address {
          streetAddress
          addressLocality
          addressRegion
          postalCode
          addressCountry
        }
        telephone
        email
      }
    }
    page: pagesJson(slug: { eq: $slug }) {
      name
      vcf {
        publicURL
      }
    }
    cafePages: allPagesJson(filter: { template: { eq: "cafe" } }) {
      pages: edges {
        page: node {
          slug
          name
          primaryImage {
            filePath {
              childImageSharp {
                fluid(maxWidth: 470, maxHeight: 350) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
