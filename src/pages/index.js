import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

const IndexPage = ({ data }) => {
  const locations = data.allLocationsJson.edges.map(x => x.node)
  return (
    <Layout>
      <Header title="Blueberry Food Company" />

      <section>
        <h2>Cafes</h2>
        <nav>
          <ul>
            {locations.map(l => (
              <li key={l.id}>
                <Link to={l.id}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section>
        <h2>Catering</h2>
        <p>
          Vestibulum eu viverra massa. Pellentesque eget lectus id purus
          consequat blandit. Duis vestibulum non orci vel egestas. Nulla a
          aliquet neque. Sed ac tincidunt urna, nec pretium sem. Vestibulum sit
          amet tristique dui. Aliquam ullamcorper eget risus in sodales.
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allLocationsJson {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
