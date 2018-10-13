import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/header'
import ContactDetails from '../components/contact-details'
import Map from '../components/map'
import OpeningHours from '../components/opening-hours'

import Helmet from 'react-helmet'

const Cafe = ({ data }) => {
  const location = data.locationsJson
  const schema = data.schemasJson
  return (
    <Layout>
      <Helmet title={schema.name} />

      <Header title="Blueberry Cafe" />

      <section>
        <h2>{location.name}</h2>

        {location.content && (
          <section dangerouslySetInnerHTML={{ __html: location.content }} />
        )}
      </section>

      {/* <pre>{JSON.stringify(schema, null, 2)}</pre> */}
      <ContactDetails data={schema} />
      <Map data={data} />
      <OpeningHours data={schema} />

      <script
        type="text/javascript"
        src="https://widget.ratings.food.gov.uk/fhrswidget.jss?FHRSID=1035177&Culture=en-GB"
      />
    </Layout>
  )
}

export default Cafe

export const pageQuery = graphql`
  query($id: String!, $schemaId: String!) {
    schemasJson(_id: { eq: $schemaId }) {
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
    locationsJson(id: { eq: $id }) {
      name
      content
      googlePlaceId
    }
  }
`
