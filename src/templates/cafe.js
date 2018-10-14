import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/header'
import ContactDetails from '../components/contact-details'
import Map from '../components/map'
import OpeningHours from '../components/opening-hours'

import Helmet from 'react-helmet'

const Cafe = ({ data }) => {
  return (
    <Layout>
      <Helmet title={`${data.schema.name} - ${data.schema.location}`} />

      <Header title={data.schema.name} subTitle={data.schema.location} />

      <section>
        {data.page.content && (
          <section
            dangerouslySetInnerHTML={{ __html: data.page.content }}
          />
        )}
      </section>

      {/* <pre>{JSON.stringify(schema, null, 2)}</pre> */}
      <ContactDetails data={data.schema} />
      <Map data={data} />
      <OpeningHours data={data.schema} />
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
    }
  }
`
