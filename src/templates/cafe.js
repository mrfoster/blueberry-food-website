import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/header'
import Contact from '../components/contact'
import Map from '../components/map'
import OpeningTimes from '../components/opening-times'
import Gallery from '../components/gallery'
import Documents from '../components/documents'
import Links from '../components/links'
import Helmet from 'react-helmet'
import { FaUtensils } from 'react-icons/fa'

const Cafe = ({ data }) => {
  return (
    <Layout>
      <Helmet title={`${data.schema.name} - ${data.schema.location}`} />

      <Header title={data.schema.name} subTitle={data.schema.location} />

      {/* <h2>
        <FaUtensils /> {data.schema.location}
      </h2>
      <section>
        {data.page.content && (
          <section dangerouslySetInnerHTML={{ __html: data.page.content }} />
        )}
      </section> */}

      <Gallery data={data} />
      <Contact data={data} />
      <OpeningTimes data={data} />
      <Documents data={data} />
      <Map data={data} />
      <Links data={data} />
    </Layout>
  )
}

export default Cafe

export const pageQuery = graphql`
  query($slug: String!, $schemaId: String!) {
    schema: schemasJson(_id: { eq: $schemaId }) {
      name
      location
      address {
        streetAddress
        addressLocality
        addressRegion
        postalCode
        addressCountry
      }
      telephone
      email
      geo {
        latitude
        longitude
      }
      openingHoursSpecification {
        name
        dayOfWeek
        opens
        closes
      }
    }

    page: pagesJson(slug: { eq: $slug }) {
      content
      googlePlaceId
      vcf {
        publicURL
      }
      images {
        filePath {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
        name
      }
      documents {
        filePath {
          publicURL
        }
        name
      },
      links {
        url
        title
        image {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
