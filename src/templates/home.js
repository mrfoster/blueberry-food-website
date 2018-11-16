import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Img from 'gatsby-image'
import './home.scss'
import { FaTruck, FaUtensils } from 'react-icons/fa'
import Contact from '../components/contact'

const Home = ({ data }) => {
  const cafePages = data.cafePages.pages.map(x => x.page)
  return (
    <Layout>
      <Header title={data.page.name} />
      {/* <section>
        <h2>
          <FaUtensils /> Cafes
        </h2>
        <div>
          {cafePages.map(page => (
            <div className="card" key={page.slug}>
              <Link to={page.slug}>{page.name}</Link>
            </div>
          ))}
        </div>
      </section> */}
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
      <section>
        <h2>
          <FaTruck /> Catering
        </h2>
        <p>
          Vestibulum eu viverra massa. Pellentesque eget lectus id purus
          consequat blandit. Duis vestibulum non orci vel egestas. Nulla a
          aliquet neque. Sed ac tincidunt urna, nec pretium sem. Vestibulum sit
          amet tristique dui. Aliquam ullamcorper eget risus in sodales.
        </p>
      </section>
      <Contact data={{ page: data.page, schema: data.schema.provider }} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query($slug: String!, $schemaId: String!) {
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
