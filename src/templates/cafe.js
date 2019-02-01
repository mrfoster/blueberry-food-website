import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/header'
import Contact from '../components/contact'
import Map from '../components/map'
import OpeningTimes from '../components/opening-times'
import Images from '../components/images'
import Documents from '../components/documents'
import Links from '../components/links'
import Helmet from 'react-helmet'
import { FaUtensils } from 'react-icons/fa'

const Cafe = ({ data }) => {
  return (
    <Layout>
      <Helmet title={data.schema.name} />
      <Helmet
        script={[
          {
            type: 'application/ld+json',
            innerHTML: data.schemaContent.fields.content,
          },
        ]}
      />

      <Header title="Blueberry Cafe" />

      <h2>
        <FaUtensils /> {data.page.name}
      </h2>
      {data.page.content && (
        <section dangerouslySetInnerHTML={{ __html: data.page.content }} />
      )}

      <Images data={data} />
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
  query($slug: String!, $schemaId: String!, $schemaName: String!) {
    schemaContent: file(name: { eq: $schemaName }) {
      fields {
        content
      }
    }
    schema: schemasJson(_id: { eq: $schemaId }) {
      name
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
      name
      content
      googlePlaceId
      vcf {
        publicURL
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
