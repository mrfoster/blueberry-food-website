import React from 'react'

import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const Cafe = ({ data }) => (
  <Layout>
    <h1>Cafe</h1>
    <pre>{JSON.stringify(data.schemasJson, null, 2)}</pre>
  </Layout>
)

export default Cafe

export const pageQuery = graphql`
  query($id: String!) {
    schemasJson(_id: { eq: $id }) {
      _id
      id
      telephone
    }
  }
`
